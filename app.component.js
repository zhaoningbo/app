
(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>我的Angular 应用</h1>'
        })
            .Class({
                constructor: function() {
                    alert("dd");
                }
            });
})(window.app || (window.app = {}));


