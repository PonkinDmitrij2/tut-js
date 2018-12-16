'use strict';

function Component(events) {
  this.events = events;
}

Component.prototype.initComponent = function(containerId) {
  this.renderTo(containerId);
};

Component.prototype.render = function() {
  
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

function TimerComponent(className) {
  this.className = className;

  this.events = {
    [`.${className}__btn`]: {
      click: this.handleClick
    }
  };
}

Object.setPrototypeOf(TimerComponent.prototype, Component.prototype);

TimerComponent.prototype.render = function() {
  const container = document.createElement('div');
  container.className = this.className;

  const input = document.createElement('input');
  input.className = `${this.className}__field`;
  input.setAttribute('placeholder', 'Введите число');

  const btn = document.createElement('button');
  btn.className = `${this.className}__btn`;
  btn.setAttribute('type', 'button');
  btn.innerHTML = 'Start';

  container.appendChild(input);
  container.appendChild(btn);

  return container;
};

TimerComponent.prototype.handleClick = function(event) {
  const field = this.previousElementSibling;
  let fieldValue = Number(field.value);
  let timerId;

  if (fieldValue > 0) {
    field.setAttribute('readonly', '');
    this.setAttribute('disabled', '');
    countdown();
  } else {
    alert('Введите число больше ноля!');
  }

  function countdown() {
    if (fieldValue === 0) {
      field.removeAttribute('readonly');
      event.target.removeAttribute('disabled');
      clearTimeout(timerId);
    } else {
      timerId = setTimeout(countdown, 1000);
    }

    field.value = fieldValue;
    fieldValue--;
  };
}