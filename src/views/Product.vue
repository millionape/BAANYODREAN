<template>
  <div class="wrapper">
    <div class="section page-header header-filter ov" :style="headerStyle">
      <div class="container ct">
        <div class="md-layout layout mx-auto">
          <div class="md-layout-item">
            <md-card class="contentCard">
              <md-card-content>
                <span class="md-headline">{{ title }}</span>
                
              </md-card-content>
              <md-divider class=""></md-divider>
              <div class="cardCT">
              <div class="md-layout md-gutter">
                <div class="md-layout-item">
                  <md-card>
                    <div>
                      <h5>HELOOOO</h5>
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
                          <flux-pagination slot="pagination"></flux-pagination>
                          <flux-controls slot="controls"></flux-controls>
                        </vue-flux>
                      </md-card-media>
                      <md-card-content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Optio itaque ea, nostrum odio. Dolores, sed
                        accusantium quasi non, voluptas eius illo quas, saepe
                        voluptate pariatur in deleniti minus sint. Excepturi.
                      </md-card-content>
                    </md-card-area>

                    <md-card-actions md-alignment="left">
                      <md-button>Action</md-button>
                      <md-button>Action</md-button>
                    </md-card-actions>
                  </md-card>
                </div>
                <div class="md-layout-item">
                  <md-card>
                    <md-card-area>
                      
                      <md-card-media>
                        <vue-flux
                          id="imgViewer"
                          :options="fluxOptions"
                          :images="fluxImages"
                          :transitions="fluxTransitions"
                          ref="slider"
                        >
                          <flux-pagination slot="pagination"></flux-pagination>
                          <flux-controls slot="controls"></flux-controls>
                        </vue-flux>
                      </md-card-media>
                      <md-card-content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Optio itaque ea, nostrum odio. Dolores, sed
                        accusantium quasi non, voluptas eius illo quas, saepe
                        voluptate pariatur in deleniti minus sint. Excepturi.
                      </md-card-content>
                    </md-card-area>

                    <md-card-actions md-alignment="left">
                      <md-button>Action</md-button>
                      <md-button>Action</md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              </div>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { VueFlux, FluxPagination, Transitions, FluxControls } from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxPagination,
    FluxControls,
  },
  bodyClass: "product-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      title: "",
      fluxOptions: {
        autoplay: true,
      },
      fluxImages: [
        "https://images.freeimages.com/images/large-previews/9fc/yet-another-flower-1399208.jpg",
        "https://images.freeimages.com/images/large-previews/0dd/flowers-1394193.jpg",
        "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
      ],
      fluxTransitions: {
        transitionBook: Transitions.transitionSlide,
      },
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
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header}) `,
      };
    },
  },
  mounted() {
    this.title = this.$route.params.dat.title;
  },
};
</script>

<style lang="css" scoped>
.contentCard {
  width: 100% !important;
  height: 100% !important;
}
.ct {
  margin-top: 100px;
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
  height: 2000px !important;
}
.ov {
  width: 100%;
  background-size: 200% !important;

  /* position: absolute;
    width: 100%; height:100%;
    top:0; left:0;
    background:rgba(0,0,0,0.6);
    opacity: 0;
    transition: all 1s;
    -webkit-transition: all 1s; */
}
.section {
  height: 2000px !important;
}
/* #imgViewer {
  width: 500px;
  height: 500px;
} */
.cardCT {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
