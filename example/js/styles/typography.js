/* globals jss */

(function() {
    var typography = {
        "h1": {
            "font-size": "36px"
        },

        "h2": {
            "font-size": "30px"
        },

        "h3": {
            "font-size": "24px"
        },

        "h4": {
            "font-size": "18px"
        },

        "h5": {
            "font-size": "14px"
        },

        "h6": {
            "font-size": "12px"
        },

        "h1, h2, h3": {
            "margin-top": "20px",
            "margin-bottom": "10px"
        },

        "h4, h5, h6": {
            "margin-top": "10px",
            "margin-bottom": "10px"
        },

        "h1, h2, h3, h4, h5, h6": {
            "font-family": "\"Helvetica Neue\",Helvetica,Arial,sans-serif",
            "font-weight": "500",
            "line-height": "1.1",
            "color": "inherit"
        }
    };

    jss.add(typography);
})();
