const slider = document.getElementById('myRange');
const output = document.getElementById('demo');

const initRange = () => {
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };
};

export default initRange;

