<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter headerBG"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-70 md-small-size-100 md-xsmall-size-130"
          >
            <span class="md-display-3" id="title1">บ้านหยอดเหรียญ</span>

            <h4>สินค้าดี ที่เดียวจบ ครบวงจร</h4>
            <br />
            <md-button
              v-scroll-to="{
                el: '#ourProduct',

                duration: 700,
                easing: 'ease-in-out',
                offset: -150,
                force: true,
                cancelable: true,
                onStart: onStart,
                onDone: onDone,
                onCancel: onCancel,
                x: false,
                y: true,
              }"
              class="md-success md-lg"
              target="_blank"
            >
              <i class="fas fa-shopping-basket"></i>สินค้าของเรา
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <!-- <h2 class="title text-center">บ้านหยอดเหรียญ</h2> -->
              <md-card-media id="logo1" class="BannerCenter">
                <img :src="logo" alt="People" />
              </md-card-media>
              <br />
              <span class="md-subheading"
                >เราเป็นผู้ให้บริการสินค้าตู้หยอดเหรียญต่างๆ เช่น
                เครื่องซักผ้าหยอดเหรียญ, ตู้กดน้ำดื่มหยอดเหรียญ,
                และโมดูลกล่องหยอดเหรียญที่มีคุณภาพสูง นึกถึงเครื่องหยอดเหรียญ
                นึกถึง "บ้านหยอดเหรียญ"</span
              >
            </div>
          </div>
          <br />
          <br />
          <div>
            <vue-flux
              id="fluxBanner"
              :options="fluxOptions"
              :images="fluxImages"
              :transitions="fluxTransitions"
              ref="slider"
            >
              <flux-pagination slot="pagination"></flux-pagination>
              <flux-controls slot="controls"></flux-controls>
            </vue-flux>
          </div>
          <br />
          <br />
          <md-divider></md-divider>
          <div class="features text-center mx-auto">
            <h2 class="title text-center" id="ourProduct">สินค้าของเรา</h2>
            <div class="md-layout md-gutter text-center mx-auto">
              \
              <div
                class="md-layout-item md-small-size-50 md-xsmall-size-100"
                v-for="product in productData"
                :key="product.productName"
                @click="gotoPage(product.id)"
              >
                <md-card md-with-hover>
                  <md-card-media>
                    <img
                      :src="getIconPath(product.cardImage)"
                      alt="People"
                      style="object-fit: contain;"
                    />
                  </md-card-media>

                  <md-card-content>
                    <div class="md-title">{{ product.productName }}</div>
                    <div class="md-subhead">คลิ๊กเพื่อดูสินค้าทังหมด</div>
                  </md-card-content>
                </md-card>
              </div>
            </div>
            <br />
            <md-divider></md-divider>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">ติดต่อเรา</h2>
          <div class="team">
            <div class="md-layout text-center">
              <div class="md-layout-item md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <a href="#" @click.prevent="openLinePage">
                        <img
                          :src="social_line"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid social-img"
                        />
                      </a>
                    </div>
                    <h4 class="card-title">
                      Line
                      <br />
                      <!-- <small class="card-description text-muted">Model</small> -->
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <a href="#" @click.prevent="openFBPage">
                        <img
                          :src="social_fb"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid social-img"
                        />
                      </a>
                    </div>
                    <h4 class="card-title">
                      Facebook
                      <br />
                      <!-- <small class="card-description text-muted">Designer</small> -->
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <a href="#" @click.prevent="click">
                        <img
                          :src="social_email"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid social-img"
                        />
                      </a>
                    </div>
                    <h4 class="card-title">
                      Email
                      <br />
                      <!-- <small class="card-description text-muted">Model</small> -->
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <a href="#" @click.prevent="openPhoneModal">
                        <img
                          :src="phone_img"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid social-img"
                        />
                      </a>
                    </div>
                    <h4 class="card-title">
                      Phone
                      <br />
                      <!-- <small class="card-description text-muted">Model</small> -->
                    </h4>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="section section-contacts">
        <div class="container">
          <Map></Map>
        </div>
      </div> -->
    </div>
    <md-dialog :md-active.sync="showDialog" class="phoneDialog">
      <md-dialog-title>ติดต่อเรา</md-dialog-title>

      <div class="md-layout md-gutter text-center">
        <div class="md-layout-item">
          <span class="md-display-1 text-dark">063-0964999</span>
        </div>
      </div>
      <br />
      <div class="md-layout md-gutter text-center">
        <div class="md-layout-item">
          <a href="tel:0630964999" data-rel="external">
            <md-button class="md-raised md-success"><h4>โทรเลย</h4></md-button>
          </a>
        </div>
      </div>

      <br />
    </md-dialog>
  </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions, FluxControls } from "vue-flux";
import product_data from "../productData/data.json";
// const product_data = () => import('../productData/data.json');

