"use strict";

class Calculator {
  clickButton(event) {
    console.log(event.target);

    const paraCurrentCalculator = this.querySelector("button");

    console.log(paraCurrentCalculator.textContent);
    paraCurrentCalculator.textContent += event.target.textContent;
  }

  constructor() {
    /* 1.Création de l'élément */
    const div = document.createElement("div");

    /* 2.Paramétrage de l'élément */
    nav.classList.add("calculatrice");

    /* 3.Placement de l'élément dans le dom */
    document.body.append(div);

  }
}
