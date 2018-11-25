'use strict';

function Component(events) {
  this.events = events;
}

Component.prototype.initComponent = function(containerId) {
  this.renderTo(containerId);
};

Component.prototype.render = function() {
  return this.component;
};

Component.prototype.renderTo = function(containerId) {
  document.getElementById(containerId).appendChild( this.render() );
  this.attachEvents();
};

Component.prototype.attachEvents = function() {
  Object.keys(this.events).forEach(selector => {
    const elem = document.querySelector(selector);

    for (let event in this.events[selector]) {
      const handler = this.events[selector][event];
      elem.addEventListener(event, handler);
    };
  });
};

function TimerComponent(events, className) {
  const input = document.createElement('input');
  input.className = `${className}__field`;
  input.setAttribute('placeholder', 'Ввидите число');

  const btn = document.createElement('button');
  btn.className = `${className}__btn`;
  btn.setAttribute('type', 'button');
  btn.innerHTML = 'Start';

  this.events = events;
  this.component = document.createElement('div');
  this.component.className = className;
  this.component.appendChild(input);
  this.component.appendChild(btn);
}

Object.setPrototypeOf(TimerComponent.prototype, Component.prototype);

// ==========================================================================================

function timerHandler(event) {
  const input = this.previousElementSibling;
  let value = Number(input.value);
  let timerId;

  if ( isNumeric(value) && value > 0 ) {
    input.setAttribute('readonly', '');
    this.setAttribute('disabled', '');
    countdown();
  } else {
    alert('Введите число больше ноля!');
  }

  function countdown() {
    if (value === 0) {
      input.removeAttribute('readonly');
      event.target.removeAttribute('disabled');
      clearTimeout(timerId);
    } else {
      timerId = setTimeout(countdown, 1000);
    }

    input.value = value;
    value--;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const obj1 = {
  '.timer1__btn': {
    click: timerHandler
  }
};

const obj2 = {
  '.timer2__btn': {
    click: timerHandler
  }
};

new TimerComponent(obj1, 'timer1').initComponent('test');
new TimerComponent(obj2, 'timer2').initComponent('test-2'); 