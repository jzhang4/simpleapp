(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<p>Jessica Zhang says {{message}} at {{time}}</p>'
    })
    .Class({
      constructor: function() {
      	this.time = new Date();
      	this.message = "'Hi Geza!'";
      }
    });
})(window.app || (window.app = {}));
