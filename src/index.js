import _ from "lodash";
import { hotModule } from "./hotModule";

function component() {
  let element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack4"], " ");
  return element;
}

document.body.appendChild(component());

// changes done in the hotModule file will be autoreloaded
if (module.hot) {
  module.hot.accept("./hotModule.js", function() {
    hotModule();
  });
}
