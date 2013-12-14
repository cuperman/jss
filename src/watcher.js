(function() {
    var Watcher = function() {
        this.Observer = window.MutationObserver || window.WebKitMutationObserver;
    };

    Watcher.prototype.watch = function(element, fn, fnContext) {
        this.node = $(element).get(0);

        var execute = function(mutations) {
            this.pause();
            fn.call(fnContext, mutations);
            this.resume();
        };

        this.observer = new this.Observer(execute.bind(this));
        this.start();
    };

    Watcher.prototype.start = function() {
        return this.observer.observe(this.node, {
            subtree: true,
            attributes: true,
            childList: true
        });
    };

    Watcher.prototype.stop = function() {
        return this.observer.disconnect();
    };

    Watcher.prototype.pause = Watcher.prototype.stop;

    Watcher.prototype.resume = Watcher.prototype.start;

    window.Watcher = Watcher;
})();
