import Rect from "./Element/Rect";
import Circle from "./Element/Circle";
import EventTracker from "./EventTracker";

class Canvas {
  constructor () {
    this._canvas = document.getElementsByTagName('canvas')[0];
    this.paper = this._canvas.getContext('2d');
    this.elements = {};
    this.lastElementId = 0;

    this._createEventTracker();
  }

  getPaper () {
    return this.paper;
  }

  drawFillRect (x, y, height, width, fill) {
    const el = new Rect('rect', this._getAvailableId(), this.paper);

    el.setAttributes({ x, y, width, height, fill });
    el.draw();

    this.elements[el._id] = el;

    this.eventTracker.addElement(el);

    return el;
  }

  getCanvas() {
    return this._canvas;
  }

  _createEventTracker () {
    this.eventTracker = new EventTracker(this);
  }

  _getAvailableId () {
    return `_element_${this.lastElementId + 1}`;
  }
}

export default Canvas;