import _ from "lodash";
import "./css/style.css";
import img from "./images/testImage.jpeg";
import Data from "./data/data.xml";
// import CSV from "./data/csv.csv";

function component() {
  let imgElement = document.createElement("img");

  imgElement.src = img;

  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("heading");
  element.appendChild(imgElement);
  return element;
}

document.body.appendChild(component());
