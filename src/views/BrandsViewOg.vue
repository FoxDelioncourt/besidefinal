<template>
  <div id="brands-container">
    <div id="brands-logos">
      <router-link to="/brands/diesel">
        <div id="diesel-logo" class="logo-box">
          <img src="../assets/img/brands/diesel/diesel_black.svg" alt="" />
          <div id="fredperry-intro" class="logo-box intros">
            <p>
              Diesel is a fashion industry legend. A pioneer in the world of
              denim and casual wear, it has always remained both outside and
              ahead of trends. Never forsaking its original DNA...
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/brands/fredperry">
        <div id="fredperry-logo" class="logo-box">
          <img src="../assets/img/brands/fredperry/laurel_black.svg" alt="" />
          <div id="fredperry-intro" class="logo-box intros">
            <p>
              A British casual wear brand with a highly visible logo (the
              laurel), Fred Perry has had enduring appeal amongst youth
              subcultures...
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/brands/scotchsoda">
        <div id="scotch-logo" class="logo-box">
          <img src="../assets/img/brands/scotch/scotch_black.svg" alt="" />
          <div id="scotch-intro" class="logo-box intros">
            <p>
              Scotch & Soda, the Amsterdam-based fashion brand, loves to make
              great garments that suit every individual. They want people to
              love their clothes...
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/brands/pinko">
        <div id="pinko-logo" class="logo-box">
          <img src="../assets/img/brands/pinko/pinko_black.svg" alt="" />
          <div id="pinko-intro" class="logo-box intros">
            <p>
              Founded in the early 1980s by Pietro Negra, the current CEO, and
              Cristina Rubini, PINKO is a contemporary fashion brand with a
              distinct Italian spirit...
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { TweenMax } from "gsap/TweenMax";

export default {
  mounted() {
    const trigger = document.querySelectorAll(".logo-box");
    TweenMax.set(".intros", { opacity: 0 });
    trigger.forEach.call(trigger, el => {
      el.addEventListener("mouseenter", () => {
        const slide = el.getElementsByClassName("intros")[0];
        TweenMax.to(slide, 0.5, {
          opacity: 1
        });
      });
    });
    trigger.forEach.call(trigger, el => {
      el.addEventListener("mouseleave", () => {
        const slide = el.getElementsByClassName("intros")[0];
        TweenMax.to(slide, 0.5, {
          opacity: 0
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
#brands-container {
  min-height: 100vh;
  padding-top: 40px;
  overflow: hidden;
  display: grid;
  justify-items: center;
  align-content: center;

  #brands-logos {
    // background-color: blue;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-auto-rows: max-content;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    .logo-box {
      height: 300px;
      width: 300px;
      border: 3px solid #ffd400;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
    }

    img {
      height: auto;
      width: 100%;
      // border: 3px solid #fff;
    }

    .intros {
      // background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
      position: absolute;
      padding: 15px;

      p {
        color: #000;
        text-align: center;
      }
    }
  }
}

@media only screen and (min-device-width: 1200px) and (max-device-width: 1300px) {
  #brands-container {
    #brands-logos {
      .logo-box {
        height: 200px;
        width: 200px;
      }

      .intros p {
        font-size: 0.8em;
      }
    }
  }
}

@media only screen and (min-device-width: 1350px) and (max-device-width: 1400px) {
  #brands-container {
    #brands-logos {
      .logo-box {
        height: 200px;
        width: 200px;
      }

      .intros p {
        font-size: 0.8em;
      }
    }
  }
}
</style>
