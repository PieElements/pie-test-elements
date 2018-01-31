export default Element extends HTMLElement {

  constructor(){
    super();
    this.innerHTML = 'TA-DO-DO!';
  }

  set model(m) {
    this._model = m;
  }
}