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
          id: "store01",
          imgSmall: require("@/assets/img/teams/stores/small/1-small.jpg")
        },
        {
          id: "store02",
          imgSmall: require("@/assets/img/teams/stores/small/2-small.jpg")
        },
        {
          id: "store03",
          imgSmall: require("@/assets/img/teams/stores/small/3-small.jpg")
        },
        {
          id: "store04",
          imgSmall: require("@/assets/img/teams/stores/small/4-small.jpg")
        },
        {
          id: "store05",
          imgSmall: require("@/assets/img/teams/stores/small/5-small.jpg")
        },
        {
          id: "store06",
          imgSmall: require("@/assets/img/teams/stores/small/6-small.jpg")
        },
        {
          id: "store07",
          imgSmall: require("@/assets/img/teams/stores/small/7-small.jpg")
        },
        {
          id: "store08",
          imgSmall: require("@/assets/img/teams/stores/small/8-small.jpg")
        },
        {
          id: "store09",
          imgSmall: require("@/assets/img/teams/stores/small/9-small.jpg")
        },
        {
          id: "store10",
          imgSmall: require("@/assets/img/teams/stores/small/10-small.jpg")
        },
        {
          id: "store11",
          imgSmall: require("@/assets/img/teams/stores/small/11-small.jpg")
        },
        {
          id: "store12",
          imgSmall: require("@/assets/img/teams/stores/small/12-small.jpg")
        },
        {
          id: "store13",
          imgSmall: require("@/assets/img/teams/stores/small/13-small.jpg")
        },
        {
          id: "store14",
          imgSmall: require("@/assets/img/teams/stores/small/14-small.jpg")
        },
        {
          id: "store15",
          imgSmall: require("@/assets/img/teams/stores/small/15-small.jpg")
        },
        {
          id: "store16",
          imgSmall: require("@/assets/img/teams/stores/small/16-small.jpg")
        },
        {
          id: "store17",
          imgSmall: require("@/assets/img/teams/stores/small/17-small.jpg")
        },
        {
          id: "store18",
          imgSmall: require("@/assets/img/teams/stores/small/18-small.jpg")
        },
        {
          id: "store19",
          imgSmall: require("@/assets/img/teams/stores/small/19-small.jpg")
        },
        {
          id: "store20",
          imgSmall: require("@/assets/img/teams/stores/small/20-small.jpg")
        },
        {
          id: "store21",
          imgSmall: require("@/assets/img/teams/stores/small/21-small.jpg")
        },
        {
          id: "store22",
          imgSmall: require("@/assets/img/teams/stores/small/22-small.jpg")
        },
        // {
        //   id: "store23",
        //   imgSmall: require("@/assets/img/teams/stores/small/23-small.jpg")
        // },
        {
          id: "store24",
          imgSmall: require("@/assets/img/teams/stores/small/24-small.jpg")
        },
        {
          id: "store25",
          imgSmall: require("@/assets/img/teams/stores/small/25-small.jpg")
        },
        {
          id: "store26",
          imgSmall: require("@/assets/img/teams/stores/small/26-small.jpg")
        },
        {
          id: "store27",
          imgSmall: require("@/assets/img/teams/stores/small/27-small.jpg")
        },
        {
          id: "store28",
          imgSmall: require("@/assets/img/teams/stores/small/28-small.jpg")
        },
        {
          id: "store29",
          imgSmall: require("@/assets/img/teams/stores/small/29-small.jpg")
        },
        {
          id: "store30",
          imgSmall: require("@/assets/img/teams/stores/small/30-small.jpg")
        }
        // {
        //   id: "store31",
        //   imgSmall: require("@/assets/img/teams/stores/small/31-small.jpg")
        // }
        // {
        //   id: "store32",
        //   imgSmall: require("@/assets/img/teams/stores/small/32-small.jpg")
        // },
        // {
        //   id: "store33",
        //   imgSmall: require("@/assets/img/teams/stores/small/33-small.jpg")
        // },
        // {
        //   id: "store34",
        //   imgSmall: require("@/assets/img/teams/stores/small/34-small.jpg")
        // },
        // {
        //   id: "store35",
        //   imgSmall: require("@/assets/img/teams/stores/small/35-small.jpg")
        // },
        // {
        //   id: "store36",
        //   imgSmall: require("@/assets/img/teams/stores/small/36-small.jpg")
        // },
        // {
        //   id: "store37",
        //   imgSmall: require("@/assets/img/teams/stores/small/37-small.jpg")
        // },
        // {
        //   id: "store38",
        //   imgSmall: require("@/assets/img/teams/stores/small/38-small.jpg")
        // },
        // {
        //   id: "store39",
        //   imgSmall: require("@/assets/img/teams/stores/small/39-small.jpg")
        // }
      ]
    };
  },
  mounted() {
    const trigger = document.querySelectorAll(".grid-item");

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
        document.getElementById("header-title").style.display = "none";
        document.getElementById("modal-content").src = imgSrc;
        document.getElementById("name-label").innerHTML = imgName;
        document.getElementById("title-label").innerHTML = imgTitle;
      } else {
        modal.style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("header-title").style.display = "block";
        document.getElementById("modal-content").src = "";
        document.getElementById("name-label").innerHTML = "";
        document.getElementById("title-label").innerHTML = "";
      }
    },
    closeModal() {
      document.getElementById("modal-image").style.display = "none";
      document.getElementById("grid-container").style.display = "grid";
      document.getElementById("header-title").style.display = "block";
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
    padding: 50px 0 0 50px;
    // margin: 0 20px 50px 20px;
  }

  #outer-grid {
    display: flex;
    justify-content: center;
    #grid-container {
      display: grid;
      width: 100%;
      min-height: 100vh;
      grid-template-columns: repeat(1, minmax(300px, 1fr));
      // grid-template-rows: repeat(8, minmax(300px, 1fr));
      grid-gap: 5px;

      .grid-item {
        width: 330px;
        height: 200px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        justify-self: center;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          opacity: 0.4;
          grid-column: 1 / 6;
          grid-row: 1 / 6;
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
          font-size: 1.2em;
        }
      }

      // .grid-item:nth-child(1) {
      //   grid-column: 1 / 3;
      //   grid-row: 1 / 3;
      // }

      // .grid-item:nth-child(2) {
      //   grid-column: 3 / 5;
      //   grid-row: 1 / 2;
      //   object-position: top right;
      // }

      // .grid-item:nth-child(3) {
      //   grid-column: 4 / 6;
      //   grid-row: 10 / 11;
      // }

      // .grid-item:nth-child(4) {
      //   grid-column: 6 / 7;
      //   grid-row: 1 / 3;
      // }

      // .grid-item:nth-child(9) {
      //   grid-column: 5 / 6;
      //   grid-row: 2 / 4;
      // }

      // .grid-item:nth-child(10) {
      //   grid-column: 7 / 9;
      //   grid-row: 2 / 3;
      // }

      // .grid-item:nth-child(12) {
      //   grid-column: 2 / 4;
      //   grid-row: 3 / 4;
      // }

      // .grid-item:nth-child(14) {
      //   grid-column: 4 / 5;
      //   grid-row: 3 / 5;
      // }

      // .grid-item:nth-child(22) {
      //   // grid-column: 4 / 5;
      //   grid-row: 4 / 6;
      // }

      // .grid-item:nth-child(25) {
      //   grid-column: 7 / 9;
      //   grid-row: 10 / 11;
      // }

      // .grid-item:nth-child(17) {
      //   grid-column: 8 / 9;
      //   grid-row: 3 / 5;
      // }

      // .grid-item:nth-child(18) {
      //   grid-column: 2 / 4;
      //   grid-row: 4 / 6;
      // }

      // .grid-item:nth-child(20) {
      //   grid-column: 4 / 6;
      //   grid-row: 5 / 6;
      // }

      // .grid-item:nth-child(36) {
      //   grid-column: 3 / 5;
      //   grid-row: 9 / 10;
      // }

      // .grid-item:nth-child(19) {
      //   grid-column: 5 / 7;
      //   grid-row: 4 / 5;
      // }

      // .grid-item:nth-child(37) {
      //   grid-column: 2 / 4;
      //   grid-row: 7 / 9;
      // }

      // .grid-item:nth-child(26) {
      //   grid-column: 1 / 2;
      //   grid-row: 6 / 8;
      // }

      // .grid-item:nth-child(27) {
      //   grid-column: 6 / 7;
      //   grid-row: 9 / 11;
      // }

      // .grid-item:nth-child(41) {
      //   grid-column: 7 / 9;
      //   grid-row: 7 / 8;
      // }

      // .grid-item:nth-child(29) {
      //   grid-column: 3 / 5;
      //   grid-row: 6 / 7;
      // }

      // .grid-item:nth-child(35) {
      //   grid-column: 4 / 6;
      //   grid-row: 7 / 8;
      // }

      // .grid-item:nth-child(24) {
      //   grid-column: 6 / 8;
      //   grid-row: 5 / 6;
      // }

      // .grid-item:nth-child(38) {
      //   grid-column: 2 / 4;
      //   grid-row: 10 / 11;
      // }

      // .grid-item:nth-child(39) {
      //   grid-column: 5 / 6;
      //   grid-row: 8 / 10;
      // }

      // .grid-item:nth-child(43) {
      //   grid-column: 8 / 9;
      //   grid-row: 8 / 10;
      // }

      // .grid-item:nth-child(40) {
      //   grid-column: 6 / 8;
      //   grid-row: 8 / 9;
      // }

      // .grid-item:nth-child(42) {
      //   grid-column: 1 / 3;
      //   grid-row: 9 / 10;
      // }

      // .grid-item:nth-child(31) {
      //   grid-column: 6 / 7;
      //   grid-row: 6 / 8;
      // }

      // .grid-item:nth-child(45) {
      //   grid-column: 6 / 8;
      //   grid-row: 3 / 4;
      // }
    }

    #modal-image {
      display: none;
      height: 100vh;
      width: 100vw;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      cursor: url("../assets/icons/close-x.svg"), auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 1 / 11;
        grid-row: 9 / 10;
        background-color: rgba(255, 212, 0, 0.8);
        padding: 5px 20px 5px 5px;

        p {
          color: #000;
          font-family: "Syncopate", sans-serif;
          text-align: right;
          font-size: 1.5em;
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
    #outer-grid {
      display: flex;
      justify-content: center;
      #grid-container {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
      }
    }
  }
}

