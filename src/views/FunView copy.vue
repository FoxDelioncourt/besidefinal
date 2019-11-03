<template>
  <div id="teams-container">
    <header id="header-title"><h1>the store team</h1></header>
    <div id="outer-grid">
      <div id="grid-container">
        <div
          class="grid-item"
          :id="office.id"
          v-for="office in storeTeam"
          :key="office.id"
          v-on:click="showModal(office.imgSmall, office.fName, office.title)"
        >
          <h2 class="staff">{{ office.name }}</h2>
          <img
            class="img-store small"
            :src="office.imgSmall"
            :alt="office.name"
          />
        </div>
      </div>
      <div id="modal-image" v-on:click="closeModal()">
        <img id="modal-content" alt="" />
        <!-- <div class="label">
          <p id="name-label"></p>
          <p id="title-label"></p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, ScrollToPlugin } from "gsap/all";
export default {
  data() {
    return {
      storeTeam: [
        {
          id: "fun01",
          imgSmall: require("@/assets/img/teams/fun/small/1-small.jpg")
        },
        {
          id: "fun02",
          imgSmall: require("@/assets/img/teams/fun/small/2-small.jpg")
        },
        {
          id: "fun03",
          imgSmall: require("@/assets/img/teams/fun/small/3-small.jpg")
        },
        {
          id: "fun04",
          imgSmall: require("@/assets/img/teams/fun/small/4-small.jpg")
        },
        {
          id: "fun05",
          imgSmall: require("@/assets/img/teams/fun/small/5-small.jpg")
        },
        {
          id: "fun06",
          imgSmall: require("@/assets/img/teams/fun/small/6-small.jpg")
        },
        {
          id: "fun07",
          imgSmall: require("@/assets/img/teams/fun/small/7-small.jpg")
        },
        {
          id: "fun08",
          imgSmall: require("@/assets/img/teams/fun/small/8-small.jpg")
        },
        {
          id: "fun09",
          imgSmall: require("@/assets/img/teams/fun/small/9-small.jpg")
        },
        {
          id: "fun10",
          imgSmall: require("@/assets/img/teams/fun/small/10-small.jpg")
        },
        {
          id: "fun11",
          imgSmall: require("@/assets/img/teams/fun/small/11-small.jpg")
        },
        {
          id: "fun12",
          imgSmall: require("@/assets/img/teams/fun/small/12-small.jpg")
        },
        {
          id: "fun13",
          imgSmall: require("@/assets/img/teams/fun/small/13-small.jpg")
        }
        // {
        //   id: "fun14",
        //   imgSmall: require("@/assets/img/teams/fun/small/14-small.jpg")
        // },
        // {
        //   id: "fun15",
        //   imgSmall: require("@/assets/img/teams/fun/small/15-small.jpg")
        // },
        // {
        //   id: "fun16",
        //   imgSmall: require("@/assets/img/teams/fun/small/16-small.jpg")
        // },
        // {
        //   id: "fun17",
        //   imgSmall: require("@/assets/img/teams/fun/small/17-small.jpg")
        // },
        // {
        //   id: "fun18",
        //   imgSmall: require("@/assets/img/teams/fun/small/18-small.jpg")
        // },
        // {
        //   id: "fun19",
        //   imgSmall: require("@/assets/img/teams/fun/small/19-small.jpg")
        // },
        // {
        //   id: "fun20",
        //   imgSmall: require("@/assets/img/teams/fun/small/20-small.jpg")
        // },
        // {
        //   id: "fun21",
        //   imgSmall: require("@/assets/img/teams/fun/small/21-small.jpg")
        // },
        // {
        //   id: "fun22",
        //   imgSmall: require("@/assets/img/teams/fun/small/22-small.jpg")
        // },
        // {
        //   id: "fun23",
        //   imgSmall: require("@/assets/img/teams/fun/small/23-small.jpg")
        // },
        // {
        //   id: "fun24",
        //   imgSmall: require("@/assets/img/teams/fun/small/24-small.jpg")
        // },
        // {
        //   id: "fun25",
        //   imgSmall: require("@/assets/img/teams/fun/small/25-small.jpg")
        // },
        // {
        //   id: "fun26",
        //   imgSmall: require("@/assets/img/teams/fun/small/26-small.jpg")
        // },
        // {
        //   id: "fun27",
        //   imgSmall: require("@/assets/img/teams/fun/small/27-small.jpg")
        // },
        // {
        //   id: "fun28",
        //   imgSmall: require("@/assets/img/teams/fun/small/28-small.jpg")
        // },
        // {
        //   id: "fun29",
        //   imgSmall: require("@/assets/img/teams/fun/small/29-small.jpg")
        // },
        // {
        //   id: "fun30",
        //   imgSmall: require("@/assets/img/teams/fun/small/30-small.jpg")
        // },
        // {
        //   id: "fun31",
        //   imgSmall: require("@/assets/img/teams/fun/small/31-small.jpg")
        // },
        // {
        //   id: "fun32",
        //   imgSmall: require("@/assets/img/teams/fun/small/32-small.jpg")
        // },
        // {
        //   id: "fun33",
        //   imgSmall: require("@/assets/img/teams/fun/small/33-small.jpg")
        // },
        // {
        //   id: "fun34",
        //   imgSmall: require("@/assets/img/teams/fun/small/34-small.jpg")
        // },
        // {
        //   id: "fun35",
        //   imgSmall: require("@/assets/img/teams/fun/small/35-small.jpg")
        // },
        // {
        //   id: "fun36",
        //   imgSmall: require("@/assets/img/teams/fun/small/36-small.jpg")
        // },
        // {
        //   id: "fun37",
        //   imgSmall: require("@/assets/img/teams/fun/small/37-small.jpg")
        // },
        // {
        //   id: "fun38",
        //   imgSmall: require("@/assets/img/teams/fun/small/38-small.jpg")
        // },
        // {
        //   id: "fun39",
        //   imgSmall: require("@/assets/img/teams/fun/small/39-small.jpg")
        // }
      ]
    };
  },
  mounted() {
    const trigger = document.querySelectorAll(".grid-item"),
      trigger2 = document.querySelectorAll(".inner-big");

    trigger.forEach.call(trigger, el => {
      el.addEventListener("mouseover", () => {
        const image = el.getElementsByClassName("img-store")[0];
        const name = el.getElementsByClassName("staff")[0];
        // console.log(image);

        TweenMax.to(image, 0.25, {
          opacity: 1
        });
        TweenMax.to(name, 0.25, {
          opacity: 1
        });
      });
    });
    trigger.forEach.call(trigger, el => {
      el.addEventListener("mouseout", () => {
        const image = el.getElementsByClassName("img-store")[0];
        const name = el.getElementsByClassName("staff")[0];
        // console.log(image);
        TweenMax.to(image, 0.25, {
          opacity: 0.4
        });
        TweenMax.to(name, 0.25, {
          opacity: 0
        });
      });
    });
    // trigger.forEach.call(trigger, el => {
    //   el.addEventListener("click", () => {
    //     const getId = el.id + "-big";
    //     const image = document.getElementById(getId);
    //     const image2 = document.getElementById("grid-container");
    //     console.log(el);
    //     console.log(image);
    //     TweenMax.to(image, 0.5, {
    //       autoAlpha: 1,
    //       display: "block",
    //       zIndex: "5000"
    //     });
    //     TweenMax.to(image2, 0.5, {
    //       autoAlpha: 0,
    //       display: "none"
    //     });
    //   });
    // });
    // trigger2.forEach.call(trigger2, el => {
    //   el.addEventListener("click", () => {
    //     const image2 = document.getElementById("grid-container");
    //     console.log(el);
    //     // console.log(image);
    //     TweenMax.to(el, 0.5, {
    //       autoAlpha: 0,
    //       display: "none"
    //     });
    //     TweenMax.to(image2, 0.5, {
    //       autoAlpha: 1,
    //       display: "grid"
    //     });
    //   });
    // });
    // }
    // const landingWrapper = document.getElementById("teams-container"),
    //   landingInnerContent = document.getElementById("outer-grid");
    // landingInnerContent.onmousemove = e => {
    //   // console.log(e.clientY, landingWrapper.offsetHeight/4, e.pageY);
    //   if (e.clientY > landingWrapper.offsetHeight / 2) {
    //     TweenMax.to(window, 1, {
    //       scrollTo: {
    //         y: "+=100"
    //       },
    //       ease: Power2.easeOut
    //     });
    //   } else {
    //     TweenMax.to(window, 1, {
    //       scrollTo: {
    //         y: "-=90"
    //       },
    //       ease: Power2.easeOut
    //     });
    //   }
    // };
  },
  methods: {
    showModal(imgSrc, imgName, imgTitle) {
      const modal = document.getElementById("modal-image");
      if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "grid";
        document.getElementById("grid-container").style.display = "none";
        document.getElementById("modal-content").src = imgSrc;
        document.getElementById("name-label").innerHTML = imgName;
        document.getElementById("title-label").innerHTML = imgTitle;
      } else {
        modal.style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("modal-content").src = "";
        document.getElementById("name-label").innerHTML = "";
        document.getElementById("title-label").innerHTML = "";
      }
    },
    closeModal() {
      document.getElementById("modal-image").style.display = "none";
      document.getElementById("grid-container").style.display = "grid";
      document.getElementById("modal-content").src = "";
      document.getElementById("name-label").innerHTML = "";
      document.getElementById("title-label").innerHTML = "";
    }
  }
};
</script>

