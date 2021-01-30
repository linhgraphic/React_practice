import WeatherApp from "../assets/images/WeatherApp.JPG";
import GameOfLifeApp from "../assets/images/GameOfLifeApp.JPG";
import CalculatorApp from "../assets/images/CalculatorApp.JPG";
import MemoGame from "../assets/images/MemoGame.JPG";

export const projects = [
  {
    url: "https://linhgraphic.github.io/memo-game/",
    name: "Memo Game App",
    expandedTitle: "My memo game version ",
    description: [
      "Buit with React.js.",
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
      "My first React App.",
      "Built with React.js.",
      "Using Fetch API to retrieve real-time data from Weather API.",
    ],
    img: WeatherApp,
  },
  {
    url: "https://linhgraphic.github.io/game-of-life/",
    name: "Game Of Life App",
    expandedTitle: "My implementation of John Conway's cellular automaton",
    description: [
      "Buit with React.js.",
      "Combining stateful and stateless components.",
      "Using React Hooks to sync state to local storage.",
    ],
    img: GameOfLifeApp,
  },
  {
    url: "http://linhgraphic.github.io/my-calculator/",
    name: "Calculator App",
    expandedTitle: "My own little abacus",
    description: ["Buit with React.js.", "simple calculator simulation."],
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
