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
          <div class="features text-center">
            <h2 class="title text-center" id="ourProduct">สินค้าของเรา</h2>
            <div class="md-layout md-gutter">
              <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                @click="gotoPage('washingMaschine')"
              >
                <md-card md-with-hover>
                  <md-card-media>
                    <img
                      :src="product1"
                      alt="People"
                      style="object-fit: contain;"
                    />
                  </md-card-media>

                  <md-card-content>
                    <div class="md-title">เครื่องซักผ้าหยอดเหรียญ</div>
                    <div class="md-subhead">คลิ๊กเพื่อดูสินค้าทังหมด</div>
                  </md-card-content>
                </md-card>
              </div>
              <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
              >
                <md-card md-with-hover>
                  <md-card-media>
                    <img
                      :src="product2"
                      alt="People"
                      style="object-fit: contain;"
                    />
                  </md-card-media>

                  <md-card-content>
                    <div class="md-title">ตู้กดน้ำหยอดเหรียญ</div>
                    <div class="md-subhead">คลิ๊กเพื่อดูสินค้าทังหมด</div>
                  </md-card-content>
                </md-card>
              </div>
              <div
                class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
              >
                <md-card md-with-hover>
                  <md-card-media>
                    <img
                      :src="product3"
                      alt="People"
                      style="object-fit: contain;"
                    />
                  </md-card-media>

                  <md-card-content>
                    <!-- <div class="md-title">เครื่องหยอดเหรียญอเนกประสงค์</div> -->
                    <span class="md-title">เครื่องหยอดเหรียญอเนกประสงค์</span>
                    <div class="md-subhead">
                      <router-link
                        :to="{ name: 'product', params: { id: 1234 } }"
                        >คลิ๊กเพื่อดูสินค้าทั้งหมด</router-link
                      >
                    </div>
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
      <div class="section section-contacts">
        <div class="container">
          <Map></Map>
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
import { VueFlux, FluxPagination, Transitions, FluxControls } from "vue-flux";
import Map from "./components/Map";
export default {
  bodyClass: "landing-page",
  components: {
    VueFlux,
    FluxPagination,
    FluxControls,
    Map,
  },
  data() {
    return {
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
    gotoPage(page) {
      if (page === "washingMaschine") {
        this.$router.push({ name: "product", params: { dat: {
          title: "เครื่องซักผ้าหยอดเหรียญ(ฝาหน้า)",
          image: '@/assets/img/909973.LINE.jpg'
        } } });
      }
    },
    click() {
      console.log("button clicked");
    },
    openLinePage() {
      window.open("http://line.me/ti/p/~063-096-4999", "_blank");
    },
    openFBPage() {
      window.open("http://www.facebook.com/wannisa.thonekom", "_blank");
    },
    openPhoneModal() {
      this.showDialog = true;
    },
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
  width: 30% !important;
  max-height: 240px !important;
  min-height: 200px !important;
}
.md-card {
  height: 90%;
}
</style>
