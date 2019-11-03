<template>
  <div id="contact-container">
    <header>
      <h1>get in touch</h1>
      <p>
        Do you want to know about our brands? Do you have any feedback regarding
        our service or our products? Or perhaps you are interested in a
        partnership with us. <br />
        We are here to help and are always happy to hear from you. Drop us a
        line and we will get back to you as soon as possible.
      </p>
    </header>
    <main>
      <div class="form-container">
        <form
          action="https://mailthis.to/Beside Group"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="_subject"
            value="Query from Beside Website"
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
            <input type="hidden" name="_honeypot" value="" />
            <input
              type="hidden"
              name="_confirmation"
              value="Thank you for contacting us.  We will get back to you as soon as possible."
            />
            <!-- <input
              type="hidden"
              name="_after"
              value="https://www.besidegroup.com/"
            /> -->
            <select name="Subject" class="form-fields">
              <option value="none" selected disabled>Choose a subject</option>
              <option value="general">General Inquiries</option>
              <option value="product">Product Feedback</option>
              <option value="service">Customer Service Feedback</option>
              <!-- <option value="business">Career Opportunities</option> -->
              <option value="business">Business Opportunities</option>
            </select>
          </div>
          <!-- <input
            type="file"
            name="File"
            placeholder="Attachments (optional)"
            id="fileName"
            class="form-fields"
          /> -->
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
        </form>
      </div>

      <div id="beside-ho">
        <img
          src="../assets/img/locations/HO-JA.jpg"
          alt="Beside Head Office UAE"
        />
        <div class="ho-info">
          <p>Beside FZE</p>
          <p>Street N302, Jebel Ali Free Zone North</p>
          <p>PO Box 61237</p>
          <p>Dubai, UAE</p>
          <hr />
          <p>
            <a href="https://goo.gl/maps/4SBmrED1zxVmht1HA" target="_blank"
              >Find us in Google Maps</a
            >
          </p>
          <hr />
          <p>info@besidegroup.com</p>
          <p>+971 4 8817094</p>
        </div>
      </div>
      <div id="beside-ho">
        <img
          src="../assets/img/locations/HO-RIYADH.jpg"
          alt="Beside Head Office KSA"
        />
        <div class="ho-info">
          <p>Beside Trading Co. LTD</p>
          <p>Al Oula Building, 5th Floor</p>
          <p>King Fahd Road</p>
          <p>Riyadh, KSA</p>
          <hr />
          <p>
            <a href="https://goo.gl/maps/igEPDD5C9jXKeqZF8" target="_blank"
              >Find us in Google Maps</a
            >
          </p>
          <hr />
          <p>info@besidegroup.com</p>
          <p>+966 11 456 5666</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#contact-container {
  padding-top: 50px;
  min-height: 100vh;

  h1 {
    font-size: 1em;
    margin: 0 20px 50px 20px;
    text-align: center;
  }

  p {
    margin: 0 20px 50px 20px;
    text-align: justify;
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);

    #beside-ho {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "img"
        "info";
      width: 90%;
      padding: 20px;
      margin-bottom: 50px;
      justify-self: center;
      background-color: #525252;

      img {
        grid-area: img;
        width: 100%;
      }

      a {
        text-decoration: none;
        color: #fff;
      }

      .ho-info {
        grid-area: info;
        margin-top: 50px;
      }
      p {
        padding: 5px 0 5px 10px;
        margin: 0;
        color: #fff;
      }

      p:last-child {
        margin-bottom: 50px;
      }

      hr {
        margin: 30px 0 30px 10px;
        width: 50%;
      }
    }

    .form-container {
      width: 100%;
      padding: 0 20px 100px 20px;
      justify-self: center;

      select {
        font-family: "Montserrat";
        font-size: 1em;
        color: #545454;
        padding: 10px;
        width: 100%;
      }

      .form-fields {
        border: 2px solid #ffd400;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        outline: none;
      }
      .form-fields:focus {
        background-color: #ffd400;
      }

      .contact-info {
        width: 100%;

        #emailId {
          width: 100%;
          margin-right: 10px;
        }

        #mobileId {
          width: 100%;
        }
      }

      .full-name {
        width: 100%;

        #fnameId {
          width: 100%;
          margin-right: 10px;
        }

        #snameId {
          width: 100%;
        }
      }

      #fileName {
        background-color: #fff;
      }

      #messageId {
        width: 100%;
      }

      .button-container {
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
    }
  }
}

@media only screen and (min-device-width: 1279px) {
  #contact-container {
    padding-top: 95px;
    min-height: 100vh;

    h1 {
      font-size: 2em;
      margin: 0 0 50px 50px;
      text-align: left;
    }

    p {
      margin: 0 0 50px 50px;
      text-align: left;
    }

    main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, min-content);

      #beside-ho {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "info img";
        width: 80%;
        padding: 20px;
        margin-bottom: 50px;
        justify-self: center;
        background-color: #525252;

        img {
          grid-area: img;
          width: 100%;
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        .ho-info {
          grid-area: info;
        }
        p {
          padding: 10px 0 10px 50px;
          margin: 0;
          color: #fff;
        }

        hr {
          margin: 30px 0 30px 50px;
          width: 50%;
        }
      }

      .form-container {
        width: 50%;
        padding: 0 20px 100px 20px;
        justify-self: center;

        select {
          font-family: "Montserrat";
          font-size: 1em;
          color: #545454;
          padding: 10px;
          width: 100%;
        }

        .form-fields {
          border: 2px solid #ffd400;
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          outline: none;
        }
        .form-fields:focus {
          background-color: #ffd400;
        }

        .contact-info {
          width: 100%;

          #emailId {
            width: 50%;
            margin-right: 10px;
          }

          #mobileId {
            width: calc(50% - 10px);
          }
        }

        .full-name {
          width: 100%;

          #fnameId {
            width: 50%;
            margin-right: 10px;
          }

          #snameId {
            width: calc(50% - 10px);
          }
        }

        #messageId {
          width: 100%;
        }

        .button-container {
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
      }
    }
  }
}
</style>
