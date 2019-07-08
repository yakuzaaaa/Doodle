import Canvas from './canvas';

(function () {
  const canvas = new Canvas();

  const first = canvas.drawFillRect(10, 10, 100, 300, '#ff0000'),
    second = canvas.drawFillRect(120, 10, 400, 100, '#ff00ff');
    // third = canvas.drawFillCircle(120, 10, 400, 100, '#ff00ff');

  first.addEventListener('click', () => {
    alert(first.fill);
  });

  second.addEventListener('click', () => {
    alert(second.fill);
  });
})();