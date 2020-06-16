import React from "react";
import "./Home.css";
import { Event } from "../tracking";
import db from "../../backend/firebase.js";
import alphabetSort from "../AlphabetSort";
import Loader from "../cool-stuff/Loader";
// import { render } from "@testing-library/react"; // why is this imported?

// TODO: update the database with the information in the dummy constants :::

const Link = (props) => {
  function handleClick() {
    Event("Donation Link Clicked", props.name, "HOME_PAGE");
  }

  // props: String url, String name
  return (
    <p>
      <a
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleClick}
      >
        {props.name}
      </a>
    </p>
  );
};

const Box = (props) => {
  // props: String name, List<Link> list_of_links, String className
  return (
    <div className={`box ${props.className}`} id="box">
      <h1> {props.name} </h1>
      {props.isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {props.list_of_links.map((link) => {
            return <Link url={link.url} name={link.name} />;
          })}
        </React.Fragment>
      )}
    </div>
  );
};

const NorthAmerica = (props) => {
  // props: String name, List<Link> list_of_links, String className

  var allCanadaLinks = [];
  var allUsaLinks = [];

  for (var i = 0; i < props.list_of_links.length; ++i) {
    if (props.list_of_links[i].isCanada) {
      // console.log(props.list_of_links[i])
      allCanadaLinks.push(props.list_of_links[i]);
    } else {
      // console.log(props.list_of_links[i])
      allUsaLinks.push(props.list_of_links[i]);
    }
  }

  return (
    <div className={`box ${props.className}`} id="box">
      <h1> {props.name} </h1>
      {props.isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p>
            {" "}
            <strong> USA: </strong>
          </p>
          {allUsaLinks.map((link) => {
            return <Link url={link.url} name={link.name} />;
          })}
          <p>
            {" "}
            <strong> Canada: </strong>
          </p>
          {allCanadaLinks.map((link) => {
            return <Link url={link.url} name={link.name} />;
          })}
        </React.Fragment>
      )}
    </div>
  );
};

class Home extends React.Component {
  state = {
    global: [],
    asia: [],
    europe: [],
    northAmerica: [],
    centralAmerica: [],
    southAmerica: [],
    africa: [],
    oceania: [],
    middleEast: [],
    isLoading: true,
  };

