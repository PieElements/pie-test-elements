import React from "react";
import ReactDOM from "react-dom";

export default class extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "TA-DA!";
  }

  set model(m) {
    this._model = m;
  }

  set session(s) {
    this._session = s;
  }

  connectedCallback() {
    const el = React.createElement("div", { children: "i am a react element" });
    ReactDOM.render(el, this);
  }
}
