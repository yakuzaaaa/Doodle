import El from "./index";

class Rect extends El {
  draw () {
    const {fill, x, y, width, height } = this.getAttributes();

    fill && (this.paper.fillStyle = fill);
    this.paper.fillRect(x, y, height, width);
  }
}

export default Rect;