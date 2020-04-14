import React from "react";
import "./Home.css";
import { Event } from "../tracking";

// Template: {name:"", url:'http://bit.ly/donateFIXcovid19'},
// TODO: Mobile responsiveness

const GLOBAL = [
    { name: "Children's Hunger Fund", url: "https://bit.ly/donateCHFcovid19" },
    { name: "Unicef", url: "https://uni.cf/2V8fODA" },
    { name: "United Nations", url: "https://bit.ly/donateUNcovid19" },
    { name: "World Health Organization", url: "http://bit.ly/donateWHO" },
];

const ASIA = [
    { name: "Afghanistan", url: "http://bit.ly/donateAFcovid19" },
    { name: "China", url: "http://bit.ly/donateCNcovid19" },
    { name: "Hong Kong (Red Cross)", url: "http://bit.ly/donateHKcovid19" },
    {
        name: "Hong Kong (Save the Children)",
        url: "http://bit.ly/donateSTCcovid19",
    },
    { name: "India (Give)", url: "http://bit.ly/donateGIcovid19" },
    { name: "India (Rapid Response)", url: "http://bit.ly/donateINDcovid19" },
    { name: "Indonesia", url: "http://bit.ly/donateINcovid19" },
    { name: "Malaysia", url: "http://bit.ly/donateMYcovid2019" },
    { name: "Pakistan", url: "http://bit.ly/donatePKcovid19" },
    { name: "Philippines", url: "http://bit.ly/donatePHcovid19" },
    { name: "Philippines (Masterlist)", url: "http://bit.ly/donatePHIcovid19" },
    { name: "Singapore", url: "http://bit.ly/donateSGcovid19" },
];

const EUROPE = [
    { name: "Germany", url: "http://bit.ly/donateDEcovid19" },
    { name: "Italy", url: "http://bit.ly/donateITcovid19" },
    { name: "Netherlands", url: "http://bit.ly/donateNLcovid19" },
    { name: "Poland", url: "http://bit.ly/donatePLcovid19" },
    { name: "Portugal (Go Parity)", url: "http://bit.ly/donatePTGcovid19" },
    { name: "Portugal (Red Cross)", url: "http://bit.ly/donatePTcovid19" },
    { name: "Slovenia", url: "http://bit.ly/donateSIcovid19" },
    { name: "Spain", url: "http://bit.ly/donateEScovid19" },
    { name: "UK", url: "http://bit.ly/donateUKcovid19" },
];

// TODO: Separate USA and Canada
const NORTH_AMERICA = [
    { name: "Atlanta, GA (Emory)", url: "http://bit.ly/donateEMcovid19" },
    { name: "Atlanta, GA (Food Bank)", url: "http://bit.ly/donateATLcovid19" },
    { name: "Austin, TX", url: "http://bit.ly/donateATXcovid19" },
    { name: "Chicago, IL", url: "http://bit.ly/donateCILcovid19" },
    { name: "Houston, TX", url: "http://bit.ly/donateHTXcovid19" },
    { name: "Illinois", url: "http://bit.ly/donateNILcovid19" },
    { name: "Los Angeles, CA", url: "http://bit.ly/donateLAcovid19" },
    { name: "New York City, NY", url: "http://bit.ly/donateNYcovid19" },
    { name: "Pittsburgh, PA", url: "http://bit.ly/donatePITcovid19" },
    {
        name: "Seattle, WA (University of Washington)",
        url: "http://bit.ly/donateWAcovid19",
    },
    {
        name: "Seattle, WA (Seattle Foundation)",
        url: "http://bit.ly/donateUWcovid19",
    },
    {
        name: "Canada (Red Cross)",
        url: "http://bit.ly/donateCNDcovid19",
        isCanada: true,
    },
    {
        name: "Canada (Fraser Valley)",
        url: "http://bit.ly/donateFVHcovid19",
        isCanada: true,
    },
];

const CENTRAL_AMERICA = [
    { name: "Aruba", url: "http://bit.ly/donateARcovid19" },
    { name: "Dominican Republic", url: "http://bit.ly/donateDOcovid19" },
];

const SOUTH_AMERICA = [
    { name: "Brazil (BSocial)", url: "http://bit.ly/donateBRcovid19" },
    { name: "Brazil (Fiocruz)", url: "http://bit.ly/donateFIcovid19" },
    { name: "Brazil (UFRGS)", url: "http://bit.ly/donateUFcovid19" },
];

const AFRICA = [{ name: "Uganda", url: "http://bit.ly/donateUGcovid19" }];

const OCEANIA = [{ name: "Australia", url: "http://bit.ly/donateAUScovid19" }];

const MIDDLE_EAST = [{ name: "UAE", url: "http://bit.ly/donateAEcovid19" }];

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <title>Donate to Fight COVID-19</title>
                <div className="grid">
                    <Box name="Global" list_of_links={GLOBAL} className="global" />

                    <Box name="Asia" list_of_links={ASIA} className="asia" />

                    <Box name="Europe" list_of_links={EUROPE} className="europe" />

                    <NorthAmerica
                        name="North America"
                        list_of_links={NORTH_AMERICA}
                        className="northamerica"
                    ></NorthAmerica>

                    <Box
                        name="Central America"
                        list_of_links={CENTRAL_AMERICA}
                        className="centralamerica"
                    />

                    <Box
                        name="South America"
                        list_of_links={SOUTH_AMERICA}
                        className="southamerica"
                    />

                    <Box name="Africa" list_of_links={AFRICA} className="africa" />

                    <Box name="Oceania" list_of_links={OCEANIA} className="oceania" />

                    <Box
                        name="Middle East"
                        list_of_links={MIDDLE_EAST}
                        className="middleeast"
                    />
                </div>
            </div>
        );
    }
}

function Link(props) {
    function handleClick() {
        console.log("The link was clicked.");
        Event("Donation Link Clicked", props.name, "HOME_PAGE");
    }

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
}

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

export default Home;
