import Vue from "vue";
import Router from "vue-router";
const Landing = () => import('./views/Landing.vue');
const MainNavbar = () => import('./layout/MainNavbar.vue');
const MainFooter = () => import('./layout/MainFooter.vue');
const Product = () => import('./views/Product.vue');

// import Landing from "./views/Landing.vue";
// import MainNavbar from "./layout/MainNavbar.vue";
// import MainFooter from "./layout/MainFooter.vue";
// import Product from "./views/Product.vue";
Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/product:productData",
      name: "product",
      components: { default: Product, header: MainNavbar, footer: MainFooter },
      props: true,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    { path: '*', redirect: '/' }, // catch all use case
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
