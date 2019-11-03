import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BrandsView from "./views/BrandsView.vue";
import OfficeView from "./views/OfficeView.vue";
import StoresView from "./views/StoresView.vue";
import FunView from "./views/FunView.vue";
import LocatorView from "./views/LocatorView.vue";
import ContactView from "./views/ContactView.vue";
import CareersView from "./views/CareersView.vue";
import DieselView from "./views/DieselView.vue";
import FredPerryView from "./views/FredPerryView.vue";
import PinkoView from "./views/PinkoView.vue";
import ScotchSodaView from "./views/ScotchSodaView.vue";
// import { TweenMax, TimelineMax, ScrollToPlugin } from "gsap/all";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
      startPlay: false
    },
    {
      path: "/about",
      name: "about",
      // alias: "/about",
      component: AboutView,
      props: true
    },
    {
      path: "/brands",
      name: "brands",
      component: BrandsView
    },
    {
      path: "/teams",
      name: "teamsHome",
      component: OfficeView
    },
    {
      path: "/locator",
      name: "locator",
      component: LocatorView
    },
    {
      path: "/contact",
      name: "contactHome",
      component: ContactView
    },
    {
      path: "/contact/careers",
      name: "careers",
      component: CareersView
    },
    {
      path: "/careers",
      name: "careersHome",
      component: CareersView
    },
    // {
    //   path: "/contact/contact",
    //   name: "contact",
    //   component: ContactView
    // },
    {
      path: "/teams/office",
      name: "teams",
      component: OfficeView
    },
    {
      path: "/teams/stores",
      name: "stores",
      component: StoresView
    },
    {
      path: "/teams/fun",
      name: "fun",
      component: FunView
    },
    {
      path: "/brands/diesel",
      name: "diesel",
      component: DieselView
    },
    {
      path: "/brands/fredperry",
      name: "fredperry",
      component: FredPerryView
    },
    {
      path: "/brands/pinko",
      name: "pinko",
      component: PinkoView
    },
    {
      path: "/brands/scotchsoda",
      name: "scotchsoda",
      component: ScotchSodaView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      TweenMax.to(window, 1, { scrollTo: to.hash, ease: Power1.easeOut });
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
