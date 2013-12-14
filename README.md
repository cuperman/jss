# jss: Javascript Styles

## Concept

Write and apply styles in Javascript. One potential use case is providing a single compiled asset that includes a feature's behavior and styles.

## Usage

Define styles in a Javascript object literal, where the root keys are the CSS selectors:

```
var typography = {
    "body": {
        "font-family": "Helvetica,Arial"
    },
    
    "h1": {
        "font-size": "36px"
    },
    
    "h2": {
        "font-size": "30px"
    },
    
    "h1, h2": {
        "margin-top": "20px",
        "margin-bottom": "10px"
    },
    
    ...
};
```

Then add the styles to jss:

```
jss.add(typography);
```

Apply the styles when the page is loaded, and automatically watch for changes. Styles will be re-applied automatically if the elements change:

```
$(document).ready(function() {
    jss.style().watch();
});
```

You can even narrow the scope by providing a CSS selector:

```
$(document).ready(function() {
    var el = "#foo";
    
    // add behavior
    $(el).applySomePlugin();

    // add styles
    jss.style(el).watch(el);
});
```