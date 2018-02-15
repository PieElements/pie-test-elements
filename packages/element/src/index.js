export default class Element extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = 'TA-DA!';
  }

  set model(m) {
    this._model = m;
    this.innerHTML = JSON.stringify(this._model, null, '  ');
  }

  set session(s) {
    this._session = s;
  }
}