<template>
  <div class="SCard">
    <section class="image clearfix">
      <img :src="item.image" />
    </section>
    <section class="title ellipsis m-t-16">
      <h3 v-html="item.title"></h3>
    </section>
    <section class="fs-23 fw-800 m-t-12 m-b-12">
      $ <span v-html="item.price"></span>
    </section>
    <section
      class="description ellipsis theme-fg-color_tertiary_text fs-13 fw-600"
      v-html="
        item.description && item.description.length > 40
          ? `${item.description.substr(1, 40)}...`
          : item.description
      "
    ></section>
    <section class="functionalities">
      <div class="row">
        <div class="col-6">
          <SRating :score="randomScore" />
        </div>
        <div class="col-6 save-btn">
          <SButton
            @click="onAddToCart"
            :disabled="item.stock <= 0 ? true : false"
          >
            <template v-if="item.stock >= 1">
              <font-awesome-icon icon="heart" />
              <span>Save</span>
            </template>
            <template v-else>
              <span class="fs-8">Out of Stock</span>
            </template>
          </SButton>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SButton from "./SButton.vue";
import SRating from "./SRating.vue";
export default {
  components: { SButton, SRating },
  props: {
    item: {
      type: Object,
      default: {
        id: 1,
        image: "",
        title: "Product Name",
        price: 12.45,
        description: "Lorem Ipsum",
        category: "",
      },
    },
  },
  methods: {
    onAddToCart() {
      if (this.item.stock >= 1) {
        this.$store.dispatch("cart/addToCart", this.item);
        this.item.stock -= 1;
      }
    },
  },
  computed: {
    randomScore() {
      return parseFloat((Math.random() * 5).toFixed(2));
    },
  },
};
</script>
<style lang="scss" scoped>
.SCard {
  background-color: $color_base;
  padding: 8px 16px;
}
.image {
  width: 100%;
  height: 200px;
}
.image img {
  width: 100%;
  height: 200px;
  object-fit: scale-down;
}
.title {
  overflow: hidden;
  min-height: 40px;
  line-height: 1.1;
}
.description {
  height: 35px;
}
.save-btn {
  text-align: right;
}
</style>