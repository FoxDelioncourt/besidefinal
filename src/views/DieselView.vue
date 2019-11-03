<template>
  <div id="fp-container">
    <div id="splash-bg1">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="../assets/img/brands/diesel/diesel-tablet.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcset="../assets/img/brands/diesel/diesel-laptop.jpg"
        />
        <img src="../assets/img/brands/diesel/diesel-full-mobile.jpg" alt="" />
      </picture>
      <div class="caption2">
        <span>scroll down for more</span>
      </div>
    </div>
    <div id="brand-info">
      <div id="desc">
        <img src="../assets/img/brands/diesel/diesel_only_black.svg" alt="" />
        <p>
          Diesel is a fashion industry legend. A pioneer in the world of denim
          and casual wear, it has always remained both outside and ahead of
          trends. Never forsaking its original DNA, it has evolved into an
          iconic global lifestyle brand. Despite Diesel’s extraordinary growth,
          its philosophy is the same as when Renzo Rosso created it in 1978. He
          envisaged a brand that would stand for passion, individuality and
          self-expression. Today, Diesel continues to blaze its own trail. It is
          on a continuing mission to challenge the status quo, experiment with
          new ideas, innovate and provoke.
        </p>
        <div class="caption">
          <span>
            <a href="http://www.instagram.com/diesel_arabia" target="_blank"
              ><svg
                version="1.1"
                id="Insta"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <path
                  d="M75,512h362c41.4,0,75-33.6,75-75V75c0-41.4-33.6-75-75-75H75C33.6,0,0,33.6,0,75v362C0,478.4,33.6,512,75,512z
                M30,75c0-24.8,20.2-45,45-45h362c24.8,0,45,20.2,45,45v362c0,24.8-20.2,45-45,45H75c-24.8,0-45-20.2-45-45V75z"
                />
                <path
                  d="M256,391c74.4,0,135-60.6,135-135s-60.6-135-135-135s-135,60.6-135,135S181.6,391,256,391z M256,151
                c57.9,0,105,47.1,105,105s-47.1,105-105,105s-105-47.1-105-105S198.1,151,256,151z"
                />
                />
                <path
                  d="M406,151c24.8,0,45-20.2,45-45s-20.2-45-45-45s-45,20.2-45,45S381.2,151,406,151z M406,91c8.3,0,15,6.7,15,15
                s-6.7,15-15,15s-15-6.7-15-15S397.7,91,406,91z"
                /></svg
            ></a>
            <router-link to="/locator"
              ><svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729
			c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035
			C408.034,272.515,311.861,403.37,256,469.729z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293
			S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901
			S289.029,245.328,256,245.328z"
                    />
                  </g>
                </g></svg></router-link
          ></span>
        </div>
      </div>
      <div class="store-slides">
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/TDMD-sm.jpg" alt="" />
          <div class="label">The Dubai Mall, Dubai</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/MACD-sm.jpg" alt="" />
          <div class="label">Mall of Arabia, Cairo</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/GRAD-sm.jpg" alt="" />
          <div class="label">Granada Center, Riyadh</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/TAHD-sm.jpg" alt="" />
          <div class="label">Tahlia Street, Jeddah</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/360D-sm.jpg" alt="" />
          <div class="label">360 Mall, Kuwait</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/DFCD-sm.jpg" alt="" />
          <div class="label">Dubai Festival City, Dubai</div>
        </div>
        <div class="brand-stores">
          <img src="../assets/img/locations/diesel/small/QFCD-sm.jpg" alt="" />
          <div class="label">Doha Festival City, Doha</div>
        </div>
        <img
          id="left"
          class="arrows"
          src="../assets/icons/down-arrow.svg"
          alt=""
          v-on:click="moveSlides(-1)"
        />
        <img
          id="right"
          class="arrows"
          src="../assets/icons/down-arrow.svg"
          alt=""
          v-on:click="moveSlides(+1)"
        />
      </div>
    </div>
    <div id="splash-bg2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      slideIndex: 1
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    const trigger = document.querySelector("#down");

    TweenMax.fromTo(
      trigger,
      1,
      { y: -10, ease: Bounce.easeOut, repeat: -1, yoyo: true },
      { y: 0, ease: Bounce.easeOut, repeat: -1, yoyo: true }
    );
  },
  methods: {
    moveSlides(num) {
      // let slideIndex = 1;
      this.showSlides((this.slideIndex += num));
    },
    showSlides(num) {
      let i;
      const storeSlides = document.getElementsByClassName("brand-stores");
      // const dots = document.getElementsByClassName("dot");
      if (num > storeSlides.length) {
        this.slideIndex = 1;
      }
      if (num < 1) {
        this.slideIndex = storeSlides.length;
      }
      for (i = 0; i < storeSlides.length; i++) {
        storeSlides[i].style.display = "none";
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      // }
      storeSlides[this.slideIndex - 1].style.display = "grid";
      // dots[this.slideIndex - 1].className += " active";
    }
  }
};
</script>

