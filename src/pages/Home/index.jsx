import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Home.css";
import {
  faCss3Alt,
  faGithubSquare,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <main className="app-home">
      <h1>Linh Nguyen</h1>
      <h2>Software Developer</h2>
      <hr />
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faGithubSquare} />
        <FontAwesomeIcon icon={faDatabase} />
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faPython} />
      </div>
    </main>
  );
};

export default Home;
