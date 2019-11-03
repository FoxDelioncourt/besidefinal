<template>
  <div id="careers-container">
    <header><h1>careers</h1></header>
    <div id="modal-form" class="form-container">
      <form
        action="https://formspree.io/mdondyvw"
        method="POST"
        enctype="multipart/form-data"
      >
        <input
          type="hidden"
          name="_subject"
          value="Query from Beside Website"
          id="careers-subject"
        />
        <div class="full-name">
          <input
            type="text"
            name="fname"
            id="fnameId"
            placeholder="First name"
            class="form-fields"
          />
          <input
            type="text"
            name="sname"
            id="snameId"
            placeholder="Last name"
            class="form-fields"
          />
        </div>
        <div class="contact-info">
          <input
            type="email"
            name="email"
            id="emailId"
            placeholder="E-mail"
            class="form-fields"
          />
          <input
            type="tel"
            name="mobile"
            id="mobileId"
            placeholder="Mobile"
            class="form-fields"
          />
          <!-- <input type="hidden" name="_honeypot" value="" /> -->
          <!-- <input
            type="hidden"
            name="_confirmation"
            value="Thank you for contacting us.  We will get back to you as soon as possible."
          /> -->
          <!-- <input
              type="hidden"
              name="_after"
              value="https://www.besidegroup.com/"
            /> -->
        </div>
        <select
          name="gender"
          class="form-fields gender"
          v-model="chosen"
          required
        >
          <option value="" disabled>Choose a gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <select
          name="language"
          class="form-fields language"
          placeholder="Choose an additional language fluency"
          required
          v-model="selected"
          v-on:change="composeSubject(chosen, selected)"
        >
          <option value="" disabled
            >Choose an additional language fluency</option
          >
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Filipino">Filipino</option>
          <option value="Others">Others</option>
        </select>
        <!-- <select name="Subject" class="form-fields subject">
          <option value="business" selected>Career Opportunities</option>
        </select> -->
        <input
          type="text"
          name="subject"
          id="subject-display"
          class="form-fields subject"
          disabled
        />
        <input
          type="file"
          name="File"
          placeholder="Attachments (optional)"
          accept=".pdf,.doc,.docx"
          id="fileName"
          class="form-fields"
        />
        <textarea
          name="message"
          id="messageId"
          cols="50"
          rows="10"
          placeholder="Message"
          class="form-fields"
        >
        </textarea>
        <div class="button-container form-fields">
          <button type="submit">submit</button>
        </div>
        <img
          id="careers-close"
          src="../assets/icons/close-x.svg"
          alt=""
          v-on:click="closeModal()"
        />
      </form>
    </div>
    <aside id="country-menu">
      <ul>
        <li class="all-filters" v-on:click="filteredByAll()">ALL</li>
        <hr />
        <li
          v-for="country in careersCountry"
          :key="country.menuId"
          class="country-filters"
          v-on:click="filteredByCountry(country.name)"
        >
          {{ country.name }}
        </li>
      </ul>
    </aside>
    <main id="careers-list">
      <ul>
        <li v-for="careers in filteredData" :key="careers.careerCode">
          <div
            class="career-title"
            v-show="careers.name.length > 0"
            v-on:click.prevent="cvActive = !cvActive"
          >
            {{ careers.name }} - {{ careers.country }}
          </div>
          <ul class="cv" v-show="cvActive">
            <li class="sub-header">Role and Responsibilities</li>
            <br />
            <li
              class="cv-items"
              v-for="res in careers.responsibilities"
              :key="res.resCode"
            >
              <p>
                {{ res.name }}
              </p>
            </li>
            <br />
            <li class="sub-header">Knowledge, Skills and Experience</li>
            <br />
            <li
              class="cv-items"
              v-for="skill in careers.skills"
              :key="skill.skillCode"
            >
              <p>
                {{ skill.name }}
              </p>
            </li>
            <div class="button-container" v-on:click="scrollToModal()">
              <button id="apply-modal" v-on:click="showModal(careers.name)">
                apply
              </button>
            </div>
          </ul>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { TweenMax, ScrollToPlugin } from "gsap/all";
