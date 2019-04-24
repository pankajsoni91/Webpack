export const hotModule = function() {
  let element = component();
  document.body.appendChild(element);
};

function component() {
  let element = document.createElement("div");
  element.innerHTML = "I mpart of hot module1";
  element.classList.add("testingHotModule");
  return element;
}
