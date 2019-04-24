import _ from "lodash";
import "./other.css";

function component() {
  let element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "from other component"], " ");
  return element;
}

document.body.appendChild(component());