<style lang="scss" scoped>
#fp-container {
  height: 100%;
}

#splash-bg1 {
  height: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.caption2 {
  display: none;
}

#splash-bg2 {
  display: none;
}

#brand-info {
  // position: relative;
  height: 100%;
  background-color: #ffd400;
  display: grid;
  grid-template-columns: 10px repeat(4, 1fr) 10px;
  // grid-template-rows: repeat(8, 1fr);
}

#desc {
  grid-column: 1 / 7;
  grid-row: 4 / 9;
  padding: 30px;
  text-align: justify;
  color: #000;
  font-size: 0.8em;

  img {
    max-height: 50px;
    padding-bottom: 30px;
  }

  svg {
    fill: #000;
  }

  .caption {
    width: 100%;
    text-align: center;
    color: #000;
    // display: inline-block;
    margin-top: 50px;

    svg {
      height: 30px;
      padding: 0 20px;
    }
  }
}

.store-slides {
  height: 225px;
  grid-column: 1 / 7;
  grid-row: 1 / 4;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: #ffd400;

  .brand-stores {
    grid-column: 1 / 11;
    grid-row: 1 / 11;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);

    img {
      width: 100%;
      height: 100%;
      max-height: 500px;
      object-fit: cover;
      grid-column: 1 / 11;
      grid-row: 1 / 11;
    }

    .label {
      grid-column: 4 / 11;
      grid-row: 8 / 9;
      font-size: 0.8em;
      background-color: rgba(255, 212, 0, 0.5);
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      color: #000;
      font-weight: bold;
    }
  }

  #left {
    grid-column: 1 / 2;
    grid-row: 5 / 7;
    transform: rotate(90deg);
    align-self: center;
    justify-self: center;
  }

  #right {
    grid-column: 10 / 11;
    grid-row: 5 / 7;
    transform: rotate(-90deg);
    align-self: center;
    justify-self: center;
  }
}

@media only screen and (min-device-width: 768px) {
  #fp-container {
    height: 100%;
  }

  #splash-bg1 {
    min-height: 600px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 1px 1px;
    }
  }

  #splash-bg2 {
    display: none;
  }

  #brand-info {
    // position: relative;
    height: 800px;
    background-color: #ffd400;
    display: grid;
    grid-template-columns: 10px repeat(4, 1fr) 10px;
    grid-template-rows: repeat(9, 1fr);
  }

  #desc {
    grid-column: 1 / 7;
    grid-row: 5 / 10;
    padding: 30px;
    text-align: justify;
    color: #000;
    font-size: 0.8em;

    img {
      max-height: 50px;
      padding-bottom: 30px;
    }
  }

  .store-slides {
    grid-column: 1 / 7;
    grid-row: 1 / 5;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #ffd400;

    .brand-stores {
      grid-column: 1 / 11;
      grid-row: 1 / 11;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);

      img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 4 / 11;
        grid-row: 8 / 9;
        font-size: 0.8em;
        background-color: rgba(255, 212, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        color: #000;
        font-weight: bold;
      }
    }

    #left {
      grid-column: 1 / 2;
      grid-row: 5 / 7;
      transform: rotate(90deg);
      align-self: center;
      justify-self: center;
    }

    #right {
      grid-column: 10 / 11;
      grid-row: 5 / 7;
      transform: rotate(-90deg);
      align-self: center;
      justify-self: center;
    }
  }
}

@media only screen and (min-device-width: 1280px) {
  #fp-container {
    height: 100%;
  }

  #splash-bg1,
  #splash-bg2 {
    display: block;
    background-image: url("../assets/img/brands/diesel/diesel-tablet.jpg");
    min-height: 100%;
    height: 100vh;

    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    picture img {
      display: none;
    }
  }

  .caption2 {
    position: absolute;
    bottom: 20%;
    left: 0;
    text-align: center;
    width: 100%;
    display: block;

    span {
      background-color: rgba(255, 217, 0, 0.7);
      padding: 20px;
      // color: #000;
      font-weight: bold;
    }
  }

  #brand-info {
    position: relative;
    height: 500px;
    background-color: #ffd400;
    display: grid;
    grid-template-columns: 50px repeat(10, 1fr) 50px;
    grid-template-rows: repeat(8, 1fr);
  }

  #desc {
    grid-column: 2 / 6;
    grid-row: 1 / 9;
    padding: 30px;
    text-align: justify;
    color: #000;

    img {
      max-height: 50px;
      padding-bottom: 30px;
    }
  }

  .store-slides {
    height: 500px;
    grid-column: 6 / 12;
    grid-row: 1 / 9;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #ffd400;

    .brand-stores {
      grid-column: 1 / 11;
      grid-row: 1 / 11;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);

      img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 4 / 11;
        grid-row: 8 / 9;
        font-size: 0.8em;
        background-color: rgba(255, 212, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        color: #000;
        font-weight: bold;
      }
    }

    #left {
      grid-column: 1 / 2;
      grid-row: 5 / 7;
      transform: rotate(90deg);
      align-self: center;
      justify-self: center;
    }

    #right {
      grid-column: 10 / 11;
      grid-row: 5 / 7;
      transform: rotate(-90deg);
      align-self: center;
      justify-self: center;
    }
  }
}

