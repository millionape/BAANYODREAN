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
                          <a href="">
                            <!-- <i class="material-icons">layers</i> -->
                            <p>เครื่องซักผ้าหยอดเหรียญ</p>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <p>ตู้น้ำดื่มหยอดเหรียญ</p>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <p>กล่องหยอดเหรียญอเนกประสงค์</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
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
              </li>

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
export default {
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
      if(this.$route.name !== "product"){
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
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
</style>
