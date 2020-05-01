import React from "react";
import "./Form.css";

function Home() {
  return (
    <div class="donation_form">
      <title>Donate to Fight COVID-19</title>
      <header class="form">
        <h1>Share any ideas to help us improve our website!</h1>
      </header>
      <form>
        <div class="group">
          <label id="ideas" for="ideas">
            What's up?
          </label>
          <input
            type="text"
            name="country"
            class="field"
            placeholder="Enter any idea"
          />
        </div>

        <div class="group">
          <label id="contact" for="contact">
            Contact
          </label>
          <p class="desc">
            If possible, please leave your email, Instagram, or any contact
            method for us to learn more about your ideas!
          </p>
          <input
            type="text"
            name="contact"
            class="field"
            placeholder="Enter a contact method"
          />
        </div>

        <div class="thanks">
          <h2>Thanks for helping us fight COVID-19!</h2>
        </div>
        <br />

        <div class="group">
          <button type="submit" class="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
