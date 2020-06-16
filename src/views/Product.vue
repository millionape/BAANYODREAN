<template>
  <div class="wrapper">
    <div class="section page-header header-filter ov" :style="headerStyle">
      <div class="container ct">
        <div class="md-layout layout mx-auto">
          <div class="md-layout-item">
            <md-card class="contentCard">
              <md-card-content class="text-center">
                <br />
                <span class="md-display-1 head-t">{{
                  product.productName
                }}</span>
                <br />
                <br />
              </md-card-content>
              <md-divider class=""></md-divider>
              <div class="cardCT">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    <md-card>
                      <div>
                        <!-- <h4 class="c-header">HELOOOO</h4> -->
                      </div>
                      <md-card-area>
                        <md-card-media>
                          <vue-flux
                            id="imgViewer"
                            :options="fluxOptions"
                            :images="fluxImages"
                            :transitions="fluxTransitions"
                            ref="slider"
                          >
                            <flux-pagination
                              slot="pagination"
                            ></flux-pagination>
                            <flux-controls slot="controls"></flux-controls>
                          </vue-flux>
                        </md-card-media>
                        <div class="text-center productDes">
                          <br />
                          <h5>{{ product.descriptions }}</h5>
                          <br />
                        </div>
                      </md-card-area>
                    </md-card>
                  </div>
                </div>
                <md-divider></md-divider>
                <br />
                <div class="md-layout md-gutter ">
                  <md-card
                    class="descriptionCard"
                    v-for="product in product.subProducts"
                    :key="product.productName"
                  >
                    <md-card-header>
                      <md-card-header-text class="text-center">
                        <h3>{{ product.productName }}</h3>
                      </md-card-header-text>
                    </md-card-header>
                    <md-divider></md-divider>
                    <div class="md-layout md-gutter descriptionCard">
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100"
                      >
                        <!-- <vue-flux
                          id="imgViewerProduct"
                          :options="fluxOptions"
                          :images="getFirstImageArray(product.images)"
                          :transitions="fluxTransitions"
                          ref="slider"
                        >
                          <flux-pagination slot="pagination"></flux-pagination>
                          <flux-controls slot="controls"></flux-controls>
                        </vue-flux> -->
                        <img
                          :src="getIconPath(product.images[0])"
                          alt="People"
                          style="object-fit: contain;"
                        />
                      </div>
                      <!-- <div
                        class="md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100"
                      >
                        <div class="productDes">
                          <span class="md-title subcard-title">{{
                            product.productName
                          }}</span>
                        </div>
                      </div> -->
                      <div
                        class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100 productDes"
                      >
                        <div>
                          <h2 class="productDes">รายละเอียดสินค้า</h2>
                          <div class="productDes">
                            <p>{{ product.description }}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100 md-xsmall-size-100"
                      ></div>
                    </div>
                    <br />
                    <md-divider></md-divider>

                    <span class="md-caption" id="caption">รูปภาพสินค้า</span>
                    <div id="gall">
                      <gallery
                        :id="`gwee-${product.productName}-${product.id}`"
                        :images="getImageArray(product.images)"
                        :index="index"
                        @close="index = null"
                      ></gallery>
                      <a href="#" @click.prevent="imgclicked">
                        <div
                          class="image"
                          v-for="(image, imageIndex) in getImageArray(
                            product.images
                          )"
                          :key="imageIndex"
                          @click="index = imageIndex"
                          :style="{
                            backgroundImage: 'url(' + image + ')',
                            width: '130px',
                            height: '100px',
                          }"
                        ></div>
                      </a>
                    </div>
                  </md-card>
                </div>
                <div class="md-layout"></div>
              </div>
              <div class="team">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <h3 class="text-center">สอบถามราคา หรือ ติดต่อเราได้ที่</h3>
                <div class="md-layout text-center">
                  <div class="md-layout-item md-small-size-50">
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
                  <div class="md-layout-item md-small-size-50">
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
                  <div class="md-layout-item md-small-size-50">
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
                  <div class="md-layout-item md-small-size-50">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <a href="#" @click.prevent="openPhoneModal">
                            <img
                              :src="phone_img"
                              alt="Thumbnail Image"
                              class="rounded-circle"
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
            </md-card>
          </div>
        </div>
      </div>
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
import { LoginCard } from "@/components";
import { VueFlux, FluxPagination, Transitions, FluxControls } from "vue-flux";
import VueGallery from "vue-gallery";