  componentDidMount() {
    db.collection("all_continents")
      .get()
      .then((snapshot) => {
        var GLOBAL2 = [];
        var ASIA2 = [];
        var EUROPE2 = [];
        var NORTH_AMERICA2 = [];
        var CENTRAL_AMERICA2 = [];
        var SOUTH_AMERICA2 = [];
        var AFRICA2 = [];
        var OCEANIA2 = [];
        var MIDDLE_EAST2 = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          switch (data.group) {
            case "Global":
              GLOBAL2 = alphabetSort(data.links);
              break;
            case "Asia":
              ASIA2 = alphabetSort(data.links);
              break;
            case "Europe":
              EUROPE2 = alphabetSort(data.links);
              break;
            case "North_America":
              NORTH_AMERICA2 = alphabetSort(data.links);
              break;
            case "South_America":
              SOUTH_AMERICA2 = alphabetSort(data.links);
              break;
            case "Central_America":
              CENTRAL_AMERICA2 = alphabetSort(data.links);
              break;
            case "Africa":
              AFRICA2 = alphabetSort(data.links);
              break;
            case "Oceania":
              OCEANIA2 = alphabetSort(data.links);
              break;
            default:
              // Middle_East
              MIDDLE_EAST2 = alphabetSort(data.links);
          }
          console.log(data);
        });

        this.setState({
          global: GLOBAL2,
          asia: ASIA2,
          europe: EUROPE2,
          northAmerica: NORTH_AMERICA2,
          centralAmerica: CENTRAL_AMERICA2,
          southAmerica: SOUTH_AMERICA2,
          africa: AFRICA2,
          oceania: OCEANIA2,
          middleEast: MIDDLE_EAST2,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="home">
        <title>Donate to Fight COVID-19</title>

        <div id="mobile" class="mobile">
          <div class="welcome">
            <h2>Welcome!</h2>
            <h2>Are you new here?</h2>
          </div>
          <p>
            <span class="color">Links to donations sites</span> are sorted by
            region, and then country!
          </p>
          <p>
            <div class="color">
              Do you know an organization that’s fighting COVID-19?
            </div>
            <div>
              Share the link we can donate to and we’ll add it to our website!
            </div>
          </p>
          <p>
            <div class="color">Help us improve our website!</div>
            <div>
              Send us any ideas or feedback so our team can look into it.
            </div>
          </p>
          <div class="color">Stay updated with the latest information!</div> We
          have additional resources and ways to help fight COVID-19!
          <br />
          <br />
          <a href="#" class="close">
            Got it, thanks!
          </a>
          <br />
        </div>
        <a href="#" class="close-popup"></a>

        <div className="tour">
          <a href="#popup" class="btn">
            Take a quick tour >
          </a>

          <div id="popup" class="popup">
            <h2>Welcome!</h2>
            <p>
              Are you new here? Let me take you on a short tour of the site!
            </p>
            <br />
            <a href="#first" class="next">
              Let's Go
            </a>
            <br />
            <br />
            <a href="#" class="close">
              Got it, thanks!
            </a>
          </div>
          <a href="#" class="close-popup"></a>

          <div id="first" class="step">
            <div class="page">
              <div class="line"></div>
              <div class="line red"></div>
              <div class="line red"></div>
              <div class="line red"></div>
            </div>
            <p>
              Links to donations sites are sorted here by region, and then by
              country!
            </p>
            <a href="#second" class="next">
              Next
            </a>
            <br />
            <br />
            <a href="#" class="close">
              Got it, thanks!
            </a>
          </div>
          <a href="#" class="close-popup"></a>

          <div id="second" class="step">
            <div class="page">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line red"></div>
              <div class="line red"></div>
            </div>
            <p>
              Do you know an organization that’s fighting COVID-19? Share the
              link we can donate to and we’ll add it to our website!
            </p>
            <a href="#third" class="next">
              Next
            </a>
            <br />
            <br />
            <a href="#" class="close">
              Got it, thanks!
            </a>
          </div>
          <a href="#" class="close-popup"></a>

          <div id="third" class="step">
            <div class="page">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line red"></div>
            </div>
            <p>
              Help us improve our website! Send us any ideas or feedback so our
              team can look into it.
            </p>
            <a href="#fourth" class="next">
              Next
            </a>
            <br />
            <br />
            <a href="#" class="close">
              Got it, thanks!
            </a>
          </div>
          <a href="#" class="close-popup"></a>

          <div id="fourth" class="step">
            <div class="page">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <p>
              Stay updated with the latest information! Here are additional
              resources and ways to help fight COVID-19.
            </p>
            <a href="#" class="next">
              That's it!
            </a>
            <br />
            <br />
          </div>
          <a href="#" class="close-popup"></a>
        </div>

        <div class="grid">
          <Box
            name="Global"
            list_of_links={this.state.global}
            className="global"
            isLoading={this.state.isLoading}
          />
          <Box
            name="Asia"
            list_of_links={this.state.asia}
            className="asia"
            isLoading={this.state.isLoading}
          />
          <Box
            name="Europe"
            list_of_links={this.state.europe}
            className="europe"
            isLoading={this.state.isLoading}
          />

          <NorthAmerica
            name="North America"
            list_of_links={this.state.northAmerica}
            className="northamerica"
            isLoading={this.state.isLoading}
          />
          <Box
            name="Central America"
            list_of_links={this.state.centralAmerica}
            className="centralamerica"
            isLoading={this.state.isLoading}
          />
          <Box
            name="South America"
            list_of_links={this.state.southAmerica}
            className="southamerica"
            isLoading={this.state.isLoading}
          />

          <Box
            name="Africa"
            list_of_links={this.state.africa}
            className="africa"
            isLoading={this.state.isLoading}
          />
          <Box
            name="Oceania"
            list_of_links={this.state.oceania}
            className="oceania"
            isLoading={this.state.isLoading}
          />
          <Box
            name="Middle East"
            list_of_links={this.state.middleEast}
            className="middleeast"
            isLoading={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}

export default Home;
