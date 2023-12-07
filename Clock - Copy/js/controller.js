import * as model from "./model";
import clockView from "./view.js";
import "regenerator-runtime/runtime";
import "core-js/stable";

/**
 * It acts as an agent between model.js and view.js. It take data from model.js and put it into view.js
 * @param {undefined}
 */
const controlClock = function () {
  model.setClock();

  clockView.calcRotation(
    +model.state.secondRatio,
    +model.state.minuteRatio,
    +model.state.hourRatio
  );
};

setInterval(controlClock, 1000);
controlClock();