<style lang="scss" scoped>
#teams-container {
  #header-title {
    font-size: 0.8em;
    text-align: center;
    padding-top: 50px;

    h1 {
      font-size: 1.5em;
      padding-bottom: 20px;
    }
  }

  #outer-grid {
    min-height: 100vh;
    // display: grid;
    // grid-template-rows: min-content;

    #grid-container {
      // grid-column: 1 / 2;
      // grid-row: 1 / 2;
      min-height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      // grid-template-rows: repeat(10, min-max(176.5px, min-content));
      grid-gap: 10px 10px;
      padding: 0 10px;

      .grid-item {
        width: 350px;
        height: 200px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        // grid-column: 1 / 11;
        justify-self: center;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          grid-column: 1 / 6;
          grid-row: 1 / 6;
          opacity: 0.4;
        }

        h2 {
          grid-column: 1 / 6;
          grid-row: 2 / 5;
          justify-self: center;
          align-self: center;
          text-align: center;
          z-index: 500;
          color: #ffd400;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
          opacity: 0;
        }
      }
    }

    #modal-image {
      // grid-column: 1 / 2;
      // grid-row: 1 / 2;
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.9);
      grid-column: 1 / 11;
      z-index: 600;
      display: none;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      align-items: center;

      #modal-content {
        height: 100%;
        width: 100%;
        object-fit: contain;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 4 / 11;
        grid-row: 7 / 8;
        background-color: rgba(255, 212, 0, 0.8);
        padding: 5px 20px 5px 5px;

        p {
          color: #000;
          font-family: "Syncopate", sans-serif;
          text-align: right;
          font-size: 0.8em;
        }

        #name-label {
          font-weight: bold;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 767px) {
  #teams-container {
    #header-title {
      font-size: 0.8em;
      text-align: center;
      padding-top: 50px;

      h1 {
        font-size: 2em;
        text-align: left;
        padding: 0 0 20px 20px;
      }
    }

    #outer-grid {
      min-height: 100vh;
      // display: grid;
      // grid-template-rows: min-content;

      #grid-container {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        min-height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        // grid-template-rows: repeat(10, min-content);
        grid-gap: 10px;
        justify-content: center;
        padding: 0 35px;

        .grid-item {
          width: 350px;
          height: 200px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          // grid-column: 1 / 11;
          justify-self: center;

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            grid-column: 1 / 6;
            grid-row: 1 / 6;
            opacity: 0.4;
          }

          h2 {
            grid-column: 1 / 6;
            grid-row: 2 / 5;
            justify-self: center;
            align-self: center;
            text-align: center;
            z-index: 500;
            color: #ffd400;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
              1px 1px 0 #000;
            opacity: 0;
          }
        }
      }

      #modal-image {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.9);
        grid-column: 1 / 11;
        z-index: 600;
        display: none;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);

        #modal-content {
          height: 100%;
          width: 100%;
          object-fit: contain;
          grid-column: 1 / 11;
          grid-row: 1 / 11;
        }

        .label {
          grid-column: 4 / 11;
          grid-row: 7 / 8;
          background-color: rgba(255, 212, 0, 0.8);
          padding: 5px 20px 5px 5px;

          p {
            color: #000;
            font-family: "Syncopate", sans-serif;
            text-align: right;
            font-size: 0.8em;
          }

          #name-label {
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media only screen and (min-device-width: 1279px) {
  #teams-container {
    #header-title {
      font-size: 0.8em;
      text-align: center;
      padding-top: 95px;
    }

    #outer-grid {
      #grid-container {
        grid-template-columns: repeat(3, min-content);
        grid-gap: 10px 10px;
        justify-content: center;
      }

      #modal-image {
        .label {
          grid-row: 9 / 10;

          p {
            font-size: 1em;
          }

          #name-label {
            font-size: 1em;
          }
        }
      }
    }
  }
}

@media only screen and (min-device-width: 1919px) {
  #teams-container {
    #outer-grid {
      #grid-container {
        grid-template-columns: repeat(5, 1fr) !important;
        grid-gap: 10px 10px;
        justify-content: center;
      }

      #modal-image {
        #modal-content {
          max-height: 1000px !important;
          grid-column: 2 / 10 !important;
          grid-row: 2 / 10 !important;
        }

        .label {
          grid-column: 5 / 11 !important;
          grid-row: 8 / 9 !important;
          padding: 5px 50px 5px 0 !important;

          p {
            font-size: 2em !important;
          }
        }
      }
    }
  }
}
</style>
