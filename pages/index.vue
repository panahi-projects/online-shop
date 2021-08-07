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
                  <FilterList></FilterList>
                </div>
                <div class="col-12 m-t-32">
                  <SInput
                    type="search"
                    placeholder="Search the product you are looking for..."
                  />
                </div>
                <div class="col-12 m-t-32">
                  <ProductsList :items="productsList" />
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
  watch: {
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
