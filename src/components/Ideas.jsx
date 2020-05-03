import React from "react";
import db from '../backend/firebase.js'
import "./Form.css";

const uuidv4 = require("uuid/v4")



function Home() {

  const regionRef = React.createRef()
  const countryRef = React.createRef()
  const organizationRef = React.createRef()
  const linkRef = React.createRef()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    // access input fields: ...ref.current.value
    // post data to firebase firestore

    const uniqueId = countryRef.current.value + "_" + uuidv4()
    db.collection("donation-links").doc(uniqueId).set({
      country: countryRef.current.value,
      url: linkRef.current.value,
      organization: organizationRef.current.value,
      region: regionRef.current.value
    }).then(() => {
      console.log("success")
      alert("SUCCESS! Your suggestion is noted!")
      window.location.reload()
    }).catch((error) => {
      alert(error)
      window.location.reload()
    })
  }
  
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
