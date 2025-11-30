import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { useCallback, useEffect, useRef, useState } from "react";

import AppCard from "./AppCard";
import Configs from "../editable-stuff/configurations.json";
import MyProducts from "./MyProducts";
import ProjectCard from "./ProjectCard";
import WorkCard from "./WorkCard";
import axios from "axios";
import fea from "../assets/fea1.png";
import ios from "../assets/ios.png";
import tictoe from "../assets/tictoe.png";

const androidappdetails = () => {
  let arr = [
    {
      img: fea,
      name: "Finite Element Analysis",
      href:
        "https://play.google.com/store/apps/details?id=my.fea.mallik.finiteelementanalysis&hl=en",
      duration: "2017",
    },
    {
      img: ios,
      name: "ios calculator",
      href:
        "https://play.google.com/store/apps/details?id=my.calculator.mallik.ioscalculator&hl=en",
      duration: "2017",
    },
    {
      img: tictoe,
      name: "tic tac toe",
      href:
        "https://play.google.com/store/apps/details?id=my.game.tictactoe&hl=en",
      duration: "2017",
    },
  ];

  return arr;
};

const workdetails = () => {
  let arr = [
    {
      duration: "2024/Aug - Till Date",
      name: "Gen Digital (nortonlifelock.com)",
      href: "https://www.nortonlifelock.com/",
      jobrole: "Senior Engineer",
      Highlights: `
        ✔ Implemented comprehensive RESTful financial APIs using Node.js, handling complex operations including transaction management, account linking, and asset tracking
        ✔ Designed and developed sophisticated financial data aggregation services, implementing advanced analytics for expense tracking, income analysis, and savings rate calculations with support for multiple time-slice views (daily/weekly/monthly) and trend analysis
        ✔ Implemented robust security measures including JWT authentication, API key validation while integrating with multiple financial services including Plaid, Equifax, and banking institutions
        ✔ Implementation of React Query for smart data fetching and caching with Centralized Redux store with optimized action creators
        ✔ Created AI chatbot for natural interaction with a complete application and able to do interactions and create, update and fetch all application details for the user
        ✔ Used Redis server for data caching and token management and jest for functional testing of the api's
        ✔ Migrated monolithic express server into server less architecture using API gateway, lambda
        Stack: Lambda, Next js, Express, Kotlin, Gemini, Api Gateway, Redis
        `,
    },
    {
      duration: "2021/May - 2024/Aug",
      name: "Brillio (Realtor.com)",
      href: "https://www.realtor.com/",
      jobrole: "Senior engineer",
      Highlights: `
        ✔ Used and Created A/B testing strategies for high traffic large scale applications
        ✔ Worked on various micro front-end applications and interconnections between them
        ✔ Used React context api for state management for micro-frontends
        ✔ Written Rest api's and GraphQL methods for micro services
        ✔ Worked on Splunk, New relic, Opsgenie for monitoring and alerting a large user application
        ✔ Responsible for pull request reviews and code quality across micro front end applications
        ✔ Worked on configuration development Strategies for fast changing ui components
        ✔ Analyzed and improved core web vitals and seo scores
        ✔ Created E2E and integration test cases for react application using playwright
        ✔ Migrated monolithic javascript application into micro front-ends using typescript
        Stack: Typescript, React, Next js, yarn, Micro front-end, Micro-services, Splunk, New relic, Playwright
        `,
    },
    {
      duration: "2020/Dec - 2021/May",
      name: "Mobinius",
      href: "https://www.mobinius.com/",
      jobrole: "Front End Developer",
      Highlights: `
        Scikraft:
        ✔ Responsible for maintaining/Bug fixing and developing UI features in scientific IOT project using react-native with Bluetooth (BLE manager)
        ✔ Implemented data flow from collecting sensor data to rendering in table and graph
        ✔ Implemented Interaction manager from react native for performance optimizations
        ✔ Extensively used react hooks and on memorization techniques
        Stack: JSX, CSS, JavaScript, React Native, Bluetooth manager, Visual studio code, NPM, Agile
        
        Neuroglee:
        ✔ Developed chat application for web app using React.js, material UI, Graph Ql with twillio
        ✔ Completely configured Twillio for instant texts, audio, video messages using WEBRTC protocol
        ✔ Implemented Video call and audio call from web using twillio platform
        ✔ Developed chat application for mobile app using React native with twillio
        ✔ Configured Twillio for video call, audio calls and instant messaging service from mobile
        ✔ Written Mutations and Query with GraphQL and implemented cache techniques with Apollo GraphQL
        Stack: React, React Native, Twillio, GraphQl, Visual studio code, Agile
        `,
    },
    {
      duration: "2018/Aug - 2020/Dec",
      name: "Bosch (Mobinius Payroll)",
      href: "https://www.mobinius.com/",
      jobrole: "Front End Developer",
      Highlights: `
        ✔ Developed react with typescript project using Webpack for an supply chain application on food tracking
        ✔ Implemented sagas with generators as middleware for redux
        ✔ Integrated google maps for food tracking, by showing routes and custom markers
        ✔ Implemented session and refresh token flow using browser storage
        ✔ Completely dockerized the application and written docker configurations
        ✔ Used google cloud platform for google maps, geo coding, directions, OAuth2 and drive services
        ✔ Worked on caching api calls using SWR (Stale while revalidating) techniques for react application
        Stack: Typescript, React, GCP, web-pack, Azure, G Maps
        `,
    },
    {
      duration: "2018/Dec - 2020/July",
      name: "Infosys",
      href: "https://www.infosys.com/",
      jobrole: "UI Full Stack Developer",
      Highlights: `
        ✔ Involved in the complete Software Development Life Cycle (SDLC) including gathering Requirements, Analysis, Design, Implementation, Testing and Maintenance
        ✔ Developed responsive web apps using Material design, CSS framework
        ✔ Used Redux to manage the whole state of the application with well-designed stores, actions and reducers
        ✔ Strong knowledge in react hooks and creating reusable Components with custom hooks
        ✔ Implemented React router for building the single page application
        ✔ Designed and developed RESTFUL web services using Spring Boot
        ✔ Worked with the Node package manager (NPM) along with Jest
        ✔ SQL Development - used complex queries for the web interface using MariaDB
        Stack: JSX, CSS, JavaScript, React.Js, SQL, Java SE 8, Eclipse, Agile
        `,
    },
    {
      duration: "2018/Apr - 2018/Dec",
      name: "Shalom Infotech",
      href: "http://www.shalominfotech.com/",
      jobrole: "Jr. Mobile App Developer",
      Highlights: `
        ✔ Responsible for maintaining/Bug fixing and developing UI features in mHealth applications
        ✔ Programmed using Java and XML in Android SDK platform for modular and robust code
        ✔ Deployed the app on the Google Play Store for different beta and stable releases of the app
        ✔ Has been a UI developer for Android application creating the project generic Application interfaces, building signed apk and play store deployment
        Stack: Java, XML, Eclipse, Android studio, Waterfall
        `,
    },
  ];

  return arr;
};

