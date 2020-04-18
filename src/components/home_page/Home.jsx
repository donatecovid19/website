import React from "react";
import "./Home.css";
import { Event } from "../tracking";
import db from '../../backend/firebase.js'
import { render } from "@testing-library/react";


// TODO: update the database with the information in the dummy constants here::: 

const ASIA = [
  { name: "Afghanistan", url: "http://bit.ly/donateAFcovid19" },
  { name: "China", url: "http://bit.ly/donateCNcovid19" },
  { name: "Hong Kong (Red Cross)", url: "http://bit.ly/donateHKcovid19" },
  { name: "Hong Kong (Save the Children)", url: "http://bit.ly/donateSTCcovid19" },
  { name: "Japan", url: "https://www.plan-international.jp/news/info/20200331_21914/" },
  { name: "India (Give)", url: "http://bit.ly/donateGIcovid19" },
  { name: "India (Rapid Response)", url: "http://bit.ly/donateINDcovid19" },
  { name: "Indonesia (Dompet Dhuafa)", url: "https://donasi.dompetdhuafa.org/bersamalawancorona/" },
  { name: "Indonesia (Unicef Indonesia)", url: "http://bit.ly/donateINcovid19" },
  { name: "Korea", url: "https://www.plankorea.or.kr/news/event/view/5043" },
  { name: "Malayasia (Kitajagakita)", url: "https://kitajagakita.com/pages/submit-an-initiative-for-listing" },
  { name: "Malaysia (Masterlist)", url: "http://bit.ly/donateMYcovid2019" },
  { name: "Malaysia (MERCY)", url: "https://www.mercy.org.my/donate/wakaf-covid19/" },
  { name: "Pakistan", url: "http://bit.ly/donatePKcovid19" },
  { name: "Philippines (Kaya Natin)", url: "http://bit.ly/donatePHcovid19" },
  { name: "Philippines (Masterlist)", url: "http://bit.ly/donatePHIcovid19" },
  { name: "Philippines (Project Pearls)", url: "https://www.projectpearls.org/donate/" },
  { name: "Singapore", url: "http://bit.ly/donateSGcovid19" },
];

const EUROPE = [
  { name: "Belgium", url: "https://donate.kbs-frb.be/Covid-19/~mon-don?_cv=1" },
  { name: "Denmark", url: "https://planbornefonden.dk/corona/" },
  { name: "Finland", url: "https://lahjoita.plan.fi/lahjoitus" },
  { name: "France", url: "https://formulaire.plan-international.fr/covid19/~mon-don" },
  { name: "Germany (Red Cross)", url: "http://bit.ly/donateDEcovid19" },
  { name: "Germany (Maecenata)", url: "https://web.maecenata.eu/spenden?fb_item_id_fix=27166/" },
  { name: "Italy (Red Cross)", url: "http://bit.ly/donateITcovid19" },
  { name: "Italy (Protezione Civile)", url: "http://www.protezionecivile.gov.it/attivita-rischi/rischio-sanitario/emergenze/coronavirus" },
  { name: "Italy (Regione del Veneto)", url: "https://www.regione.veneto.it/article-detail?articleId=4335623" },
  { name: "Netherlands (Red Cross)", url: "http://bit.ly/donateNLcovid19" },
  { name: "Netherlands (Plan International)", url: "https://www.planinternational.nl/forms/stop-verspreiding-coronavirus" },
  { name: "Norway", url: "https://www.facebook.com/donate/2531936430404492/" },
  { name: "Poland", url: "http://bit.ly/donatePLcovid19" },
  { name: "Portugal (Go Parity)", url: "http://bit.ly/donatePTGcovid19" },
  { name: "Portugal (Red Cross)", url: "http://bit.ly/donatePTcovid19" },
  { name: "Slovenia", url: "http://bit.ly/donateSIcovid19" },
  { name: "Spain", url: "http://bit.ly/donateEScovid19" },
  { name: "Sweden", url: "https://plansverige.org/skank-en-gava/" },
  { name: "UK", url: "http://bit.ly/donateUKcovid19" },
];

