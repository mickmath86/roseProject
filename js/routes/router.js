var app = app || {};

app.Router = Backbone.Router.extend ({

  routes :{
    "": "noCopy",
    "heirloomRose" : "heriloomRoseMessage",
    "rainbowRose" : "rainbowRoseMessage",
    "redRose" : "redRoseMessage"
  },

  noCopy: function(){
    $("#copy").html("");
  },

  heriloomRoseMessage: function(){
    $("#copy").html("Heirloom Roses are great Mother's Day flowers");
  },

  rainbowRoseMessage: function(){
    $("#copy").html("Choose Rainbow Roses for your wedding");
  },

  redRoseMessage: function(){
    $("#copy").html("Red Roses are your best bet for Valentines Day");
  }

});
