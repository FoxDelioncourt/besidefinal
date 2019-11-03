<template>
  <div id="locator-container">
    <header>
      <h1>find our stores near you</h1>
    </header>
    <aside id="filter-menu">
      <ul>
        <li class="all-filters" v-on:click="filteredByAll()">ALL</li>
        <hr />
        <li
          v-for="filterOptions in filterBrand"
          :key="filterOptions.menuId"
          class="brand-filters"
          v-on:click="filteredByBrand(filterOptions.name)"
        >
          {{ filterOptions.name }}
        </li>
        <hr />
        <li
          v-for="filterOptions in filterCountry"
          :key="filterOptions.menuId"
          class="country-filters"
          v-on:click="filteredByCountry(filterOptions.name)"
        >
          {{ filterOptions.name }}
        </li>
      </ul>
    </aside>
    <main id="locations">
      <div
        :id="store.id"
        class="store-location"
        v-for="store in filteredData"
        :key="store.id"
      >
        <!-- <img src="..\assets\icons\marker.svg" alt="Store Location Marker" /> -->
        <div class="address-text">
          <p>{{ store.brand }}</p>
          <p>{{ store.name }}</p>
          <p>{{ store.address1 }}</p>
          <p>{{ store.address2 }}</p>
          <p>{{ store.phone }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ScrollToPlugin } from "gsap/all";

