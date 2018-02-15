export default class Element extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = 'TA-DA!';
  }

  set model(m) {
    this._model = m;
  }

  set session(s) {
    this._session = s;
  }
}