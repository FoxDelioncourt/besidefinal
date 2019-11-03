<template>
  <div id="footer-container">
    <!-- Twitter <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> -->
    <!-- LinkedIn Instagram Facebook <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> -->
    <div class="inner">
      <div id="social-container">
        <a href="https://www.linkedin.com/company/beside-group/" target="_blank"
          ><img src="../assets/icons/linkedin.svg" alt="Linkedin Logo"
        /></a>
        <a href="https://www.instagram.com/besidegroup/" target="_blank"
          ><img src="../assets/icons/instagram.svg" alt="Instagram Logo"
        /></a>
        <a href="https://twitter.com/BesideGroup" target="_blank"
          ><img src="../assets/icons/twitter.svg" alt="Instagram Logo"
        /></a>
        <a href="https://goo.gl/maps/4SBmrED1zxVmht1HA" target="_blank"
          ><img src="../assets/icons/maps-and-flags.svg" alt="Instagram Logo"
        /></a>
        <!-- <img src="../assets/icons/facebook.svg" alt="Facebook Logo" />
        <img src="../assets/icons/whatsapp.svg" alt="WhatsApp Logo" /> -->
        <!-- <div class="links">
          <router-link to="/">Home</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/about">About Us</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/brands/diesel">Diesel</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/brands/fredperry">Fred Perry</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/brands/scotchsoda">Scotch & Soda</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/brands/pinko">Pinko</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/teams/office">Office Team</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/teams/stores">Store Team</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/teams/fun">Events</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/locator">Directory</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/contact">Contact Us</router-link>
          <p class="dot-separator">.</p>
          <router-link to="/contact/careers">Careers</router-link>
        </div> -->
        <!-- <p class="copyright-text">
          icons made by Freepik from www.flaticon.com
        </p> -->
      </div>
      <div id="add-container">
        <p class="copyright-text">
          © Copyright 2019 Beside FZE
        </p>
        <p class="copyright-text">
          All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer-container {
  min-height: 20px;

  .inner {
    background-color: #000;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;

    #social-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      // grid-template-rows: repeat(10, minmax(20px, 1fr));
      // grid-column-gap: 20px;
      padding: 10px 20px;
      justify-items: center;

      img {
        height: 25px;
        padding: 0 10px;
        margin: 10px 0;
      }

      a {
        display: inline-block;
      }

      a:nth-of-type(1) {
        grid-column: 1 / 2;
        // grid-row: 4 / 5;
        // justify-self: end;
      }

      a:nth-of-type(2) {
        grid-column: 2 / 3;
        // grid-row: 4 / 5;
        // justify-self: start;
      }

      a:nth-of-type(3) {
        grid-column: 3 / 4;
        // grid-row: 4 / 5;
        // justify-self: end;
      }

      a:nth-of-type(4) {
        grid-column: 4 / 5;
        // grid-row: 4 / 5;
        // justify-self: start;
      }
    }

    #add-container {
      background-color: #ffd400;
      grid-area: "copyright";
      display: grid;
      grid-template-columns: 1fr;
      padding: 10px 20px;
      // grid-template-rows: repeat(5, 20px);
      // grid-column-gap: 20px;

      p {
        color: #000;
        justify-self: center;
      }
    }
  }
}

@media only screen and (min-device-width: 767px) {
  #footer-container {
    .inner {
      background-color: #000;
      height: 100%;
      display: grid;
      grid-template-columns: 60% 40%;

      #social-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        // grid-template-rows: repeat(10, minmax(20px, 1fr));
        // grid-column-gap: 20px;
        padding: 10px 20px;
        justify-items: center;

        img {
          height: 20px;
          padding: 0 10px;
          margin: 10px 0;
        }

        a {
          display: inline-block;
        }

        a:nth-of-type(1) {
          grid-column: 1 / 2;
          // grid-row: 4 / 5;
          // justify-self: end;
        }

        a:nth-of-type(2) {
          grid-column: 2 / 3;
          // grid-row: 4 / 5;
          // justify-self: start;
        }

        a:nth-of-type(3) {
          grid-column: 3 / 4;
          // grid-row: 4 / 5;
          // justify-self: end;
        }

        a:nth-of-type(4) {
          grid-column: 4 / 5;
          // grid-row: 4 / 5;
          // justify-self: start;
        }
      }

      #add-container {
        background-color: #ffd400;
        grid-area: "copyright";
        display: grid;
        grid-template-columns: 1fr;
        padding: 10px 20px;
        // grid-template-rows: repeat(5, 20px);
        // grid-column-gap: 20px;

        p {
          color: #000;
          justify-self: center;
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>
