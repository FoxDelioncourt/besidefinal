<template>
  <div id="teams-container">
    <header id="header-title"><h1>the office team</h1></header>
    <div id="outer-grid">
      <div id="grid-container">
        <div
          class="grid-item"
          :id="office.id"
          v-for="office in officeTeam"
          :key="office.id"
          v-on:click="showModal(office.imgSmall, office.fName, office.title)"
        >
          <h2 class="staff">{{ office.name }}</h2>
          <img
            class="img-office small"
            :src="office.imgSmall"
            :alt="office.name"
          />
        </div>
      </div>
      <div id="modal-image" v-on:click="closeModal()">
        <img id="modal-content" alt="" />
        <div class="label">
          <p id="name-label"></p>
          <p id="title-label"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap/all";
export default {
  data() {
    return {
      officeTeam: [
        {
          id: "office01",
          name: "elena",
          fName: "elena miladinova",
          title: "business analyst",
          imgSmall: require("@/assets/img/teams/office/small/elena-small.jpg")
        },
        {
          id: "office02",
          name: "omar",
          fName: "omar henaidy",
          title: "chief executive officer",
          imgSmall: require("@/assets/img/teams/office/small/omar-small.jpg")
        },
        {
          id: "office03",
          name: "nameeta",
          fName: "nameeta bangera",
          title: "hr coordinator",
          imgSmall: require("@/assets/img/teams/office/small/nameeta-small.jpg")
        },
        {
          id: "office04",
          name: "carmen",
          fName: "carmen paulsen",
          title: "group administration manager",
          imgSmall: require("@/assets/img/teams/office/small/carmen-small.jpg")
        },
        {
          id: "office05",
          name: "mustafa",
          fName: "mustafa tanwar",
          title: "system analyst",
          imgSmall: require("@/assets/img/teams/office/small/mustafa-small.jpg")
        },
        {
          id: "office06",
          name: "thilak",
          fName: "thilak medagedara",
          title: "showroom assistant",
          imgSmall: require("@/assets/img/teams/office/small/thilak-small.jpg")
        },
        {
          id: "office07",
          name: "kate",
          fName: "kate phelan",
          title: "visual merchandising manager",
          imgSmall: require("@/assets/img/teams/office/small/kate-small.jpg")
        },
        {
          id: "office08",
          name: "mary",
          fName: "mary ann cui",
          title: "front office administrator",
          imgSmall: require("@/assets/img/teams/office/small/mary-small.jpg")
        },
        // {
        //   id: "office09",
        //   name: "jo",
        //   fName: "jo anthony masucol",
        //   title: "commercial visual merchandiser",
        //   imgSmall: require("@/assets/img/teams/office/small/jo-small.jpg")
        // },
        {
          id: "office10",
          name: "hamadah",
          fName: "hamadah ali",
          title: "area manager central",
          imgSmall: require("@/assets/img/teams/office/small/hamada-small.jpg")
        },
        {
          id: "office11",
          name: "osama",
          fName: "osama ibdah",
          title: "chief financial officer",
          imgSmall: require("@/assets/img/teams/office/small/osama_ibdah-small.jpg")
        },
        {
          id: "office12",
          name: "ramil",
          fName: "ramil reodica",
          title: "office assistant",
          imgSmall: require("@/assets/img/teams/office/small/ramil-small.jpg")
        },
        {
          id: "office13",
          name: "ahmed",
          fName: "ahmed henaidy",
          title: "human capital manager",
          imgSmall: require("@/assets/img/teams/office/small/ahmed_henaidy-small.jpg")
        },
        {
          id: "office14",
          name: "tony",
          fName: "tony mascarenhas",
          title: "chief accountant",
          imgSmall: require("@/assets/img/teams/office/small/tony-small.jpg")
        },
        {
          id: "office15",
          name: "sebastien",
          fName: "sebastien coryn",
          title: "senior buyer",
          imgSmall: require("@/assets/img/teams/office/small/sebastien-small.jpg")
        },
        {
          id: "office16",
          name: "ahmed",
          fName: "ahmed ali",
          title: "group finance manager",
          imgSmall: require("@/assets/img/teams/office/small/ahmed_ali-small.jpg")
        },
        {
          id: "office17",
          name: "saleem",
          fName: "saleem mukhtiar",
          title: "system administrator",
          imgSmall: require("@/assets/img/teams/office/small/saleem-small.jpg")
        },
        {
          id: "office18",
          name: "queenie",
          fName: "queenie mendoza",
          title: "hr specialist",
          imgSmall: require("@/assets/img/teams/office/small/queenie-small.jpg")
        },
        {
          id: "office19",
          name: "hisham",
          fName: "hisham bedier",
          title: "chief operating officer",
          imgSmall: require("@/assets/img/teams/office/small/hisham-small.jpg")
        },
        {
          id: "office20",
          name: "yakup",
          fName: "yakup albayrak",
          title: "project manager",
          imgSmall: require("@/assets/img/teams/office/small/yakup-small.jpg")
        },
        {
          id: "office21",
          name: "rana",
          fName: "rana alhulaisie",
          title: "area manager",
          imgSmall: require("@/assets/img/teams/office/small/rana-small.jpg")
        },
        {
          id: "office22",
          name: "noushad",
          fName: "noushad achi",
          title: "group logistics manager",
          imgSmall: require("@/assets/img/teams/office/small/noushad-small.jpg")
        },
        {
          id: "office23",
          name: "natalie",
          fName: "natalie schmidt",
          title: "junior retail buyer",
          imgSmall: require("@/assets/img/teams/office/small/natalie-small.jpg")
        },
        {
          id: "office24",
          name: "charina",
          fName: "charina manaba",
          title: "office cleaner",
          imgSmall: require("@/assets/img/teams/office/small/charina-small.jpg")
        },
        {
          id: "office25",
          name: "toby",
          fName: "toby walker",
          title: "retail operations director",
          imgSmall: require("@/assets/img/teams/office/small/toby-small.jpg")
        },
        {
          id: "office26",
          name: "anna lyn",
          fName: "anna lyn arcangel",
          title: "visual merchandiser",
          imgSmall: require("@/assets/img/teams/office/small/analyn-small.jpg")
        },
        {
          id: "office27",
          name: "bijit",
          fName: "bijit majumder",
          title: "accounting manager",
          imgSmall: require("@/assets/img/teams/office/small/bijit-small.jpg")
        },
        {
          id: "office28",
          name: "tarek",
          fName: "tarek barakat",
          title: "marketing director",
          imgSmall: require("@/assets/img/teams/office/small/tarek-small.jpg")
        },
        {
          id: "office29",
          name: "clinton",
          fName: "clinton garalde",
          title: "system analyst",
          imgSmall: require("@/assets/img/teams/office/small/clinton-small.jpg")
        },
        {
          id: "office30",
          name: "zeeshan",
          fName: "zeeshan ansari",
          title: "data entry operator",
          imgSmall: require("@/assets/img/teams/office/small/zeeshan-small.jpg")
        },
        {
          id: "office31",
          name: "asif",
          fName: "muhammed asif",
          title: "junior accountant",
          imgSmall: require("@/assets/img/teams/office/small/asif-small.jpg")
        },
        {
          id: "office32",
          name: "mohammed",
          fName: "mohammed mahmoud alshami",
          title: "senior accountant",
          imgSmall: require("@/assets/img/teams/office/small/alshami-small.jpg")
        },
        {
          id: "office33",
          name: "ahmed",
          fName: "ahmed youssef",
          title: "country operations manager",
          imgSmall: require("@/assets/img/teams/office/small/ahmed_youssef-small.jpg")
        },
        {
          id: "office34",
          name: "naufal",
          fName: "naufal moidu",
          title: "junior accountant",
          imgSmall: require("@/assets/img/teams/office/small/naufal-small.jpg")
        },
        {
          id: "office35",
          name: "adrian",
          fName: "adrian manzanilla",
          title: "visual merchandiser",
          imgSmall: require("@/assets/img/teams/office/small/adrian-small.jpg")
        },
        {
          id: "office36",
          name: "baiju",
          fName: "baiju abdulla",
          title: "warehouse manager",
          imgSmall: require("@/assets/img/teams/office/small/baiju-small.jpg")
        },
        {
          id: "office37",
          name: "pramod",
          fName: "pramod shivarathri",
          title: "driver",
          imgSmall: require("@/assets/img/teams/office/small/pramod-small.jpg")
        },
        {
          id: "office38",
          name: "shajahan & abdul",
          fName: "syed mohammed shajahan & abdul rahman mohideen",
          title: "Warehouse Associate",
          imgSmall: require("@/assets/img/teams/office/small/shajahan_abdul-small.jpg")
        },
        {
          id: "office39",
          name: "umar",
          fName: "muhammad umar",
          title: "accountant",
          imgSmall: require("@/assets/img/teams/office/small/umar-small.jpg")
        },
        {
          id: "office40",
          name: "marie",
          fName: "marie bayen",
          title: "recruitment specialist",
          imgSmall: require("@/assets/img/teams/office/small/marie-small.jpg")
        },
        {
          id: "office41",
          name: "riyas",
          fName: "riyas panikkaveettil",
          title: "logistics coordinator",
          imgSmall: require("@/assets/img/teams/office/small/riyas-small.jpg")
        },
        {
          id: "office42",
          name: "carine",
          fName: "carine hannouche",
          title: "digital marketing executive",
          imgSmall: require("@/assets/img/teams/office/small/carine-small.jpg")
        },
        {
          id: "office43",
          name: "abdulmanaf",
          fName: "abdulmanaf ulpila",
          title: "assistant accountant",
          imgSmall: require("@/assets/img/teams/office/small/ulpila-small.jpg")
        },
        {
          id: "office44",
          name: "ishaq",
          fName: "muhammad ishaq",
          title: "accountant",
          imgSmall: require("@/assets/img/teams/office/small/ishaq-small.jpg")
        },
        {
          id: "office45",
          name: "chula",
          fName: "chula de alwis",
          title: "area manager",
          imgSmall: require("@/assets/img/teams/office/small/chula-small.jpg")
        },
        {
          id: "office46",
          name: "anjanna",
          fName: "anjanna margam",
          title: "retail planner",
          imgSmall: require("@/assets/img/teams/office/small/anjanna-small.jpg")
        }
      ]
    };
  },
  mounted() {
    const trigger = document.querySelectorAll(".grid-item");
    trigger.forEach.call(trigger, el => {
      el.addEventListener("mouseover", () => {
        const image = el.getElementsByClassName("img-office")[0];
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
        const image = el.getElementsByClassName("img-office")[0];
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