// import VueGallerySlideshow from "vue-gallery-slideshow";
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
    link: [{ rel: "canonical", href: "https://บ้านหยอดเหรียญ.com" }],
  },
  components: {
    VueFlux,
    FluxPagination,
    FluxControls,
    gallery: VueGallery,
  },
  bodyClass: "product-page",
  data() {
    return {
      showDialog: false,
      firstname: null,
      email: null,
      password: null,
      product: null,
      title: "",
      fluxOptions: {
        autoplay: true,
      },
      fluxImages: [],
      fluxTransitions: {
        transitionBook: Transitions.transitionSlide,
      },
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff",
      ],
      index: null,
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg1.png"),
    },
    product2: {
      type: String,
      default: require("@/assets/img/909970.LINE.jpg"),
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
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    openPhoneModal() {
      this.showDialog = true;
    },
    getImageArray(path) {
      var tmp_arr = [];
      for (var img_path of path) {
        tmp_arr.push(require(`../assets/img/${img_path}`));
      }
      return tmp_arr;
    },
    getIconPath(imgName) {
      return imgName ? require(`../assets/img/${imgName}`) : "";
    },
    getImages() {
      var tmp_arr = [];
      var imgsPath = this.$route.params.productData.sliderImage;
      for (var img_path of imgsPath) {
        tmp_arr.push(require(`../assets/img/${img_path}`));
      }
      this.fluxImages = tmp_arr;
    },
    openLinePage() {
      window.open("http://line.me/ti/p/~0630964999", "_blank");
    },
    openFBPage() {
      window.open("http://www.facebook.com/wannisa.thonekom", "_blank");
    },
    imgclicked(){
      
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header}) `,
      };
    },
  },
  mounted() {
    this.product = this.$route.params.productData;
    this.getImages();
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1.3rem;
}
// @import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';
// .imgShow {
//   height: 500px !important;
//   width: 300px;
// }
// .imgPreview {
//   width: 200px;
// }
.c-header {
  margin-left: 10px;
}
.productDes {
  margin-top: 0.5rem;
  margin-left: 4px;
  margin-right: 4px;
}

.contentCard {
  width: 100% !important;
  height: 100% !important;
}
.ct {
  margin-top: 70px;
  /* margin-bottom: 150px; */
  width: 100% !important;
  height: 100% !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.layout {
  width: 100% !important;
  height: 100% !important;
}
.wrapper {
  height: 2200px !important;
}
.phoneDialog {
  margin-top: 10rem;
  max-height: 270px !important;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 180px !important;
}
.ov {
  /* width: 100%; */
  /* background-size: 300% !important; */
  height: 2400px !important;
  /* position: absolute;
    width: 100%; height:100%;
    top:0; left:0;
    background:rgba(0,0,0,0.6);
    opacity: 0;
    transition: all 1s;
    -webkit-transition: all 1s; */
}
.section {
  height: 1900px !important;
}
.md-card .md-card-header {
  background-color: #30475e !important;
  color: aliceblue;
}
/* #imgViewer {
  width: 500px;
  height: 500px;
} */
.contactBtn {
  padding-top: 3rem;
}
.cardCT {
  margin-left: 1rem;
  margin-right: 1rem;
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
.descriptionCard {
  min-height: 250px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.subcard-title {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
}
#imgViewerProduct {
  min-height: 250px !important;
}
.head-t {
  color: black !important;
}
/* .md-layout-item {
    background: red;
    margin-top: 8px;
    margin-bottom: 8px;
  } */
.productDes {
  margin-top: 0.7rem;
  margin-left: 0.7rem;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  // z-index: 9000;
}
#caption {
  margin-top: 1.3rem;
  margin-left: 1.3rem;
}
#gall {
  margin-left: 1.4rem;
  margin-bottom: 3rem !important;
}

</style>
