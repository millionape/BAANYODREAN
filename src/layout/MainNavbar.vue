<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <md-card-media class="logoTopNev">
          <img :src="logo" alt="People" />
        </md-card-media>
        <a href="/"><h4 class="md-title">บ้านหยอดเหรียญ</h4></a>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">local_laundry_service</i>
                        <h4>สินค้า</h4>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="" @click.prevent="gotoPage(1)">
                            <!-- <i class="material-icons">layers</i> -->
                            <p>เครื่องซักผ้าหยอดเหรียญ ฝาหน้า</p>
                          </a>
                        </li>
                        <li>
                          <a href="" @click.prevent="gotoPage(2)">
                            <!-- <i class="material-icons">layers</i> -->
                            <p>เครื่องซักผ้าหยอดเหรียญ ฝาบน</p>
                          </a>
                        </li>
                        <li>
                          <a href="" @click.prevent="gotoPage(3)">
                            <p>ตู้น้ำดื่มหยอดเหรียญ</p>
                          </a>
                        </li>
                        <li>
                          <a href="" @click.prevent="gotoPage(4)">
                            <p>กล่องหยอดเหรียญอเนกประสงค์</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <!-- <li class="md-list-item contact">
                <div class="emptyDiv">

                </div>
              </li> -->
              <!-- <li class="md-list-item contact">
                <h4>ติดต่อเรา</h4>
              </li> -->
              <!-- <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <h4>บริการอื่นๆ</h4>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/landing">
                            <i class="material-icons">view_day</i>
                            <p>Landing Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/login">
                            <i class="material-icons">fingerprint</i>
                            <p>Login Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/profile">
                            <i class="material-icons">account_circle</i>
                            <p>Profile Page</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li> -->

              <md-list-item class="icons" href="" target="_blank" @click.prevent="openPhoneModal">
                <i class="fa fa-phone-square"></i>
                <p class="hidden-lg">Phone</p>
                <md-tooltip md-direction="bottom">ติดต่อเราทางโทรศัพท์</md-tooltip>
              </md-list-item>
              <md-list-item
                class="icons"
                href=""
                target="_blank"
                @click.prevent="openFBPage"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom">ติดต่อเราทาง Facebook</md-tooltip>
              </md-list-item>
              <md-list-item
                class="icons"
                href=""
                target="_blank"
                @click.prevent="openLinePage"
              >
                <i class="fab fa-line"></i>
                <p class="hidden-lg">Line</p>
                <md-tooltip md-direction="bottom">ติดต่อเราทาง Line</md-tooltip>
              </md-list-item>
            </md-list>
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
        <br>
        <div class="md-layout md-gutter text-center">
          <div class="md-layout-item">
            <a href="tel:0630964999" data-rel="external">
              <md-button class="md-raised md-success"><h4>โทรเลย</h4></md-button>
            </a>
          </div>
        </div>
      
      <br />
    </md-dialog>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import product_data from "../productData/data.json";
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
  components: {
    MobileMenu
  },
  props: {
    logo: {
      type: String,
      default: require("@/assets/img/logo-only.png")
    },
    type: {
      type: String,
      default: "dark",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      productData: product_data.products,
      extraNavClasses: "",
      toggledClass: false,
      showDialog: false,
    };
  },
  computed: {
    // showDownload() {
    //   const excludedRoutes = ["login", "landing", "profile"];
    //   return excludedRoutes.every(r => r !== this.$route.name);
    // }
  },
  methods: {
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
      window.open("http://line.me/ti/p/~063-096-4999", "_blank");
    },
    openFBPage() {
      window.open("http://www.facebook.com/wannisa.thonekom", "_blank");
    },
    openPhoneModal() {
      this.showDialog = true;
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log('scrollValue :',scrollValue,this.colorOnScroll);
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      // if(this.$route.name !== "product"){this.colorOnScroll = this.colorOnScroll-300}
      if (this.colorOnScroll > 0 && scrollValue > (this.colorOnScroll)) {
        navbarColor.style.visibility = "hidden";
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        navbarColor.style.visibility = "visible";
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
      
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    if(this.$route.name === "product"){
      this.extraNavClasses = `md-dark`;
    }
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style lang="scss" scoped>
.icons {
  margin-top: 10px !important;
}
.logoTopNev {
  width: 2rem;
  margin-right: .5rem;
}
.contact {
  margin-top: .7rem;
}
.emptyDiv {
  width: .5rem;
}
</style>