@media only screen and (min-device-width: 1366px) {
  #fp-container {
    height: 100%;
  }

  #splash-bg1,
  #splash-bg2 {
    display: block;
    background-image: url("../assets/img/brands/diesel/diesel-laptop.jpg");
    min-height: 100%;
    height: 100vh;

    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    picture img {
      display: none;
    }
  }

  .caption2 {
    position: absolute;
    bottom: 20%;
    left: 0;
    text-align: center;
    width: 100%;
    display: block;

    span {
      background-color: rgba(255, 217, 0, 0.7);
      padding: 20px;
      // color: #000;
      font-weight: bold;
    }
  }

  #brand-info {
    position: relative;
    height: 500px;
    background-color: #ffd400;
    display: grid;
    grid-template-columns: 50px repeat(10, 1fr) 50px;
    grid-template-rows: repeat(8, 1fr);
  }

  #desc {
    grid-column: 2 / 6;
    grid-row: 1 / 9;
    padding: 30px;
    text-align: justify;
    color: #000;

    img {
      max-height: 50px;
      padding-bottom: 30px;
    }
  }

  .store-slides {
    height: 500px;
    grid-column: 6 / 12;
    grid-row: 1 / 9;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #ffd400;

    .brand-stores {
      grid-column: 1 / 11;
      grid-row: 1 / 11;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);

      img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 4 / 11;
        grid-row: 8 / 9;
        font-size: 0.8em;
        background-color: rgba(255, 212, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        color: #000;
        font-weight: bold;
      }
    }

    #left {
      grid-column: 1 / 2;
      grid-row: 5 / 7;
      transform: rotate(90deg);
      align-self: center;
      justify-self: center;
    }

    #right {
      grid-column: 10 / 11;
      grid-row: 5 / 7;
      transform: rotate(-90deg);
      align-self: center;
      justify-self: center;
    }
  }
}

@media only screen and (min-device-width: 1920px) {
  #fp-container {
    height: 100%;
  }

  #splash-bg1,
  #splash-bg2 {
    display: block;
    background-image: url("../assets/img/brands/diesel/diesel-full.jpg");
    min-height: 100%;
    height: 100vh;

    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    picture img {
      display: none;
    }
  }

  .caption2 {
    position: absolute;
    bottom: 20%;
    left: 0;
    text-align: center;
    width: 100%;
    display: block;

    span {
      background-color: rgba(255, 217, 0, 0.7);
      padding: 20px;
      // color: #000;
      font-weight: bold;
    }
  }

  #brand-info {
    position: relative;
    height: 500px;
    background-color: #ffd400;
    display: grid;
    grid-template-columns: 50px repeat(10, 1fr) 50px;
    grid-template-rows: repeat(8, 1fr);
  }

  #desc {
    grid-column: 2 / 6;
    grid-row: 1 / 9;
    padding: 30px;
    text-align: justify;
    color: #000;

    img {
      max-height: 50px;
      padding-bottom: 30px;
    }
  }

  .store-slides {
    height: 500px;
    grid-column: 6 / 11;
    grid-row: 1 / 9;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: #ffd400;

    .brand-stores {
      grid-column: 1 / 11;
      grid-row: 1 / 11;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);

      img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 4 / 11;
        grid-row: 8 / 9;
        font-size: 0.8em;
        background-color: rgba(255, 212, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
        color: #000;
        font-weight: bold;
      }
    }

    #left {
      grid-column: 1 / 2;
      grid-row: 5 / 7;
      transform: rotate(90deg);
      align-self: center;
      justify-self: center;
    }

    #right {
      grid-column: 10 / 11;
      grid-row: 5 / 7;
      transform: rotate(-90deg);
      align-self: center;
      justify-self: center;
    }
  }
}
</style>
