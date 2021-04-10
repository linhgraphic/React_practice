import WeatherApp from "../assets/images/WeatherApp.JPG";
import GameOfLifeApp from "../assets/images/GameOfLifeApp.JPG";
import CalculatorApp from "../assets/images/CalculatorApp.JPG";
import MemoGame from "../assets/images/MemoGame.JPG";
import Playlist from "../assets/images/Playlist.JPG";

export const projects = [
  {
    url: "https://playlist-app-graphpql.netlify.app/",
    name: "Shared playlist app",
    expandedTitle: "A full-stack app with my music server",
    description: [
      "Tech stack: full-stack",
      "Server side: Node.js, Graphql, MongoDb were used to build my music server",
      "Apollo Client for communication layer between front-end and back-end",
      "Client side:  React.js",
      "Semantic-ui and an extensive use of flexbox was used for responsive design",
    ],
    img: Playlist,
  },
  {
    url: "https://linhgraphic.github.io/memo-game/",
    name: "Memo Game App",
    expandedTitle: "My memo game version ",
    description: [
      "Built with React.js.",
      "This project is implemented to improve my skills in React hooks, data structure and local storage management.",
      "Responsive design.",
    ],
    img: MemoGame,
  },
  {
    url: "https://linhgraphic.github.io/weatherApp/",
    name: "Weather App",
    expandedTitle: "Querying a server to get live data in my UI",
    description: [
      "Built with React.js.",
      "Using Fetch API to retrieve real-time data from Weather API.",
      "Structuring the fetched data into a user-friendly layout.",
    ],
    img: WeatherApp,
  },
  {
    url: "https://linhgraphic.github.io/game-of-life/",
    name: "Game Of Life App",
    expandedTitle: "My implementation of John Conway's cellular automaton",
    description: [
      "Built with React.js.",
      "Combining stateful and stateless components.",
      "Using React hooks to sync state to local storage.",
    ],
    img: GameOfLifeApp,
  },
  {
    url: "http://linhgraphic.github.io/my-calculator/",
    name: "Calculator App",
    expandedTitle: "My own little abacus",
    description: ["Buit with React.js.", "Simple calculator simulation."],
    img: CalculatorApp,
  },
];

export const contacts = [
  {
    name: "Linh",
    email: "linhgraphic@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/linhgraphics/",
  },
];
