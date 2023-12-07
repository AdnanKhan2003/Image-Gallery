/**
 * It contains all the information (business logic) of the app
 */
export const state = {
  secondRatio: "",
  minuteRatio: "",
  hourRatio: "",
};

/**
 * Mutates properties in the state object
 * @param {undefined}
 */
export const setClock = function () {
  const date = new Date();

  state.secondRatio = date.getSeconds() / 60;
  state.minuteRatio = (state.secondRatio + date.getMinutes()) / 60;
  state.hourRatio = (state.minuteRatio + date.getHours()) / 12;
};
