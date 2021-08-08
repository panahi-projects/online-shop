<template>
  <div class="container-x p-l-18 p-r-18 m-t-24">
    <div class="row">
      <div class="col-3">
        <div class="m-r-12">
          <SideBar :filterItems="filterItems" />
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-12">
            <div class="theme-border-color_secondary_pale radius-8 p-10 m-b-64">
              <div class="row">
                <div class="col-12">
                  <FilterList @data="onGetData"></FilterList>
                </div>
                <div class="col-12 m-t-32">
                  <SInput
                    type="search"
                    placeholder="Search the product you are looking for..."
                    @input="onSearch"
                  />
                </div>
                <div class="col-12 m-t-32">
                  <template v-if="filteredProductsList.length">
                    <ProductsList :items="filteredProductsList" />
                  </template>
                  <template v-else>
                    <ProductsList :items="productsList" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SideBar, FilterList, SInput, ProductsList } from "@/components";
export default {
  components: { SideBar, FilterList, SInput, ProductsList },
  data() {
    return {
      productsList: [],
      filteredProductsList: [],
      filterItems: [],
      brandList: [
        "Nike",
        "Adidas",
        "Microsoft",
        "Xiaomi",
        "Samsung",
        "Apple",
        "Huawei",
      ],
    };
  },
  activated() {
    // Call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch();
    }
  },
  async fetch() {
    let productsList = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    this.productsList = productsList.map((p) => {
      let rnd_Count = Math.floor(Math.random() * 10);
      this.$set(p, "stock", rnd_Count);
      this.$set(
        p,
        "brand",
        this.brandList[Math.floor(Math.random() * this.brandList.length - 1)]
      );
      return p;
    });
  },
  computed: {
    filters() {
      return this.$store.getters["productsFilters/getFilters"];
    },
  },
  watch: {
    filters: {
      handler(newVal) {
        console.log("FILTERS...", newVal);
        if (newVal?.length) {
          var myArrayFiltered = [];
          let brandsFilter = newVal.filter((x) => x.category == "Brands");
          if (brandsFilter?.length) {
            myArrayFiltered = this.productsList.filter((el) => {
              return brandsFilter.some((f) => {
                return f.item.key === el.brand && f.category === "Brands";
              });
            });
          }

          let priceFilter = newVal.filter((x) => x.category == "Price");
          if (priceFilter?.length) {
            let filteredByBrand = myArrayFiltered?.length
              ? myArrayFiltered
              : this.productsList;

            myArrayFiltered = filteredByBrand.filter((el) => {
              debugger;
              return priceFilter.some((f) => {
                debugger;
                let min;
                let max;
                if (f.category === "Price") {
                  let isPriceRange = f.item.key.split("-");
                  let isNumber = !isNaN(isPriceRange[0]);
                  if (isNumber) {
                    min = parseInt(isPriceRange[0]);
                    max = !isNaN(isPriceRange[1])
                      ? parseInt(isPriceRange[1])
                      : -1;
                  }
                  if (typeof min == "number" && typeof max == "number") {
                    if (max === -1) {
                      return el.price >= min;
                    } else {
                      return el.price >= min && el.price <= max;
                    }
                  } else {
                    return f;
                  }
                } else {
                  return f;
                }
              });
            });
          }

          debugger;
          console.log("myArrayFiltered 2:", myArrayFiltered);
          this.filteredProductsList = myArrayFiltered;
        } else {
          this.filteredProductsList = this.productsList;
        }
      },
      deep: true,
    },
    productsList: {
      handler(newVal, oldVal) {
        if (newVal?.length) {
          let setOfBrands = new Set();

          let brands = [];
          let prices = [];

          let MinPrice = Math.min.apply(
            Math,
            newVal.map(function (o) {
              return o.price;
            })
          );
          let MaxPrice = Math.max.apply(
            Math,
            newVal.map(function (o) {
              return o.price;
            })
          );
          let diff = MaxPrice - MinPrice;
          let steps = diff / 9;

          for (const i of newVal) {
            setOfBrands.add(i.brand);
          }
          for (const s of Array.from(setOfBrands)) {
            if (s) {
              let obj = {
                key: s,
                value: s,
              };
              brands.push(obj);
            }
          }
          for (let i = MinPrice; i < MaxPrice; i += steps) {
            let obj = {
              key: `${parseInt(i)}-${parseInt(i + steps)}`,
              value: `${parseInt(i)} $ - ${parseInt(i + steps)} $`,
            };
            if (i + steps >= MaxPrice) {
              obj.value = `${parseInt(i)} $ and Higher`;
            }
            prices.push(obj);
          }

          this.filterItems = [
            {
              id: 1,
              title: "Brands",
              items: [...brands],
            },
            {
              id: 2,
              title: "Price",
              items: [...prices],
            },
          ];
        }
      },
      deep: true,
    },
  },
  methods: {
    onGetData(data) {
      console.log("data", data);
      if (data) {
        if (this.filteredProductsList?.length) {
          if (data.sortBy == "lowest_price") {
            this.filteredProductsList.sort((a, b) =>
              a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            );
          } else {
            this.filteredProductsList.sort((a, b) =>
              a.price > b.price ? -1 : b.price > a.price ? 1 : 0
            );
          }
        } else if (this.productsList?.length) {
          if (data.sortBy == "lowest_price") {
            this.productsList.sort((a, b) =>
              a.price > b.price ? 1 : b.price > a.price ? -1 : 0
            );
          } else {
            this.productsList.sort((a, b) =>
              a.price > b.price ? -1 : b.price > a.price ? 1 : 0
            );
          }
        }
      }
    },
    onSearch(e) {
      /*
      debounce causes the function triggers 600 millieseconds after entering values.
      [600ms is the default value for delay, it is possible to customize it by set it as the second parameters of the '_debounce()' method. 
       e.g: _debounce(() => {}, 700)]
      */
      const search = this._debounce((val) => {
        if (val) {
          if (this.productsList.length) {
            let filteredProductsList = this.productsList.filter((x) =>
              x.title.toLowerCase().includes(val.toLowerCase())
            );
            this.filteredProductsList = filteredProductsList;
            console.log("filteredProductsList", filteredProductsList);
          }
        } else {
          this.filteredProductsList = [];
        }
      });
      search(e.value);
    },
  },
};
</script>

<style lang="scss">
.container-xl {
  .row {
    div span {
      background: $orange;
      margin: 4px;
      padding: 6px;
      border-radius: 4px;
      display: block;
    }
  }
}
</style>
