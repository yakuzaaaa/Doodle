import El from "./index";

class Circle extends El {
  draw () {
    const {fill, x, y, width, height } = this.getAttributes();

    fill && (this.paper.fillStyle = fill);
    this.paper.fillRect(x, y, height, width);
  }
}

export default Circle;