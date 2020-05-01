import React from "react";
import "./Form.css";

function Home() {
  return (
    <div class="donation_form">
      <title>Donate to Fight COVID-19</title>
      <header class="form">
        <h1>Share how we can help your country fight COVID-19!</h1>
      </header>
      <form>
        <div class="group">
          <label id="region" for="region">
            Region
          </label>
          <select name="region" class="field" required>
            <option disabled selected value>
              Select an option
            </option>
            <option value="global">Global</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="central_america">Central America</option>
            <option value="europe">Europe</option>
            <option value="middle_east">Middle East</option>
            <option value="north_america">North America</option>
            <option value="oceania">Oceania</option>
            <option value="south_america">South America</option>
          </select>
        </div>

        <div class="group">
          <label id="country" for="country">
            Country
          </label>
          <p class="desc">Please include city/state if applicable.</p>
          <input
            type="text"
            name="country"
            class="field"
            placeholder="Enter a country"
          />
        </div>

        <div class="group">
          <label id="org" for="org">
            Organization
          </label>
          <p class="desc">Please provide the name of the organization.</p>
          <input
            type="text"
            name="org"
            class="field"
            placeholder="Enter an organization name"
          />
        </div>

        <div class="group">
          <label id="link" for="link">
            Link
          </label>
          <p class="desc">
            Please provide a direct link to a donation fund for COVID-19.
          </p>
          <input
            type="url"
            name="link"
            class="field"
            placeholder="Enter a link"
            required
          />
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