const myProducts = () => {
  let arr = [
    {
      duration: "2025/Aug",
      name: "Roots&Wings",
      web_href: "https://frontend-944856745086.europe-west2.run.app/",
      mobile_href: false,
    },
    {
      duration: "2022/Dec",
      name: "Rampage clothing",
      web_href: "https://rampage-clothing.netlify.app/",
      mobile_href: false,
    },
    {
      duration: "2021/Sep",
      name: "Vyn photo studio",
      web_href: "https://studios.vybn.in/",
      mobile_href: false,
    },
    {
      duration: "2020/Jun",
      name: "Star Lions matriculation schools",
      web_href: "https://www.starlionsmatriculationschools.org/",
      mobile_href: false,
    },
  ];

  return arr;
};

const Project = () => {
  const [heading] = useState("Recent Projects");
  const [projectsArray, setProjectsArray] = useState([]);
  const [projectsLength] = useState(Configs.projectsLength);
  const [shalomProjects, setshalomProjects] = useState(false);
  const [shalomProjectsY, setshalomProjectsY] = useState(0);

  const handleRequest = useCallback(
    (e) => {
      axios
        .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
        .then((response) => {
          // handle success
          // console.log(response.data.slice(0, 4));
          return setProjectsArray(response.data.slice(0, projectsLength));
        })
        .catch((error) => {
          // handle error
          setProjectsArray("failed");
          return console.error(error.message);
        })
        .finally(() => {
          // always executed
        });
    },
    [projectsLength]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  useEffect(() => {
    if (shalomProjects && shalomProjects.length > 0) {
      setshalomProjectsY(window.scrollY);
    }
  }, [shalomProjects]);

  useEffect(() => {
    const dragable = document.querySelectorAll(".draggable");

    dragable.forEach((element) => {
      element.addEventListener("dragstart", () => {
        element.classList.add("dragging");
      });
      element.addEventListener("dragend", () => {
        element.classList.remove("dragging");
      });
    });

    const containers = document.querySelectorAll(".dragcontainer");

    containers.forEach((element) => {
      element.addEventListener("dragover", (e) => {
        e.preventDefault();
        const draggedEle = document.querySelector(".dragging");
        element.appendChild(draggedEle);
        const afterEle = getDragAfterEle(element, e.clientY);
        console.log(draggedEle, "draggedEle");
        if (afterEle === null) {
          element.appendChild(draggedEle);
        } else {
          element.insertBefore(draggedEle, afterEle);
        }
      });
    });

    const getDragAfterEle = (container, y) => {
      const dragEle = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return dragEle.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          console.log(box, "box", offset);
          if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    };
  }, []);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <a href="malik" />
        <div>
          <h1 className="display-4 pb-5">My Products</h1>
          <div className="row dragcontainer">
            {myProducts().map((project, index) => (
              <MyProducts
                key={index}
                id={"collapse" + index}
                web_href={project.web_href}
                mobile_href={project.mobile_href}
                name={project.name}
                duration={project.duration}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="display-4 pb-5">Work Experience</h1>
          <div className="row dragcontainer">
            {workdetails().map((project, index) => (
              <WorkCard
                key={index}
                id={"collapse" + index}
                name={project.name}
                href={project.href}
                setProject={(e) => {
                  setshalomProjects(e);
                  if (document.getElementById("shalom")) {
                    document.getElementById("shalom").style.visibility =
                      "visible";
                    setshalomProjectsY(window.scrollY);
                  }
                }}
                duration={project.duration}
                jobrole={project.jobrole}
                Highlights={project.Highlights}
              />
            ))}
          </div>
        </div>

        {projectsArray !== "failed" && (
          <div>
            <h1 className="display-4 pb-5">{heading}</h1>
            <div className="row">
              {projectsArray.map((project) => (
                <ProjectCard key={project.id} id={project.id} value={project} />
              ))}
            </div>
          </div>
        )}

        <h1 className="display-4 pb-5">My Apps</h1>
        <div className="row">
          {androidappdetails().map((project, index) => (
            <AppCard
              key={index}
              img={project.img}
              name={project.name}
              href={project.href}
              duration={project.duration}
            />
          ))}
        </div>
        {shalomProjects && (
          <div>
            <h1 className="display-4 pb-5">Client Apps</h1>
            <div className="row" id="shalom">
              {shalomProjects.map((project, index) => (
                <AppCard
                  key={index}
                  img={project.img}
                  name={project.name}
                  href={project.href}
                  duration={project.duration}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