@media only screen and (min-device-width: 1280px) {
  #teams-container {
    #outer-grid {
      display: flex;
      justify-content: center;
      #grid-container {
        grid-template-columns: repeat(3, minmax(300px, 1fr));
      }
    }
  }
}

@media only screen and (min-device-width: 1366px) {
  #teams-container {
    #outer-grid {
      display: flex;
      justify-content: center;
      #grid-container {
        grid-template-columns: repeat(4, minmax(330px, 1fr));
      }
    }

    #modal-image {
      display: none;
      height: 100vh;
      width: 100vw;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, 1fr);
      cursor: url("../assets/icons/close-x.svg"), auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-column: 1 / 11;
        grid-row: 1 / 11;
      }

      .label {
        grid-column: 6 / 11;
        grid-row: 9 / 10;
        background-color: rgba(255, 212, 0, 0.8);
        padding: 5px 20px 5px 5px;

        p {
          color: #000;
          font-family: "Syncopate", sans-serif;
          text-align: right;
          font-size: 1.5em;
        }

        #name-label {
          font-weight: bold;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 1920px) {
  #teams-container {
    #outer-grid {
      display: flex;
      justify-content: center;
      #grid-container {
        grid-template-columns: repeat(5, minmax(330px, 1fr));
      }
    }
  }
}
</style>