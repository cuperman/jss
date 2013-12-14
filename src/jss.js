/* globals $, _, Watcher */

(function() {
    var _private = {
        styles: {}
    };

    var jss = {
        add: function(styles) {
            _private.styles = _.extend(_private.styles, styles);

            return this;
        },

        style: function(context) {
            _.each(_private.styles, function(styleDefs, selector) {
                var $el = $(selector, context);

                _.each(styleDefs, function(value, attr) {
                    $el.css(attr, value);
                });
            });

            return this;
        },

        watch: function(context) {
            var el = (context || "body"),
                watcher = new Watcher();

            watcher.watch(el, function(changes) {
                _.each(changes, function(change) {
                    this.style(change.target);
                }, this);
            }, this);

            return this;
        }
    };

    window.jss = jss;
})();