export default {
  name: "filters",
  mounted() {
    // window.scrollTo(0, 0);
    this.getFilteredData;
    this.filteredByBrand;
    this.filteredByCountry;
    this.filteredByAll;

    const brandTrigger = document.querySelectorAll(".brand-filters"),
      countryTrigger = document.querySelectorAll(".country-filters"),
      allTrigger = document.querySelector(".all-filters");

    allTrigger.classList.add("active-brand");

    allTrigger.addEventListener("click", e => {
      e.target.classList.add("active-brand");
      brandTrigger.forEach(e => e.classList.remove("active-brand"));
      countryTrigger.forEach(e => e.classList.remove("active-country"));
    });

    brandTrigger.forEach.call(brandTrigger, el => {
      el.addEventListener("click", e => {
        e.target.parentElement.querySelectorAll(".brand-filters");

        if (e.target.classList.contains("active-brand") === true) {
          e.target.classList.remove("active-brand");
          e.target.parentElement
            .querySelectorAll(".brand-filters")
            .forEach(e => e.classList.remove("active-brand"));
          allTrigger.classList.remove("active-brand");
        } else {
          e.target.parentElement
            .querySelectorAll(".brand-filters")
            .forEach(e => e.classList.remove("active-brand"));
          e.target.classList.add("active-brand");
          allTrigger.classList.remove("active-brand");
        }
      });
    });

    countryTrigger.forEach.call(countryTrigger, el => {
      el.addEventListener("click", e => {
        e.target.parentElement.querySelectorAll(".country-filters");

        if (e.target.classList.contains("active-country") === true) {
          e.target.classList.remove("active-country");
          e.target.parentElement
            .querySelectorAll(".country-filters")
            .forEach(e => e.classList.remove("active-country"));
          allTrigger.classList.remove("active-brand");
        } else {
          e.target.parentElement
            .querySelectorAll(".country-filters")
            .forEach(e => e.classList.remove("active-country"));
          e.target.classList.add("active-country");
          allTrigger.classList.remove("active-brand");
        }
      });
    });
  },
  data() {
    return {
      // filteredData: [],
      brnd: "",
      cntry: "",
      filterBrand: [
        { name: "DIESEL", menuId: "br_1" },
        { name: "FRED PERRY", menuId: "br_2" },
        { name: "SCOTCH & SODA", menuId: "br_3" },
        { name: "PINKO", menuId: "br_4" }
      ],
      filterCountry: [
        { name: "KSA", menuId: 1 },
        { name: "UAE", menuId: 2 },
        { name: "EGYPT", menuId: 3 },
        { name: "KUWAIT", menuId: 4 },
        { name: "BAHRAIN", menuId: 5 },
        { name: "QATAR", menuId: 6 }
      ],
      stores: [
        {
          id: "TDM-D",
          name: "The Dubai Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3398615"
        },
        {
          id: "MOE-D",
          name: "Mall of the Emirates",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3411395"
        },
        {
          id: "DMM-D",
          name: "Dubai Marina Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3997783"
        },
        {
          id: "DCC-D",
          name: "Deira City Centre",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3451971"
        },
        {
          id: "MER-D",
          name: "Mercato",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3433879"
        },
        {
          id: "DFC-D",
          name: "Dubai Festival City",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 2326442"
        },
        {
          id: "HAR-MOE-D",
          name: "Harvey Nichols - Mall Of The Emirates",
          brand: "Diesel",
          address1: "Second Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 4098888"
        },
        {
          id: "BLO-TDM-D",
          name: "Bloomingdales - The Dubai Mall",
          brand: "Diesel",
          address1: "Second Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3505333"
        },
        {
          id: "GLF-TDM-D",
          name: "Galeries Lafayette - The Dubai Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3399933"
        },
        {
          id: "RAG",
          name: "American Rag Cie - The Dubai Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3253898"
        },
        {
          id: "ROB",
          name: "Robinsons - Dubai Festival City",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: 800 67667"
        },
        {
          id: "YAS-D",
          name: "Yas Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 5651650"
        },
        {
          id: "GAL-D",
          name: "The Galleria",
          brand: "Diesel",
          address1: "Second Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 6266486"
        },
        {
          id: "AMM-D",
          name: "Abu Dhabi Marina Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 6817721"
        },
        {
          id: "SAL AIN",
          name: "Al Ain Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Al Ain, UAE",
          phone: "T: +971 3 7515000"
        },
        {
          id: "TAH-D",
          name: "Tahlia Street",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2891112"
        },
        {
          id: "RED-D",
          name: "Red Sea Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2150338"
        },
        {
          id: "MOA-D",
          name: "Mall Of Arabia",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 6122735"
        },
        {
          id: "OLA-D",
          name: "Olaya St.",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 2790807"
        },
        // {
        //   id: "KIN-D",
        //   name: "Kingdom",
        //   brand: "Diesel",
        //   address1: "Lower Ground",
        //   address2: "Riyadh, KSA",
        //   phone: "T: +966 11 2112974"
        // },
        {
          id: "NKH-D",
          name: "Nakheel Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4540820"
        },
        {
          id: "RAS-D",
          name: "Rashid Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8954484"
        },
        {
          id: "DHA-D",
          name: "Dhahran Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8687515"
        },
        {
          id: "GRA-D",
          name: "Granada Center",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 2402212"
        },
        // {
        //   id: "FAI-D",
        //   name: "Faisaliah Mall",
        //   brand: "Diesel",
        //   address1: "First Floor",
        //   address2: "Riyadh, KSA",
        //   phone: "T: +966 11 2734155"
        // },
        {
          id: "BCC-D",
          name: "Bahrain City Centre",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Manama, Bahrain",
          phone: "T: +973 17178080"
        },
        {
          id: "CCS-D",
          name: "City Stars",
          brand: "Diesel",
          address1: "Third Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 24802034"
        },
        {
          id: "MAC-D",
          name: "Mall of Arabia",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 38260532"
        },
        {
          id: "CFC-D",
          name: "Cairo Festival City",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 26168135"
        },
        {
          id: "EGO GAL",
          name: "Ego - Galleria 40",
          brand: "Diesel",
          address1: "6th of October",
          address2: "Cairo, Egypt",
          phone: "T: +20 12 75699933"
        },
        {
          id: "EGO HEL",
          name: "Ego - Al Orouba Street",
          brand: "Diesel",
          address1: "Street Level",
          address2: "Cairo, Egypt",
          phone: "T: +20 12 29933032"
        },
        {
          id: "360-D",
          name: "360 Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 25309727"
        },
        {
          id: "AVK-D",
          name: "The Avenues",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 2 2597064"
        },
        {
          id: "SAL TGQ",
          name: "The Gate Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4485555"
        },
        {
          id: "SAL MOQ",
          name: "Mall of Qatar",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 0212500/2511"
        },
        {
          id: "QFC-D",
          name: "Doha Festival City",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4129798"
        },
        {
          id: "DAW 51E-LAG-D",
          name: "Lagoona Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4361111"
        },
        {
          id: "TAJ-D",
          name: "Taj Mall",
          brand: "Diesel",
          address1: "First Floor",
          address2: "Amman, Jordan",
          phone: "T: +962 79 9950882"
        },
        {
          id: "DOM-D",
          name: "Outlet - Dubai Outlet Mall",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 4255806"
        },
        {
          id: "TOV-D",
          name: "Outlet - The Outlet Village",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 8863997"
        },
        {
          id: "GOM-D",
          name: "Outlet - Gold Moor",
          brand: "Diesel",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2753991"
        },
        {
          id: "TDM-K",
          name: "The Dubai Mall",
          brand: "Diesel Kid",
          address1: "Second Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3399163"
        },
        {
          id: "YAS-K",
          name: "Yas Mall",
          brand: "Diesel Kid",
          address1: "First Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 5651816"
        },
        {
          id: "GLF-TDM-K",
          name: "Galeries Lafayette - The Dubai Mall",
          brand: "Diesel Kid",
          address1: "Second Floor",
          address2: "Dubai UAE",
          phone: "T: +971 4 3399933"
        },
        {
          id: "TOV-K",
          name: "Outlet - The Outlet Village",
          brand: "Diesel Kid",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 8860396"
        },
        {
          id: "AVK-K",
          name: "The Avenues",
          brand: "Diesel Kid",
          address1: "Ground Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 22597524"
        },
        {
          id: "HAR-AVK-K",
          name: "Harvey Nichols - The Avenues",
          brand: "Diesel Kid",
          address1: "Second Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 2 2283008"
        },
        {
          id: "TAJ",
          name: "Taj Mall",
          brand: "Diesel Kid",
          address1: "First Floor",
          address2: "Amman, Jordan",
          phone: "T: +962 79 9950882"
        },
        {
          id: "TDM-FP",
          name: "The Dubai Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Dubai UAE",
          phone: "T: +971 4 3399358"
        },
        // {
        //   id: "DCC-FP",
        //   name: "Deira City Centre",
        //   brand: "Fred Perry",
        //   address1: "Second Floor",
        //   address2: "Dubai UAE",
        //   phone: "T: +971 4 2395061"
        // },
        {
          id: "DFC-FP",
          name: "Dubai Festival City",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Dubai UAE",
          phone: "T: +971 4 2329801"
        },
        {
          id: "DMM-FP",
          name: "Dubai Marina Mall",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Dubai UAE",
          phone: "T: +971 4 2210090"
        },
        {
          id: "GLF-TDM-FP",
          name: "Galeries Lafayette - The Dubai Mall",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Dubai UAE",
          phone: "T: +971 4 3399933"
        },
        {
          id: "YAS-FP",
          name: "Yas Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Abu Dhabi UAE",
          phone: "T: +971 2 5651585"
        },
        {
          id: "GAL-FP",
          name: "The Galleria",
          brand: "Fred Perry",
          address1: "Second Floor",
          address2: "Abu Dhabi UAE",
          phone: "T: +971 2 6266489"
        },
        {
          id: "TAH-FP",
          name: "Tahlia Street",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2830741"
        },
        {
          id: "RED-FP",
          name: "Red Sea Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2150344"
        },
        {
          id: "MOA-FP",
          name: "Mall Of Arabia",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 6122799"
        },
        {
          id: "OLA-FP",
          name: "Olaya Street",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4622294"
        },
        {
          id: "NKH-FP",
          name: "Nakheel Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4008947"
        },
        {
          id: "GRA-FP",
          name: "Granada Center",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 2490109"
        },
        {
          id: "RAS-FP",
          name: "Rashid Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8977780"
        },
        {
          id: "DHA-FP",
          name: "Dhahran Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8686568"
        },
        {
          id: "NOR-FP",
          name: "Al Noor Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Medina, KSA",
          phone: "T: +966 14 8494024"
        },
        {
          id: "HYT-FP",
          name: "Hayat Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 2056987"
        },
        {
          id: "PAN-FP",
          name: "Panorama Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4823494"
        },
        {
          id: "SAKS BCC",
          name: "Saks 5th Avenue - Bahrain City Centre",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Manama, Bahrain",
          phone: "T: +973 1 7172000"
        },
        {
          id: "CCS-FP",
          name: "City Stars",
          brand: "Fred Perry",
          address1: "Third Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 24802687"
        },
        {
          id: "MAC-FP",
          name: "Mall of Arabia",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 38260531"
        },
        {
          id: "CFC-FP",
          name: "Cairo Festival City",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Cairo, Egypt",
          phone: "T: +20 2 26168134"
        },
        {
          id: "QFC-FP",
          name: "Doha Festival City",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4713160"
        },
        {
          id: "DAW 51E-LAG-FP",
          name: "Lagoona Mall",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4361111"
        },
        {
          id: "TAJ-FP",
          name: "Taj Mall",
          brand: "Fred Perry",
          address1: "First Floor",
          address2: "Amman, Jordan",
          phone: "T: +962 79 9950882"
        },
        {
          id: "DOM-FP",
          name: "Outlet - Dubai Outlet Mall",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 5516704"
        },
        {
          id: "TOV-FP",
          name: "Outlet - The Outlet Village",
          brand: "Fred Perry",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 8861274"
        },
        {
          id: "TDM-SS",
          name: "The Dubai Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3398644"
        },
        {
          id: "DMM-SS",
          name: "Dubai Marina Mall",
          brand: "Scotch & Soda",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3997897"
        },
        {
          id: "NKH",
          name: "Nakheel Department Store",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3909999"
        },
        {
          id: "YAS-SS",
          name: "Yas Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 5651898"
        },
        {
          id: "OLA-SS",
          name: "Olaya Street",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4160814"
        },
        {
          id: "NKH-SS",
          name: "Nakheel Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 4542362"
        },
        {
          id: "DHA-SS",
          name: "Dhahran Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8687207"
        },
        {
          id: "RAS-SS",
          name: "Rashid Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Al Khobar, KSA",
          phone: "T: +966 13 8944858"
        },
        {
          id: "RED-SS",
          name: "Red Sea Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2150018"
        },
        {
          id: "MOA-SS",
          name: "Mall of Arabia",
          brand: "Scotch & Soda",
          address1: "First Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 6070013"
        },
        {
          id: "TAH-SS",
          name: "Tahlia Street",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 6632991"
        },
        {
          id: "AVK-SS",
          name: "The Avenues",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 2 2597981"
        },
        {
          id: "QFC-SS",
          name: "Doha Festival City",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Doha, Qatar",
          phone: "T: +974 4 4376869"
        },
        {
          id: "HAR-QFC-SS",
          name: "Harvey Nichols - Doha Festival City",
          brand: "Scotch & Soda",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 4098888"
        },
        {
          id: "TAJ-SS",
          name: "Taj Mall",
          brand: "Scotch & Soda",
          address1: "First Floor",
          address2: "Amman, Jordan",
          phone: "T: +962 6 5921122"
        },
        {
          id: "DOM-SS",
          name: "Outlet - Dubai Outlet Mall",
          brand: "Scotch & Soda",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 5667015"
        },
        {
          id: "TDM-PK",
          name: "The Dubai Mall",
          brand: "Pinko",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3399416"
        },
        {
          id: "GLF-TDM-PK",
          name: "Galeries Lafayette - The Dubai Mall",
          brand: "Pinko",
          address1: "First Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 3399933"
        },
        {
          id: "GAL-PK",
          name: "The Galleria",
          brand: "Pinko",
          address1: "First Floor",
          address2: "Abu Dhabi, UAE",
          phone: "T: +971 2 6266470"
        },
        {
          id: "HAR-AVK-SS",
          name: "Harvey Nichols - The Avenues",
          brand: "Scotch & Soda",
          address1: "First Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 2 2283008"
        },
        // {
        //   id: "STA-PK",
        //   name: "Stars Avenue",
        //   brand: "Pinko",
        //   address1: "First Floor",
        //   address2: "Jeddah, KSA",
        //   phone: "T: +966 12 2754480"
        // },
        {
          id: "RED-PK",
          name: "Red Sea Mall",
          brand: "Pinko",
          address1: "Ground Floor",
          address2: "Jeddah, KSA",
          phone: "T: +966 12 2880492"
        },
        {
          id: "KIN-PK",
          name: "Kingdom",
          brand: "Pinko",
          address1: "First Floor",
          address2: "Riyadh, KSA",
          phone: "T: +966 11 2112966"
        },
        {
          id: "360-PK",
          name: "360 Mall",
          brand: "Pinko",
          address1: "Ground Floor",
          address2: "Kuwait City, Kuwait",
          phone: "T: +965 2 5309772"
        },
        {
          id: "TOV-PK",
          name: "Outlet - The Outlet Village",
          brand: "Pinko",
          address1: "Ground Floor",
          address2: "Dubai, UAE",
          phone: "T: +971 4 8813799"
        }
      ]
    };
  },
  methods: {
    filteredByBrand(brand) {
      const prev = brand.toUpperCase();
      if (prev === this.brnd) {
        return (this.brnd = "");
      } else {
        return (this.brnd = brand.toUpperCase());
      }
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
      return (this.cntry = ""), (this.brnd = "");
    }
  },
  computed: {
    filteredData: function() {
      return this.stores.filter(store => {
        // return store.brand.match(this.brnd);
        if (this.brnd === "" && this.cntry === "") {
          return store;
        } else if (this.brnd !== "" && this.cntry === "") {
          return store.brand.toUpperCase() === this.brnd;
        } else if (this.brnd === "" && this.cntry !== "") {
          return store.address2.toUpperCase().includes(this.cntry) === true;
        } else if (this.brnd !== "" && this.cntry !== "") {
          return (
            store.brand.toUpperCase() === this.brnd &&
            store.address2.toUpperCase().includes(this.cntry) === true
          );
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#locator-container {
  padding-top: 50px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content;
  grid-template-areas:
    "header "
    "filter"
    "stores";

  header {
    grid-area: header;

    h1 {
      font-size: 1.5em;
      margin: 0 20px 50px 20px;
      text-align: center;
    }
  }

  #filter-menu {
    grid-area: filter;
    margin-bottom: 50px;

    .active-brand,
    .active-country {
      color: #ffd400;
    }

    ul li {
      font-family: "BodyFont";
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.25em;
      list-style: none;
      text-align: center;
      margin: 0;
      cursor: pointer;
    }

    hr {
      width: 50%;
      margin: 10px 25% 10px 25%;
    }
  }

  #locations {
    grid-area: stores;
    display: grid;
    grid-template-columns: 100%;

    .store-location {
      display: grid;
      grid-template-columns: max-content;
      grid-template-rows: auto;
      // letter-spacing: 0.15em;
      margin: 20px;
      font-family: "BodyFont";
      font-weight: 500;
      height: max-content;
      // background-color: blue;
      line-height: 1.25em;
      text-align: center;
      justify-self: center;
    }
  }
}

@media only screen and (min-device-width: 768px) {
  #locator-container {
    padding-top: 50px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: min-content min-content min-content;
    grid-template-areas:
      "header header header header"
      "filter filter stores stores";

    header {
      grid-area: header;

      h1 {
        font-size: 2em;
        margin: 0 0 50px 50px;
        text-align: left;
      }
    }

    #filter-menu {
      grid-area: filter;

      .active-brand,
      .active-country {
        color: #ffd400;
      }

      ul li {
        font-family: "BodyFont";
        font-weight: 500;
        font-size: 0.9em;
        letter-spacing: 0.25em;
        list-style: none;
        text-align: left;
        margin: 0 0 0 50px;
      }

      hr {
        width: 50%;
        margin: 10px 0 10px 50px;
      }
    }

    #locations {
      grid-area: stores;
      display: grid;
      grid-template-columns: 100%;

      .store-location {
        display: grid;
        grid-template-columns: max-content;
        grid-template-rows: auto;
        // letter-spacing: 0.15em;
        margin: 20px;
        font-family: "BodyFont";
        font-weight: 500;
        height: max-content;
        // background-color: blue;
        line-height: 1.25em;
        text-align: left;
        justify-self: start;
      }
    }
  }
}

@media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) {
  #locator-container {
    padding-top: 95px;
    grid-template-areas:
      "header header header header"
      "filter stores stores stores";
    #locations {
      grid-area: stores;
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }
}

@media only screen and (min-device-width: 1919px) {
  #locator-container {
    grid-template-areas:
      "header header header header"
      "filter stores stores stores";
    #locations {
      grid-area: stores;
      display: grid;
      grid-template-columns: 30% 30% 30%;
    }
  }
}
</style>
