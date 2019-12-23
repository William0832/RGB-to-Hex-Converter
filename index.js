(function() {
  const model = {
    colorCode: {
      red: '',
      green: '',
      blue: '',
      all: ''
    },
    colorElements: {
      red: {
        value: document.querySelector('.r-value'),
        slider: document.querySelector('.r-slider')
      },
      green: {
        value: document.querySelector('.g-value'),
        slider: document.querySelector('.g-slider')
      },
      blue: {
        value: document.querySelector('.b-value'),
        slider: document.querySelector('.b-slider')
      }
    }
  };
  const view = {
    showColorCode(color) {
      let s = model.colorCode[color];
      if (s.length === 1) {
        s = '00' + s;
      } else if (s.length === 2) {
        s = '0' + s;
      }
      model.colorElements[color].value.textContent = s;

      document.querySelector('#color-code').textContent = model.colorCode.all;
    },
    changeBackgroundColor() {
      document.querySelector('body').style.backgroundColor =
        model.colorCode.all;
    }
  };
  const controller = {
    slidersListener(color) {
      model.colorElements[color].slider.addEventListener('input', e => {
        model.colorCode[color] = e.target.value;
        model.colorCode.all =
          '#' +
          controller.changeNumtoHex(+model.colorCode.red) +
          controller.changeNumtoHex(+model.colorCode.green) +
          controller.changeNumtoHex(+model.colorCode.blue);
        view.showColorCode(color);
        view.changeBackgroundColor();
      });
    },
    changeNumtoHex(num) {
      let hexStr = num.toString(16);
      if (hexStr.length < 2) {
        hexStr = '0' + hexStr;
      }
      return hexStr;
    }
  };

  controller.slidersListener('red');
  controller.slidersListener('green');
  controller.slidersListener('blue');
})();
