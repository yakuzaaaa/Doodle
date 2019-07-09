import Rect from "../Element/Rect";

const getTypeClass = (type) => {
  switch (type) {
    case 'rect': return Rect;
    default: return Element;
  }
},
  getElementPosition = function (obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return { x: curleft, y: curtop };
    }
    return undefined;
  },
  /** 
   * return the location of the click (or another mouse event) relative to the given element (to increase accuracy).
   * @param {DOM Object} element A dom element (button,canvas,input etc)
   * @param {DOM Event} event An event generate by an event listener.
   */
  getEventLocation = function (element, event) {
    // Relies on the getElementPosition function.
    var pos = getElementPosition(element);

    return {
      x: (event.pageX - pos.x),
      y: (event.pageY - pos.y)
    };
  },
  getRgbFromColors = (red, green, blue) => {
    return `rgb(${red},${green},${blue})`;
  };

class EventTracker {
  constructor (parent) {
    this.parent = parent;
    this.parentEl = parent.getCanvas();
    this.eventTracker = document.createElement('canvas');
    this.paper = this.eventTracker.getContext('2d');
    this.trackedElements = {};
    this.colors = {};
    this.lastRed = 0;
    this.lastGreen = 0;
    this.lastBlue = 0;

    this.parentEl.addEventListener('click', (e) => {
      const eventLocation = getEventLocation(this.parentEl, e),
        pixelData = this.paper.getImageData(eventLocation.x, eventLocation.y, 1, 1).data,
        trackedElement = this.getElementFromPixelData(pixelData);
      
      if (typeof trackedElement.events.click == "function") {
        trackedElement.events.click();
      }
    });
  }

  addElement (inputEl) {
    const typeClass = getTypeClass(inputEl.getType());
    const colorId = this._getUniqueColorId();
    const _el = new typeClass(inputEl.type, colorId, this.paper, { fill: colorId });
    const { x, y, width, height } = inputEl.getAttributes();

    _el.setAttributes({ x, y, width, height });
    _el.draw();

    this.trackedElements[colorId] = inputEl;
  }

  getElementFromPixelData ([red, green, blue]) {
    return this.trackedElements[getRgbFromColors(red, green, blue)];
  }

  _getUniqueColorId () {
    return getRgbFromColors(++this.lastRed, ++this.lastGreen, ++this.lastBlue);
  }
}

export default EventTracker;