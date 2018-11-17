'use strict';

function Component(events) {
  this.events = events;
  this.attachEvents()
}

Component.prototype.initComponent = function() {};
Component.prototype.render = function() {};
Component.prototype.renderTo = function(containerId) {};

Component.prototype.attachEvents = function() {
  Object.keys(this.events).forEach(selector => {
    const elem = document.querySelector(selector);

    for (let event in this.events[selector]) {
      const handler = this.events[selector][event];
      elem.addEventListener(event, handler);
    };
  });
};

const obj1 = {
  '#save-button': {
    click: function click() {
      alert('Button is clicked');
    }
  },

  '#title': {
    click: function click() {
      alert('Title is clicked');
    },

    mouseover: function mouseover() {
      console.log('The mouse is over the Title');
    }
  }
};

const component1 = new Component(obj1);
