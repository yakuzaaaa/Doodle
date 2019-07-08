export default class El {
  constructor (_type, _id, paper) {
    this._id = _id;
    this._type = _type;
    this.paper = paper;
    this.events = {};
    this.attrs = {};
  }
  setAttributes(attr) {
    Object.assign(this.attrs, attr);
  }
  setAttribute(attr, value) {
    this.attrs[attr] = value;
  }
  getAttribute(attr) {
    return this.attrs[attr];
  }
  getAttributes() {
    return this.attrs;
  }
  addEventListener (eventName, callback) {
    this.events[eventName] = callback;
  }
}