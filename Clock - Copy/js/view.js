class Clock {
  handHour = document.querySelector(".hand-hour");
  handMinute = document.querySelector(".hand-minute");
  handSecond = document.querySelector(".hand-second");
  arrHand = [this.handSecond, this.handMinute, this.handHour];
  numberArr = document.querySelectorAll(".number");

  constructor() {
    this.arrangeNum();
  }

  arrangeNum() {
    [...this.numberArr].forEach((num, i) => {
      const incrementBy = 30;

      if (i !== 12) num.style.transform = `rotate(${incrementBy * (i + 1)}deg)`;
    });
  }

  /**
   * Data is inserted in this function by the controller and it has its own data which it into setRotation function
   * @param  {Number} ratio It contains ratio of hour, minute and second
   * @returns {undefined}
   */
  calcRotation(...ratio) {
    // console.log([...this.numberArr]);
    const { secondRatio, minuteRatio, hourRatio } = ratio;
    ratio.forEach((rat, i) => {
      const curEl = this.arrHand[i];
      this.setRotation(curEl, rat);
    });
  }

  /**
   * Performs the functionality of moving hands of the clock
   * @param {*} element
   * @param {Number} rotationRatio
   * @returns {undefined}
   */
  setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation-deg", rotationRatio * 360);
  }
}

export default new Clock();
