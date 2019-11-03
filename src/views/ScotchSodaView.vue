<template>
  <div id="fp-container">
    <div id="splash-bg1">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="../assets/img/brands/scotch/scotch-tablet.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcset="../assets/img/brands/scotch/scotch-laptop.jpg"
        />
        <img src="../assets/img/brands/scotch/scotch-full-mobile.jpg" alt="" />
      </picture>
      <div class="caption2">
        <span>scroll down for more</span>
      </div>
    </div>
    <div id="brand-info">
      <div id="desc">
        <img src="../assets/img/brands/scotch/scotch_name.svg" alt="" />
        <p>
          Scotch & Soda, the Amsterdam-based fashion brand, loves to make great
          garments that suit every individual. They want people to love their
          clothes and enjoy wearing them. Scotch & Soda products are of high
          quality, rich in detail and affordable. The designers at Scotch spare
          no effort or expense at detailing and fine-tuning samples, all the way
          to the neatly finished interior of each garment. The brand stocks four
          main collections – Scotch & Soda (Men), Maison Scotch (Women), Scotch
          Shrunk (Boys) and Scotch R’belle (Girls).
        </p>
        <div class="caption">
          <router-link to="/locator"
            ><span>
              <svg
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
                </g></svg></span
          ></router-link>
        </div>
      </div>
      <div class="store-slides">
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/TDMSS-850x500.jpg"
            alt=""
          />
          <div class="label">The Dubai Mall, Dubai</div>
        </div>
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/NKHSS-850x500.jpg"
            alt=""
          />
          <div class="label">Nakheel Mall, Riyadh</div>
        </div>
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/TAHSS-850x500.jpg"
            alt=""
          />
          <div class="label">Tahlia Street, Jeddah</div>
        </div>
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/RASSS-850x500.jpg"
            alt=""
          />
          <div class="label">Rashid Mall, Al Khobar</div>
        </div>
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/DHASS-850x500.jpg"
            alt=""
          />
          <div class="label">Dhahran Mall, Al Khobar</div>
        </div>
        <div class="brand-stores">
          <img
            src="../assets/img/locations/scotchsoda/AVKSS-850x500.jpg"
            alt=""
          />
          <div class="label">The Avenues, Kuwait</div>
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
    background-image: url("../assets/img/brands/scotch/scotch-tablet.jpg");
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
    background-image: url("../assets/img/brands/scotch/scotch-laptop.jpg");
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
    background-image: url("../assets/img/brands/scotch/scotch-full.jpg");
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
