import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";

function About() {
  return (
    <div class="about">
      <title>Donate to Fight COVID-19</title>
      <div class="backstory">
        <br />
        <h1>A Message from Our Team</h1>
        <br />
        <p>
          When Cornell cancelled classes on Friday, March 13 because of
          coronavirus, I was in disbelief. My friends were still lounging
          outside in the sun, inviting me to join their picnic and celebrate the
          weekend. It was too peaceful, too sunny for a global pandemic to be
          plaguing our world.
        </p>{" "}
        <br />
        <p>
          In 48 hours, I was back in Manila. I cried multiple times on the way
          home, shocked and frustrated and overwhelmed that everything had
          changed so quickly. My luggages came out in 2 minutes. I got through
          the airport in 10. I got home in 15. I couldn’t even celebrate this
          efficiency... something was really, really wrong. This was not Manila.
          This was not the overpopulated, bustling city that honked and beeped
          between jeeps. Millions of Filipinos who once flooded the overcrowded
          streets were gone, banished from the streets where they made their
          income. Very quickly I felt guilt. Helpless.
        </p>{" "}
        <br />
        <p>
          For those of us who have the privilege of virtual learning, housing,
          and entertainment, I urge you to do something to help – it can be as
          small as donating $5 to a hospital or sharing this website with your
          friends and family so everyone realizes they are able to do something.
          In fact you, right now, are gifted to be able to access this website
          from a sheltered place. We are not powerless – we are powerful,
          especially from the quarantines of our rooms. Let’s do our part to
          fight COVID-19 and join the virtual frontlines together.{" "}
          <span role="img" aria-label="heart">
            &#x1f9e1;
          </span>
          <span role="img" aria-label="fistbump">
            &#x1f44a;
          </span>
          <span role="img" aria-label="earth">
            &#x1F30F;
          </span>
        </p>
        <br />
        <p>– Katie Tracy</p>
      </div>
      <br />
      <br />
      <br />

      <div class="team">
        <h1>Our Team</h1>
        <br />
        <div class="team-grid">
          <div class="person go" id="person">
            <img src="img/go.png" alt="" />
            <h2 class="name"> Katie Tracy </h2>
            <h4 class="role"> Founder, Project Manager </h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/alohakatiex/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://www.facebook.com/AlohaKatieX/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineFacebook size="2.1em" />
              </a>
              <a
                href="https://twitter.com/alohakatiex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FiTwitter size="2em" />
              </a>
              <a
                href="https://www.youtube.com/user/alohakatiex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineYoutube size="2.2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/katie-tracy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
            </div>
          </div>
          <div class="person li" id="person">
            <img src="img/li.png" alt="" />
            <h2 class="name"> Katie Li </h2>
            <h4 class="role"> Design, Project Manager</h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/ykatieli/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/ykatieli/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
              <a
                href="https://ykatieli.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GoBrowser size="2em" />
              </a>
            </div>
          </div>
          <div class="person cao" id="person">
            <img src="img/cao.png" alt="" />
            <h2 class="name"> Michael Cao </h2>
            <h4 class="role"> Development, Project Manager</h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/mikexcao/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/michaelcao18"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
              <a
                href="https://michaelcao.tech/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GoBrowser size="2em" />
              </a>
            </div>
          </div>
          <div class="person he" id="person">
            <img src="img/he.png" alt="" />
            <h2 class="name"> Jack He </h2>
            <h4 class="role"> Development </h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/jack_he2001/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/jack-he-845587161/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9xFO-llZ2ontatfj9LtLxw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineYoutube size="2.2em" />
              </a>
              <a href="https://jackhe.codes/">
                <GoBrowser size="2em" />
              </a>
            </div>
          </div>
          <div class="person yick" id="person">
            <img src="img/yick.png" alt="" />
            <h2 class="name"> Allison Yick </h2>
            <h4 class="role"> Design </h4>
            <div class="socials">
              <a
                href="https://www.linkedin.com/in/allisonyick/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
              <a
                href="https://allisonyick.myportfolio.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GoBrowser size="2em" />
              </a>
            </div>
          </div>
          <div class="person dhingra" id="person">
            <img src="img/dhingra.png" alt="" />
            <h2 class="name"> Mira Dhingra </h2>
            <h4 class="role"> Design </h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/blurrymira/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/miradhingra/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineLinkedin size="2.1em" />
              </a>
              <a
                href="https://miradhingra.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GoBrowser size="2em" />
              </a>
            </div>
          </div>
          <div class="person syquia" id="person">
            <img src="img/syquia.png" alt="" />
            <h2 class="name"> Sancho Syquia </h2>
            <h4 class="role"> Development </h4>
            <div class="socials">
              <a
                href="https://www.instagram.com/sancho.syquia/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                href="https://github.com/Deadify"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineGithub size="2.1em" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="youtube">
        <h1>How We Met</h1>
        <br />
        <div class="video">
          <iframe
            title="website-video"
            src="https://www.youtube.com/embed/ib2tSDDWO_w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <br />
        </div>
        <p>
          On April 4, I uploaded a video called “I coded a website to fight
          COVID-19. but I need YOUR help.” on my YouTube channel, where I
          designed and developed a website in 24 hours using HTML/CSS. The goal
          was to launch the website, but more importantly, find like-minded
          quarantined teens who wanted to help me continue this project.
          Thankfully, these wonderful people reached out to help and we
          officially became a team. We are students from all over the world who
          have never met in person, but our goal of contributing to COVID-19
          efforts has united us through weekly Zoom calls and a Slack workspace.
          I’m so grateful to everyone else who shared this website, suggested a
          donation fund, or emailed me feedback. If you have more ideas, please
          share them with us{" "}
          <Link className="nav-link" to="/ideas">
            here
          </Link>
          !
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
