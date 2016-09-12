require("jquery");

require('scss/site.scss');

require("components/TestComponent/TestComponent.js");

class App {
  constructor(){
    this.helloWorld();
  }

  helloWorld() {
    console.log("hello world");
  }
}

$(document).ready(function(){
  var app = new App();
});
