require("scss/site");

require("jquery");
require("js/components/TestComponent");

var app = {

  init: function(){
    console.log("Sup from app.init()");  
  }
  
}

$(document).ready(function(){
  app.init();
});