export default {
  name: "filters",
  mounted() {
    this.filteredByCountry;
    this.getFilteredData;
    this.filteredByAll;
    this.composeSubject;

    const countryTrigger = document.querySelectorAll(".country-filters"),
      allTrigger = document.querySelector(".all-filters");

    allTrigger.classList.add("active-country");

    allTrigger.addEventListener("click", e => {
      e.target.classList.add("active-country");
      countryTrigger.forEach(e => e.classList.remove("active-country"));
    });

    countryTrigger.forEach.call(countryTrigger, el => {
      el.addEventListener("click", e => {
        e.target.parentElement.querySelectorAll(".country-filters");

        if (e.target.classList.contains("active-country") === true) {
          e.target.classList.remove("active-country");
          e.target.parentElement
            .querySelectorAll(".country-filters")
            .forEach(e => e.classList.remove("active-country"));
          allTrigger.classList.remove("active-country");
        } else {
          e.target.parentElement
            .querySelectorAll(".country-filters")
            .forEach(e => e.classList.remove("active-country"));
          e.target.classList.add("active-country");
          allTrigger.classList.remove("active-country");
        }
      });
    });
  },
  data() {
    return {
      selected: "",
      chosen: "",
      cntry: "",
      cvActive: false,
      careersCountry: [
        { name: "KSA", menuId: "cntry-1" },
        { name: "UAE", menuId: "cntry-2" },
        { name: "EGYPT", menuId: "cntry-3" },
        { name: "KUWAIT", menuId: "cntry-4" },
        { name: "BAHRAIN", menuId: "cntry-5" },
        { name: "QATAR", menuId: "cntry-6" }
      ],
      careersList: [
        {
          name: "Assistant Marketing Manager - Riyadh",
          country: "KSA",
          careerCode: "career-1",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Support the marketing department in planning and executing the marketing and PR strategy for the company and its brand portfolio in KSA."
            },
            {
              resCode: "resp-2",
              name: "Digital and Social."
            },
            {
              resCode: "resp-3",
              name: "Media relation and activities."
            },
            {
              resCode: "resp-4",
              name: "Support and implementation of any marketing activities."
            },
            {
              resCode: "resp-4",
              name: "Reporting to the Marketing Director based in Dubai, UAE."
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "University degree, preferably in marketing"
            },
            {
              skillCode: "skills-2",
              name:
                "3 to 5 years of marketing experience preferably within retail and/or media agency or other relevant industries."
            },
            {
              skillCode: "skills-3",
              name: "KSA experience is mandatory"
            },
            {
              skillCode: "skills-4",
              name: "Well-versed with MS Office"
            }
          ]
        },
        {
          name: "Buying Merchandiser - Dubai",
          country: "UAE",
          careerCode: "career-2",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Assist and support Buyers on managing the range building to support the buying process and plan stock/intake requirements to meet the budgeted sales. Manage store allocations, replenishment and consolidation throughout the season. Maintain gross profit on purchases and/or net profit on sales in line with overall business expectations."
            },
            {
              resCode: "resp-2",
              name: "Planning and Forecasting"
            },
            {
              resCode: "resp-3",
              name: "Buying Merchandising"
            },
            {
              resCode: "resp-4",
              name: "Supplier Management"
            },
            {
              resCode: "resp-5",
              name: "Stock Management"
            },
            {
              resCode: "resp-6",
              name: "Continuous improvement of processes"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "Bachelor's degree holder."
            },
            {
              skillCode: "skills-2",
              name:
                "Minimum 2 years experience in a similar role or less but with a strong passion for fashion."
            },
            {
              skillCode: "skills-3",
              name: "Well-versed in MS Office with specific emphasis on Excel."
            },
            {
              skillCode: "skills-4",
              name:
                "Must be passionate and knowledgeable about fashion, international brands, trends and multi-generational lifestyles."
            },
            {
              skillCode: "",
              name: ""
            }
          ]
        },
        {
          name: "Store Manager (Russian speaker) - Dubai",
          country: "UAE",
          careerCode: "career-3",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Achieve store targets through effective management (of the store team) and compliance with the organizational policies and procedures."
            },
            {
              resCode: "resp-2",
              name: "Targets and profitability"
            },
            {
              resCode: "resp-3",
              name: "Store maintenance and operations"
            },
            {
              resCode: "resp-4",
              name: "People management and training"
            },
            {
              resCode: "resp-5",
              name: "Customer service"
            },
            {
              resCode: "resp-6",
              name: "Communication and reporting"
            },
            {
              resCode: "resp-7",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "Diploma holder"
            },
            {
              skillCode: "skills-2",
              name:
                "Minimum 2 years experience in a similar role, preferably within a similar brand (Bridge to Luxury)."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name:
                "Fluent in spoken and written English, fluency in Russian preferred."
            },
            {
              skillCode: "skills-5",
              name: "Working knowledge of MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name:
                "Knowledge of the market in terms of changes in fashion trends, compettition, etc."
            }
          ]
        },
        {
          name: "Assistant Store Manager (Chinese/Russian speaker) - Abu Dhabi",
          country: "UAE",
          careerCode: "career-4",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Support the store manager in achieving store targets through effective management (of the store team) and compliance with the organizational policies and procedures.  Manage the store staff in terms of direct reporting, so that the store manager may prioritize strategic issues.  Manage the store in the absence of the store manager, in line with the set standards."
            },
            {
              resCode: "resp-2",
              name: "Targets and profitability"
            },
            {
              resCode: "resp-3",
              name: "Operations and administration"
            },
            {
              resCode: "resp-4",
              name: "Training"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Development and appraisals"
            },
            {
              resCode: "resp-7",
              name: "Information management"
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "Minimum 2 years experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Arabic, eastern European languages) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Working knowledge of MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name:
                "Knowledge of the market in terms of changes in fashion trends, compettition, etc."
            }
          ]
        },
        {
          name: "Store Supervisor (Russian speaker) - Dubai",
          country: "UAE",
          careerCode: "career-5",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Support the management team in achieving store targets, through effective management (of the store team) and compliance with the organizational policies and procedures."
            },
            {
              resCode: "resp-2",
              name: "Targets and profitability"
            },
            {
              resCode: "resp-3",
              name: "Operations and administration"
            },
            {
              resCode: "resp-4",
              name: "Training"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "Minimum 2 years experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Arabic, eastern European languages) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Working knowledge of MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name:
                "Knowledge of the market in terms of changes in fashion trends, compettition, etc."
            }
          ]
        },
        {
          name: "Sales Associate (Chinese speaker) - Dubai",
          country: "UAE",
          careerCode: "career-6",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Drive sales through customer service, in order to ensure that personal and store targets are being met."
            },
            {
              resCode: "resp-2",
              name: "Sales"
            },
            {
              resCode: "resp-3",
              name: "Visual merchandising"
            },
            {
              resCode: "resp-4",
              name: "Receiving shipment"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Perform store operations and closing tasks."
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "A year experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Chinese) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Basic skills in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name: "Knowledge of fashion"
            }
          ]
        },
        {
          name: "Sales Associate (Arabic speaker) - Dubai",
          country: "UAE",
          careerCode: "career-7",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Drive sales through customer service, in order to ensure that personal and store targets are being met."
            },
            {
              resCode: "resp-2",
              name: "Sales"
            },
            {
              resCode: "resp-3",
              name: "Visual merchandising"
            },
            {
              resCode: "resp-4",
              name: "Receiving shipment"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Perform store operations and closing tasks."
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "A year experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Arabic) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Basic skills in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name: "Knowledge of fashion"
            }
          ]
        },
        {
          name: "Sales Associate (Filipino speaker) - Dubai",
          country: "UAE",
          careerCode: "career-8",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Drive sales through customer service, in order to ensure that personal and store targets are being met."
            },
            {
              resCode: "resp-2",
              name: "Sales"
            },
            {
              resCode: "resp-3",
              name: "Visual merchandising"
            },
            {
              resCode: "resp-4",
              name: "Receiving shipment"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Perform store operations and closing tasks."
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "A year experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Filipino) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Basic skills in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name: "Knowledge of fashion"
            }
          ]
        },
        {
          name: "Sales Associate (Russian speaker) - Dubai",
          country: "UAE",
          careerCode: "career-9",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Drive sales through customer service, in order to ensure that personal and store targets are being met."
            },
            {
              resCode: "resp-2",
              name: "Sales"
            },
            {
              resCode: "resp-3",
              name: "Visual merchandising"
            },
            {
              resCode: "resp-4",
              name: "Receiving shipment"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Perform store operations and closing tasks."
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "A year experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Russian) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Basic skills in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name: "Knowledge of fashion"
            }
          ]
        },
        {
          name: "Sales Associate (Arabi speaker) - Doha",
          country: "QATAR",
          careerCode: "career-10",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Drive sales through customer service, in order to ensure that personal and store targets are being met."
            },
            {
              resCode: "resp-2",
              name: "Sales"
            },
            {
              resCode: "resp-3",
              name: "Visual merchandising"
            },
            {
              resCode: "resp-4",
              name: "Receiving shipment"
            },
            {
              resCode: "resp-5",
              name: "Customer service and relationship management"
            },
            {
              resCode: "resp-6",
              name: "Perform store operations and closing tasks."
            },
            {
              resCode: "",
              name: ""
            },
            {
              resCode: "resp-8",
              name: "Competitor and product knowledge"
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "High school"
            },
            {
              skillCode: "skills-2",
              name:
                "A year experience in a similar role, preferably within a similar brand."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "skills-4",
              name: "Bilingual (Arabic) preferred"
            },
            {
              skillCode: "skills-5",
              name: "Basic skills in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name: "Knowledge of fashion"
            }
          ]
        },
        {
          name: "Area Manager - Cairo",
          country: "EGYPT",
          careerCode: "career-11",
          responsibilities: [
            {
              resCode: "resp-1",
              name:
                "Ensure that the stores operate at the optimum level in terms of staffing, product and service."
            },
            {
              resCode: "resp-2",
              name: "Sales & KPIs"
            },
            {
              resCode: "resp-3",
              name: "People management"
            },
            {
              resCode: "resp-4",
              name: "Training and development"
            },
            {
              resCode: "resp-5",
              name: "Communication and reporting"
            },
            {
              resCode: "resp-6",
              name: "Market intelligence"
            },
            {
              resCode: "resp-7",
              name: "Brand awareness"
            },
            {
              resCode: "resp-8",
              name: "Reporting to the Head of Operations based in Dubai, UAE."
            }
          ],
          skills: [
            {
              skillCode: "skills-1",
              name: "Bachelor's degree"
            },
            {
              skillCode: "skills-2",
              name:
                "Minimum 4 to 6 years experience within fashion retail, especially in-store, out of which 3 years should be at a managerial level.  Experience within a similar brand preferred (Bridge to Luxury)."
            },
            {
              skillCode: "skills-3",
              name: "Local retail experience is mandatory."
            },
            {
              skillCode: "",
              name: ""
            },
            {
              skillCode: "skills-5",
              name: "Working knowledge in MS Office."
            },
            {
              skillCode: "skills-6",
              name: "Knowledge of the local culture and sensitivities."
            },
            {
              skillCode: "skills-7",
              name:
                "Knowledge of the market in terms of changes in fashion trends, competition, etc."
            }
          ]
        }
      ]
    };
  },
  methods: {
    scrollToModal() {
      TweenMax.to(window, 1, {
        scrollTo: "#careers-container",
        ease: Power1.easeOut
      });
    },
    composeSubject(gender, language) {
      const newSubj = document.getElementById("careers-subject").value;
      document.getElementById("careers-subject").value =
        newSubj + " (" + gender + ", " + language + ")";
      // console.log(newSubj + " (" + gender + ", " + language + ")");
    },
    showModal(title) {
      const modal = document.getElementById("modal-form");
      // if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
      // document.getElementById("grid-container").style.display = "none";
      document.getElementById("careers-subject").value =
        "Application - " + title + " " + this.selected;
      document.getElementById("subject-display").value =
        "Application - " + title;
      // document.getElementById("modal-content").src = imgSrc;
      // document.getElementById("name-label").innerHTML = imgName;
      // document.getElementById("title-label").innerHTML = imgTitle;
      // }
      // else {
      //   modal.style.display = "none";
      // document.getElementById("grid-container").style.display = "grid";
      // document.getElementById("modal-content").src = "";
      // document.getElementById("name-label").innerHTML = "";
      // document.getElementById("title-label").innerHTML = "";
      // }
    },
    closeModal() {
      document.getElementById("modal-form").style.display = "none";
      // document.getElementById("grid-container").style.display = "grid";
      // document.getElementById("modal-content").src = "";
      // document.getElementById("name-label").innerHTML = "";
      // document.getElementById("title-label").innerHTML = "";
    },
    filteredByCountry(country) {
      const prev = country.toUpperCase();
      if (prev === this.cntry) {
        return (this.cntry = "");
      } else {
        return (this.cntry = country.toUpperCase());
      }
    },
    filteredByAll() {
      return (this.cntry = "");
    }
  },
  computed: {
    filteredData: function() {
      return this.careersList.filter(careers => {
        if (this.cntry === "") {
          return careers;
        } else {
          return careers.country.toUpperCase().includes(this.cntry) === true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#careers-container {
  padding-top: 50px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content;

  header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    h1 {
      font-size: 1.5em;
      margin: 0 20px 50px 20px;
      text-align: center;
    }
  }

  #country-menu {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    li {
      font-family: "BodyFont";
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      list-style: none;
      text-align: center;
      margin: 0;
      cursor: pointer;
    }

    .active-brand,
    .active-country {
      color: #ffd400;
    }

    hr {
      width: 50%;
      margin: 10px 25% 10px 25%;
    }
  }

  #careers-list {
    grid-column: 1 / 2;
    grid-row: 3 / 11;
    padding: 50px 10px 0 10px;

    li {
      list-style: none;
    }

    .career-title {
      border: 2px solid #ffd400;
      margin: 0;
      padding: 10px 0;
      font-family: "BodyFont";
      font-weight: 500;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;

      p {
        font-family: "BodyFont";
        text-align: center;
      }
    }

    .cv {
      padding: 10px 10px 50px 10px;

      .active {
        display: block;
      }

      li {
        font-family: "BodyFont";
        font-weight: 500;
        list-style: none;
      }

      .sub-header {
        font-family: "BodyFont";
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-weight: 500;
        padding: 5px 0 5px 0;
      }

      .cv-items {
        padding-left: 20px;
        line-height: 1.5em;
        margin-bottom: 20px;
      }

      .button-container {
        border: none;
        width: 100%;
        margin-bottom: 50px;
        button {
          border: none;
          background-color: transparent;
          color: #ffd400;
          font-family: "Syncopate", sans-serif;
          font-size: 3em;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffd400;
          cursor: pointer;
          display: block;
          float: right;
        }

        button:hover {
          -webkit-text-fill-color: #ffd400;
          -webkit-text-stroke-width: 0;
        }
      }
    }
  }

  .form-container {
    grid-column: 1 / 11;
    grid-row: 2 / 11;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100vh;
    width: 100vw;
    z-index: 5000;
    display: none;

    .form-fields {
      line-height: 2em;
      padding: 0 10px;
      outline: none;
      border: 2px solid #ffd400;
    }

    .form-fields:focus {
      background-color: #ffd400;
    }

    form {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(10, min-content);
      grid-gap: 10px 0;

      select {
        font-family: "Montserrat";
        font-size: 1em;
        color: #545454;
        padding: 10px;
        width: 100%;
      }

      .full-name {
        grid-column: 4 / 8;
        grid-row: 1 / 2;
        align-self: end;

        #fnameId {
          width: calc((100% / 2) - 5px);
          margin: 0 5px 0 0;
        }

        #snameId {
          width: calc((100% / 2) - 5px);
          margin: 0 0 0 5px;
        }
      }

      .contact-info {
        grid-column: 4 / 8;
        grid-row: 2 / 3;

        #mobileId {
          width: calc((100% / 2) - 5px);
          margin: 0 0 0 5px;
        }

        #emailId {
          width: calc((100% / 2) - 5px);
          margin: 0 5px 0 0;
        }
      }

      .gender {
        grid-column: 4 / 8;
        grid-row: 3 / 4;
        height: 33px;
      }

      .language {
        grid-column: 4 / 8;
        grid-row: 4 / 5;
        height: 33px;
      }
      .subject {
        grid-column: 4 / 8;
        grid-row: 5 / 6;
        height: 33px;
      }

      #fileName {
        grid-column: 4 / 8;
        grid-row: 6 / 7;
        height: 33px;
        background-color: #fff;
        color: #000;
      }

      #messageId {
        grid-column: 4 / 8;
        grid-row: 7 / 8;
      }

      .button-container {
        grid-column: 4 / 8;
        grid-row: 8 / 9;
        border: none;
        width: 100%;

        button {
          border: none;
          background-color: transparent;
          color: #ffd400;
          font-family: "Syncopate", sans-serif;
          font-size: 3em;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #ffd400;
          cursor: pointer;
          display: block;
          float: right;
        }

        button:hover {
          -webkit-text-fill-color: #ffd400;
          -webkit-text-stroke-width: 0;
        }
      }

      #careers-close {
        grid-column: 9 / 10;
        grid-row: 1 / 11;
        justify-self: center;
        align-self: start;
        cursor: pointer;
      }
    }
  }
}