// TODO: Separate USA and Canada
const NORTH_AMERICA = [
  { name: "Atlanta, GA (Emory)", url: "http://bit.ly/donateEMcovid19" },
  { name: "Atlanta, GA (Food Bank)", url: "http://bit.ly/donateATLcovid19" },
  { name: "Austin, TX", url: "http://bit.ly/donateATXcovid19" },
  { name: "Boone, IA", url: "https://www.redcross.org/donate/donation.html/?donamt=0" },
  { name: "Chicago, IL (Chicago's Food Bank)", url: "http://bit.ly/donateCILcovid19" },
  { name: "Chicago, IL (Community Fund)", url: "https://www.chicagocovid19responsefund.org/" },
  { name: "Chicago, IL (Feeding America)", url: "https://www.feedingamerica.org/" },
  { name: "Houston, TX", url: "http://bit.ly/donateHTXcovid19" },
  { name: "Illinois", url: "http://bit.ly/donateNILcovid19" },
  { name: "Lexington, KY", url: "https://bgcf.givingfuel.com/coronavirus" },
  { name: "Los Angeles, CA", url: "http://bit.ly/donateLAcovid19" },
  { name: "New York City, NY (CityMeals)", url: "http://bit.ly/donateNYcovid19" },
  { name: "New York City, NY (Mount Sinai)", url: "https://giving.mountsinai.org/site/Donation2;jsessionid=00000000.app216a?idb=1183495007&df_id=2021&mfc_pref=T&2021.donation=form1&NONCE_TOKEN=7E563239AF1564122679453358A75C21&utm_campaign=flowcodecovidgift&utm_source=flowcode&set.custom.appeal1=COVIDFLOWCODE&utm_medium=flowcode" },
  { name: "Pittsburgh, PA", url: "http://bit.ly/donatePITcovid19" },
  { name: "San Francisco, CA", url: "https://sf.gov/give-city-respond-covid-19" },
  { name: "Seattle, WA (University of Washington)", url: "http://bit.ly/donateWAcovid19" },
  { name: "Seattle, WA (Seattle Foundation)", url: "http://bit.ly/donateUWcovid19" },
  { name: "Washington, D.C.", url: "https://www.northwestharvest.org/" },
  { name: "Canada (Red Cross)", url: "http://bit.ly/donateCNDcovid19", isCanada: true },
  { name: "Canada (CanadaHelps)", url: "https://www.canadahelps.org/en/cause-funds/covid-19-community-care-fund/", isCanada: true },
];

const CENTRAL_AMERICA = [
  { name: "Aruba", url: "http://bit.ly/donateARcovid19" },
  { name: "Dominican Republic", url: "http://bit.ly/donateDOcovid19" },
];

const SOUTH_AMERICA = [
  { name: "Brazil (BSocial)", url: "http://bit.ly/donateBRcovid19" },
  { name: "Brazil (Fiocruz)", url: "http://bit.ly/donateFIcovid19" },
  { name: "Brazil (UFRGS)", url: "http://bit.ly/donateUFcovid19" },
  { name: "Colombia", url: "https://www.bancosdealimentosdecolombia.com/" },
];

const AFRICA = [{ name: "Uganda", url: "http://bit.ly/donateUGcovid19" }];

const OCEANIA = [{ name: "Australia", url: "http://bit.ly/donateAUScovid19" }];

const MIDDLE_EAST = [{ name: "UAE", url: "http://bit.ly/donateAEcovid19" }];

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
          <Box name="Asia" list_of_links={ASIA} className="asia" />
          <Box name="Europe" list_of_links={EUROPE} className="europe" />
  
          <NorthAmerica name="North America" list_of_links={NORTH_AMERICA} className="northamerica" />
          <Box name="Central America" list_of_links={CENTRAL_AMERICA} className="centralamerica" />
          <Box name="South America" list_of_links={SOUTH_AMERICA} className="southamerica" />
  
          <Box name="Africa" list_of_links={AFRICA} className="africa" />
          <Box name="Oceania" list_of_links={OCEANIA} className="oceania" />
          <Box name="Middle East" list_of_links={MIDDLE_EAST} className="middleeast" />
        </div>
      </div>
    );
  }
}

export default Home;
