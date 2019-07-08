import Rect from "./Element/Rect";
import Circle from "./Element/Circle";

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

    return el;
  }

  _createEventTracker () {
    const eventTracker = document.createElement('canvas');
    
    eventTracker.position = 'absolute';
    eventTracker.left = 0;
    eventTracker.top = 0;

    this._canvas.appendChild(eventTracker);
    this.eventTracker = eventTracker;

    // eventTracker.addEventListener('click', );
  }

  _getAvailableId () {
    return `_element_${this.lastElementId + 1}`;
  }
}

export default Canvas;