@media only screen and (min-device-width: 1279px) {
  #careers-container {
    min-height: 100vh;
    padding-top: 95px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, min-content);

    header {
      grid-column: 1 / 11;
      grid-row: 1 / 2;

      h1 {
        font-size: 2em;
        margin: 0 0 50px 50px;
        text-align: left;
      }
    }

    #country-menu {
      grid-column: 1 / 3;
      grid-row: 2 / 11;

      li {
        font-family: "BodyFont";
        font-weight: 500;
        font-size: 0.9em;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        list-style: none;
        text-align: left;
        margin: 0 0 0 50px;
        cursor: pointer;
      }

      .active-brand,
      .active-country {
        color: #ffd400;
      }

      hr {
        width: 50%;
        margin: 10px 0 10px 50px;
      }
    }

    #careers-list {
      grid-column: 3 / 11;
      grid-row: 2 / 11;
      padding-right: 50px;

      li {
        list-style: none;
      }

      .career-title {
        border: 2px solid #ffd400;
        margin: 10px;
        padding: 5px 20px;
        font-family: "BodyFont";
        font-weight: 500;

        p {
          font-family: "BodyFont";
        }
      }

      #cv {
        padding: 10px 0 10px 50px;

        li {
          font-family: "BodyFont";
          font-weight: 500;
          list-style: none;
        }

        .sub-header {
          font-family: "BodyFont";
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 500;
          padding: 5px 0 5px 0;
        }

        .cv-items {
          padding-left: 20px;
          line-height: 1.5em;
        }

        .button-container {
          border: none;
          width: 100%;
          margin-bottom: 50px;
          button {
            border: none;
            background-color: transparent;
            color: #ffd400;
            font-family: "Syncopate", sans-serif;
            font-size: 3em;
            font-weight: bold;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #ffd400;
            cursor: pointer;
            display: block;
            float: right;
          }

          button:hover {
            -webkit-text-fill-color: #ffd400;
            -webkit-text-stroke-width: 0;
          }
        }
      }
    }

    .form-container {
      grid-column: 1 / 11;
      grid-row: 2 / 11;
      background-color: rgba(0, 0, 0, 0.9);
      height: 100vh;
      width: 100vw;
      z-index: 5000;
      display: none;

      .form-fields {
        line-height: 2em;
        padding: 0 10px;
        outline: none;
        border: 2px solid #ffd400;
      }

      .form-fields:focus {
        background-color: #ffd400;
      }

      form {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, min-content);
        grid-gap: 10px 0;

        select {
          font-family: "Montserrat";
          font-size: 1em;
          color: #545454;
          padding: 10px;
          width: 100%;
        }

        .full-name {
          grid-column: 4 / 8;
          grid-row: 1 / 2;
          align-self: end;

          #fnameId {
            width: calc((100% / 2) - 5px);
            margin: 0 5px 0 0;
          }

          #snameId {
            width: calc((100% / 2) - 5px);
            margin: 0 0 0 5px;
          }
        }

        .contact-info {
          grid-column: 4 / 8;
          grid-row: 2 / 3;

          #mobileId {
            width: calc((100% / 2) - 5px);
            margin: 0 0 0 5px;
          }

          #emailId {
            width: calc((100% / 2) - 5px);
            margin: 0 5px 0 0;
          }
        }

        .gender {
          grid-column: 4 / 8;
          grid-row: 3 / 4;
          height: 33px;
        }

        .language {
          grid-column: 4 / 8;
          grid-row: 4 / 5;
          height: 33px;
        }
        .subject {
          grid-column: 4 / 8;
          grid-row: 5 / 6;
          height: 33px;
        }

        #fileName {
          grid-column: 4 / 8;
          grid-row: 6 / 7;
          height: 33px;
          background-color: #fff;
          color: #000;
        }

        #messageId {
          grid-column: 4 / 8;
          grid-row: 7 / 8;
        }

        .button-container {
          grid-column: 4 / 8;
          grid-row: 8 / 9;
          border: none;
          width: 100%;

          button {
            border: none;
            background-color: transparent;
            color: #ffd400;
            font-family: "Syncopate", sans-serif;
            font-size: 3em;
            font-weight: bold;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #ffd400;
            cursor: pointer;
            display: block;
            float: right;
          }

          button:hover {
            -webkit-text-fill-color: #ffd400;
            -webkit-text-stroke-width: 0;
          }
        }

        #careers-close {
          grid-column: 9 / 10;
          grid-row: 1 / 11;
          justify-self: center;
          align-self: start;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
