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
        <div class="links">
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
        </div>
        <p class="copyright-text">
          © Copyright 2019 Beside Group FZE
        </p>
        <p class="copyright-text">
          All rights reserved.
        </p>
        <!-- <p class="copyright-text">
          icons made by Freepik from www.flaticon.com
        </p> -->
      </div>
      <div id="add-container">
        <p>Beside FZE</p>
        <p>Street N302, Jebel Ali Free Zone</p>
        <p>PO Box 61237</p>
        <p>Dubai, UAE</p>
        <hr />
        <p>info@besidegroup.com</p>
        <p>+971 (0)4 8817094</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-device-width: 1364px) {
  #footer-container {
    min-height: 40px;

    .inner {
      background-color: #000;
      height: 100%;
      display: grid;
      grid-template-columns: 100%;

      #social-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(10, minmax(20px, 1fr));
        // grid-column-gap: 20px;
        padding: 0 20px;
        justify-items: center;

        img {
          height: 25px;
          padding: 0 10px;
          margin: 10px 0;
        }

        .copyright-text:nth-of-type(1) {
          grid-column: 1 / 3;
          grid-row: 7 / 8;
          justify-self: center;
          font-size: 0.8em;
        }

        .copyright-text:nth-of-type(2) {
          grid-column: 1 / 3;
          grid-row: 8 / 9;
          justify-self: center;
          font-size: 0.8em;
        }

        .copyright-text:nth-of-type(3) {
          grid-column: 1 / 3;
          grid-row: 10 / 11;
          justify-self: center;
          font-size: 0.6em;
        }

        a {
          display: inline-block;
        }

        a:nth-of-type(1) {
          grid-column: 1 / 2;
          grid-row: 4 / 5;
          justify-self: end;
        }

        a:nth-of-type(2) {
          grid-column: 2 / 3;
          grid-row: 4 / 5;
          justify-self: start;
        }

        a:nth-of-type(3) {
          grid-column: 1 / 2;
          grid-row: 5 / 6;
          justify-self: end;
        }

        a:nth-of-type(4) {
          grid-column: 2 / 3;
          grid-row: 5 / 6;
          justify-self: start;
        }

        .links {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
          text-align: center;
          a {
            text-decoration: none;
            color: #fff;
            font-family: "Montserrat";
          }
          .dot-separator {
            display: inline-block;
            padding: 0 10px;
          }
        }
      }

      #add-container {
        background-color: #ffd400;
        grid-area: "copyright";
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(10, 20px);
        grid-column-gap: 20px;

        p {
          color: #000;
          justify-self: center;
        }

        p:nth-of-type(1) {
          grid-column: 1 / 2;
          grid-row: 6 / 7;
        }

        p:nth-of-type(2) {
          grid-column: 1 / 2;
          grid-row: 7 / 8;
        }

        p:nth-of-type(3) {
          grid-column: 1 / 2;
          grid-row: 8 / 9;
        }

        p:nth-of-type(4) {
          grid-column: 1 / 2;
          grid-row: 9 / 10;
        }

        p:nth-of-type(5) {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          font-size: 1.2em;
          font-weight: bold;
          justify-self: center;
        }

        p:nth-of-type(6) {
          grid-column: 1 / 2;
          grid-row: 3 / 4;
          font-size: 1.2em;
          font-weight: bold;
          justify-self: center;
        }

        hr {
          margin: 10px 0;
          grid-column: 1 / 2;
          grid-row: 5 / 6;
          width: 50%;
          justify-self: center;
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 1365px) {
  #footer-container {
    min-height: 40px;

    .inner {
      background-color: #000;
      height: 100%;
      display: grid;
      grid-template-columns: 75% 25%;
      grid-template-areas: "social copyright";
      align-items: center;

      #social-container {
        grid-area: "social";
        display: grid;
        grid-template-columns: repeat(4, min-content), repeat(6, 1fr);
        grid-template-rows: repeat(10, 20px);
        grid-column-gap: 10px;
        padding: 0;

        img {
          height: 15px;
        }

        .copyright-text:nth-of-type(1) {
          grid-column: 1 / 11;
          grid-row: 7 / 8;
          justify-self: center;
          font-size: 0.7em;
        }

        .copyright-text:nth-of-type(2) {
          grid-column: 1 / 11;
          grid-row: 8 / 9;
          justify-self: center;
          font-size: 0.7em;
        }

        .copyright-text:nth-of-type(3) {
          grid-column: 1 / 11;
          grid-row: 10 / 11;
          justify-self: center;
          font-size: 0.6em;
        }

        a {
          justify-self: start;
          font-size: 0.8em;
        }

        a:nth-of-type(1) {
          grid-column: 2 / 3;
          grid-row: 4 / 5;
        }

        a:nth-of-type(2) {
          grid-column: 3 / 4;
          grid-row: 4 / 5;
        }

        a:nth-of-type(3) {
          grid-column: 4 / 5;
          grid-row: 4 / 5;
        }

        a:nth-of-type(4) {
          grid-column: 5 / 6;
          grid-row: 4 / 5;
        }

        .links {
          grid-column: 2 / 10;
          grid-row: 2 / 3;
          a {
            text-decoration: none;
            color: #fff;
            font-family: "Montserrat";
          }
          .dot-separator {
            display: inline-block;
            padding: 0 10px;
          }
        }
      }

      #add-container {
        background-color: #ffd400;
        grid-area: "copyright";
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(10, 20px);
        grid-column-gap: 20px;

        p {
          color: #000;
          justify-self: center;
        }

        p:nth-of-type(1) {
          grid-column: 1 / 2;
          grid-row: 6 / 7;
          font-size: 0.8em;
        }

        p:nth-of-type(2) {
          grid-column: 1 / 2;
          grid-row: 7 / 8;
          font-size: 0.8em;
        }

        p:nth-of-type(3) {
          grid-column: 1 / 2;
          grid-row: 8 / 9;
          font-size: 0.8em;
        }

        p:nth-of-type(4) {
          grid-column: 1 / 2;
          grid-row: 9 / 10;
          font-size: 0.8em;
        }

        p:nth-of-type(5) {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          font-size: 1em;
          font-weight: bold;
          justify-self: center;
        }

        p:nth-of-type(6) {
          grid-column: 1 / 2;
          grid-row: 3 / 4;
          font-size: 1em;
          font-weight: bold;
          justify-self: center;
        }

        hr {
          margin: 10px 0;
          grid-column: 1 / 2;
          grid-row: 5 / 6;
          width: 50%;
          justify-self: center;
          display: none;
        }
      }
    }
  }
}
</style>
