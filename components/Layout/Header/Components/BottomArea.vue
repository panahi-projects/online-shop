<template>
  <div class="container-x">
    <div class="row">
      <div class="col-12">
        <div class="menu">
          <nav>
            <ul>
              <li v-for="(item, idx) of items" class="menu-item">
                <div :class="item.isActive ? 'active' : ''">
                  <span>
                    <font-awesome-icon :icon="item.icon" />
                  </span>
                  <span v-html="item.name"></span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            name: "Clothing & Shoes",
            icon: "tshirt",
            isActive: true,
          },
          {
            id: 2,
            name: "Entertainment",
            icon: "film",
            isActive: false,
          },
          {
            id: 3,
            name: "Entertainment",
            icon: "music",
            isActive: false,
          },
          {
            id: 4,
            name: "Sport & Lifstyle",
            icon: "dumbbell",
            isActive: false,
          },
          {
            id: 5,
            name: "Pets",
            icon: "bone",
            isActive: false,
          },
          {
            id: 6,
            name: "Kitchen Accesories",
            icon: "utensils",
            isActive: false,
          },
          {
            id: 7,
            name: "Travel Equipment",
            icon: "binoculars",
            isActive: false,
          },
          {
            id: 8,
            name: "Growing & Garden",
            icon: "seedling",
            isActive: false,
          },
          {
            id: 9,
            name: "Electronical Tools",
            icon: "bolt",
            isActive: false,
          },
          {
            id: 10,
            name: "Mother Care",
            icon: "baby-carriage",
            isActive: false,
          },
          {
            id: 11,
            name: "Toys & Entertainment",
            icon: "bicycle",
            isActive: false,
          },
          {
            id: 12,
            name: "Vintage",
            icon: "rainbow",
            isActive: false,
          },
        ];
      },
    },
  },
};
</script>
<style lang="scss">
.menu {
  margin: auto 16px;
  nav {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
.menu-item {
  div {
    cursor: pointer;
    padding: 4px 8px;
    margin: 4px;
    border-radius: 8px;
    font-size: 12px;
    color: $color_secondary_text;
    span {
      display: block;
      text-align: center;
      word-spacing: -2px;
    }
    transition: 0.3s;
  }
}
.menu-item div:hover,
.menu-item div:focus {
  background-color: $color_primary_very_pale;
  color: $color_primary !important;
}
.active {
  background-color: $color_primary_very_pale;
  color: $color_primary !important;
}
</style>
