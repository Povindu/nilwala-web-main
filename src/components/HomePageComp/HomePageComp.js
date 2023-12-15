import React from "react";
import "./HomePageComp.css";
import {Link} from "react-router-dom";

export default function HomePageComp() {
  return (
    <div className="hcontain">
      <div className="homeContain">

        <div className="nav-bar-2">
          
        <nav
          className=""
          role="navigation"
        >
          <ul className="site-menu">


            <li className="bar bar-nilwala-night">
              <Link to='/nilwalanight23' className='button'>Nilwala Night Tickets 🎟️</Link>
            </li>
            <li className="bar">
            <Link to='/chronicle' className='button'>Nilwala Chronicle</Link>
            </li>
            {/* <li className="bar">
            <Link to='/directory' className='button'>Club Directory</Link>
            </li> */}
            
            {/* <li className="bar">
              <a href="index.html">Sign In</a>
            </li> */}
          </ul>
        </nav>
      </div>

        <div className="hero">
          <div className="hero-text">
            <h2 className="welcome">WELCOME TO</h2>
            <h1 className="club">Leo Club of</h1>
            <h1 className="mtnil">Matara Nilwala</h1>
          </div>
          <div className="hero-shadow">
            <h1 className="club1">Leo Club of</h1>
            <h1 className="mtnil1">Matara Nilwala</h1>
          </div>
          <h3 className="tagline">#StrongerTogether</h3>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>

          <div className="body-content">
            <div className="gradient-border club-text">
              Established in 2019, we have embarked on a remarkable journey of
              service and compassion. Over the years, we have successfully
              completed 200+ projects, leaving a lasting impact on the society
              we serve.
              <br />
              <br />
              Our dedicated club members are driven by the common goal of
              uplifting our community's standards and making a positive
              difference. We actively address the needs of the less fortunate,
              promote education, empower youth, and foster unity among our
              fellow citizens.
            </div>
            <div>
              <img
                className="logo1"
                title="Club Logo"
                src={require("../../assets/WebImages/club_logo.png")}
                alt="LOGO"
              />
            </div>
          </div>

          {/* <h2 className="welcome1">Significant Projects</h2>

          <div className="body1">
            <div className="wrapper">
              <i
                id="left"
                className="fa-solid fa-angle-left"
                style={{ textDecoration: "none" }}
              >
                &lt;
              </i>
              <ul className="carousel">
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/namastheNilwala.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Namasthe Nilwala</h2>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/recyleLifecycle.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Recycle for a Lifecycle</h2>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/kingsCombat.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Kings Combat</h2>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/shuttleStrike.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Shuttle Strike</h2>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/nilwalaNight.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Nilwala Night</h2>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      title="Project Photos"
                      src={require("../../assets/WebImages/projects/englishHunt.jpg")}
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>English Hunt</h2>
                </li>
              </ul>
              <i id="right" className="fa-solid fa-angle-right">
                &gt;
              </i>
            </div>
          </div>  */}
        </div>

        {/* <h2 className="welcome2">NILWALA<br/>CHRONICLE</h2> 
    <div className="gradient-border" id="box1">
      <div><img className="logo1 logo9" title="Club Logo" src={require("../../assets/WebImages/nc.jpg")} alt="LOGO"/></div>
      <div className="gradient-border2" id="box2">
        <p>The Nilwala Chronicle is the monthly newsletter of Leo Club of Matara Nilwala showcases all the recent updates of the club and its members to the world</p>
        <br />
        <div className="xbutton"><a href="chronicle.html">View Chronicle</a></div>
      </div>
    </div>  */}

      <footer className="xv">

      <svg viewBox="0 0 120 28">
        <defs> 
          <mask id="xxx">
            <circle cx={7} cy={12} r={40} fill="#fff" />
          </mask>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={2} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="
             1 0 0 0 0  
             0 1 0 0 0  
             0 0 1 0 0  
             0 0 0 13 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
        </defs> 
        <use id="wave3" className="wave" xlinkHref="#wave" x={0} y={-2} /> 
        <use id="wave2" className="wave" xlinkHref="#wave" x={0} y={0} />
        <g className="gooeff">
          <circle className="drop drop1" cx={20} cy={2} r="1.8" />
          <circle className="drop drop2" cx={25} cy="2.5" r="1.5" />
          <circle className="drop drop3" cx={16} cy="2.8" r="1.2" />
          <use id="wave1" className="wave" xlinkHref="#wave" x={0} y={1} />
        </g>
      </svg>

      <div className="footlogo">
        <a aria-label="Facebook Page of LC of Matara Nilwala" href="https://web.facebook.com/nilwalaleos"> <img title="Logo" alt="logo" src={require("../../assets/WebImages/circum_facebook.png")} /></a>
        <a aria-label="Twitter Handle of LC of Matara Nilwala" href="https://twitter.com/LNilwala"><img title="Logo" alt="logo" src={require("../../assets/WebImages/teenyicons_twitter-outline.png")} /></a>
        <a aria-label="Instagram Page of LC of Matara Nilwala" href="https://www.instagram.com/leos_of_matara_nilwala"><img title="Logo" alt="logo" src={require("../../assets/WebImages/circum_instagram.png")} /></a>
        <a aria-label="LinkedIn Page of LC of Matara Nilwala" href="https://lk.linkedin.com/company/leo-club-of-matara-nilwala"><img title="Logo" alt="logo" src={require("../../assets/WebImages/circum_linkedin.png")} /></a>
      </div>


      <div className="footer-text">All Rights Reserved at Leo Club of Matara Nilwala. <br />   Made with ♡ by Nilwala Leos </div>
    
    </footer>

        <div className="anime-container"></div>
      </div>
    </div>
  );
}
