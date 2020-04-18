import React from "react";
import "./Home.css";
import { Event } from "../tracking";
import db from '../../backend/firebase.js'
import { render } from "@testing-library/react";


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
      {props.list_of_links.map((link) => {
        return <Link url={link.url} name={link.name} />;
      })}
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
      middleEast: []
  }

  componentDidMount() {
    db.collection('all_continents').get().then( snapshot => {

      var GLOBAL2 = []
      var ASIA2 = []
      var EUROPE2 = []
      var NORTH_AMERICA2 = []
      var CENTRAL_AMERICA2 = []
      var SOUTH_AMERICA2 = []
      var AFRICA2 = []
      var OCEANIA2 = []
      var MIDDLE_EAST2 = []

      snapshot.forEach( doc => {
        const data = doc.data()
        switch (data.group) {
          case "Global":
            GLOBAL2 = data.links
            break
          case "Asia":
            ASIA2 = data.links
            break
          case "Europe":
            EUROPE2 = data.links
            break
          case "North_America":
            NORTH_AMERICA2 = data.links
            break
          case "South_America":
            SOUTH_AMERICA2 = data.links
            break
          case "Central_America":
            CENTRAL_AMERICA2 = data.links
          case "Africa":
            AFRICA2 = data.links
            break
          case "Oceania":
            OCEANIA2 = data.links
            break
          default:
            // Middle_East
            MIDDLE_EAST2 = data.links
        }
        console.log(data)
      })

      this.setState({
        global: GLOBAL2,
        asia: ASIA2,
        europe: EUROPE2,
        northAmerica: NORTH_AMERICA2,
        centralAmerica: CENTRAL_AMERICA2,
        southAmerica: SOUTH_AMERICA2,
        africa: AFRICA2,
        oceania: OCEANIA2,
        middleEast: MIDDLE_EAST2
      })

  }).catch( error => {console.log(error)})}

  render() {
    return (
      <div className="home">
        <title>Donate to Fight COVID-19</title>
        <div class="grid">
          <Box name="Global" list_of_links={this.state.global} className="global" />
          <Box name="Asia" list_of_links={this.state.asia} className="asia" />
          <Box name="Europe" list_of_links={this.state.europe} className="europe" />
  
          <NorthAmerica name="North America" list_of_links={this.state.northAmerica} className="northamerica" />
          <Box name="Central America" list_of_links={this.state.centralAmerica} className="centralamerica" />
          <Box name="South America" list_of_links={this.state.southAmerica} className="southamerica" />
  
          <Box name="Africa" list_of_links={this.state.africa} className="africa" />
          <Box name="Oceania" list_of_links={this.state.oceania} className="oceania" />
          <Box name="Middle East" list_of_links={this.state.middleEast} className="middleeast" />
        </div>
      </div>
    );
  }
}

export default Home;
