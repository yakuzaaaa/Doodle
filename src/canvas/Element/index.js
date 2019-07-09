export default class El {
  constructor (_type, _id, paper, attrs) {
    this._id = _id;
    this._type = _type;
    this.paper = paper;
    this.events = {};
    this.attrs = Object.assign({}, attrs);
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
  getType() {
    return this._type;
  }
  addEventListener (eventName, callback) {
    this.events[eventName] = callback;
  }
}