// import Map from "./components/Map";
export default {
  metaInfo: {
    // Children can override the title.
    title: "บ้านหยอดเหรียญ",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s",
    // Define meta tags here.
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "บ้านหยอดเหรียญ" },
      { name: "dc.title", content: "บ้านหยอดเหรียญ" },
      {
        name: "dc.description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      { name: "dc.relation", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "dc.source", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "dc.language", content: "th" },
      {
        name: "description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "robots",
        content:
          "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "og:url", content: "https://บ้านหยอดเหรียญ.com/" },
      { name: "og:site_name", content: "บ้านหยอดเหรียญ.com" },
      { name: "og:locale", content: "th" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "บ้านหยอดเหรียญ" },
      {
        name: "og:description",
        content:
          "บ้านหยอดเหรียญ จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "og:image",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/S__3817481.cf8e4407.jpg",
      },
      {
        name: "og:image:secure_url",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/909973.LINE.9c753bce.jpg",
      },
      { name: "og:image:width", content: "320" },
      { name: "og:image:height", content: "410" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "บ้านหยอดเหรียญ พีระเซอร์วิส" },
      {
        name: "twitter:description",
        content:
          "บ้านหยอดเหรียญ พีระเซอร์วิส จำหน่าย ติดตั้ง และซ่อมบำรุง เครืองหยอดเหรียญ กล่องหยอดเหรียญ ด้วยทีมงานที่มีประสปการณ์ กล่องหยอดเหรียญได้มาตรฐาน คุ้มค่าในการลงทุน มีความทนทานสูง สามารถติดตั้งได้กับเครื่องใช้ไฟฟ้าได้หลายชนิดเช่น",
      },
      {
        name: "twitter:image",
        content:
          "https://xn--e3cnod5bbg5dcs5c3bxj1e.com/img/S__3325955.de5647c0.jpg",
      },
      // Often the same as your meta description, but not always.
    ],
    link: [
      { rel: "canonical", href: "https://บ้านหยอดเหรียญ.com" },
    ],
  },
  bodyClass: "landing-page",
  components: {
    VueFlux,
    FluxPagination,
    FluxControls,
  },
  data() {
    return {
      productData: product_data.products,
      name: null,
      email: null,
      message: null,
      fluxOptions: {
        autoplay: true,
      },
      showDialog: false,
      fluxTransitions: {
        transitionBook: Transitions.transitionSlide,
      },
      fluxImages: [
        this.bannerImage1,
        this.bannerImage2,
        this.bannerImage3,
        this.product3,
        this.bannerImage4,
        this.bannerImage5,
        this.bannerImage6,
        this.bannerImage7,
      ],
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  mounted() {},
  methods: {
    getIconPath(imgName) {
      return imgName ? require(`../assets/img/${imgName}`) : "";
    },
    gotoPage(productId) {
      for (var product of this.productData) {
        if (product.id === productId) {
          this.$router.push({
            name: "product",
            params: {
              productData: product,
            },
          });
        }
      }
    },
    openLinePage() {
      window.open("http://line.me/ti/p/~0630964999", "_blank");
    },
    openFBPage() {
      window.open("http://www.facebook.com/wannisa.thonekom", "_blank");
    },
    openPhoneModal() {
      this.showDialog = true;
    },
  },
  beforeMount() {
  },
  props: {
    logo: {
      type: String,
      default: require("@/assets/img/logo-banner.jpg"),
    },
    logo_only: {
      type: String,
      default: require("@/assets/img/logo-only.png"),
    },
    logo_transparent: {
      type: String,
      default: require("@/assets/img/logo-cutout.png"),
    },
    header: {
      type: String,
      default: require("@/assets/img/w3-min-s.jpg"),
    },
    social_line: {
      type: String,
      default: require("@/assets/img/line2.png"),
    },
    social_fb: {
      type: String,
      default: require("@/assets/img/fb2.png"),
    },
    social_email: {
      type: String,
      default: require("@/assets/img/gmail.jpg"),
    },
    phone_img: {
      type: String,
      default: require("@/assets/img/phone2.jpg"),
    },
    product1: {
      type: String,
      default: require("@/assets/img/909973.LINE.jpg"),
    },
    product2: {
      type: String,
      default: require("@/assets/img/909970.LINE.jpg"),
    },
    product3: {
      type: String,
      default: require("@/assets/img/S__3325955.jpg"),
    },
    bannerImage1: {
      type: String,
      default: require("@/assets/img/909975.LINE.jpg"),
    },
    bannerImage2: {
      type: String,
      default: require("@/assets/img/909971.LINE.jpg"),
    },
    bannerImage3: {
      type: String,
      default: require("@/assets/img/909973.LINE.jpg"),
    },
    bannerImage4: {
      type: String,
      default: require("@/assets/img/909974.LINE.jpg"),
    },
    bannerImage5: {
      type: String,
      default: require("@/assets/img/S__4145158.jpg"),
    },
    bannerImage6: {
      type: String,
      default: require("@/assets/img/S__4145159.jpg"),
    },
    bannerImage7: {
      type: String,
      default: require("@/assets/img/S__4145160.jpg"),
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.BannerCenter {
  margin: auto;
  width: 70%;
  padding: 10px;
}
#fluxBanner {
  height: 30rem !important;
}
.social-img {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.3s ease;
  backface-visibility: hidden;
}
.social-img:hover {
  transform: scale(1.1);
}
.logo {
  width: 4rem;
}
#title1 {
  color: aliceblue;
}
.headerBG {
  height: 600px !important;
}
.phoneDialog {
  margin-top: 10rem;
  max-height: 270px !important;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 180px !important;
}
.md-card {
  height: 90%;
}
</style>
