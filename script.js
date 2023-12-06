
var fooButton = document.getElementById("foo");
var barButton = document.getElementById("bar");
var foobarButton = document.getElementById("foobar");


var output = document.getElementById("output");


fooButton.addEventListener("click", function() {
    // Create and append an h3 with the text "Foo"
    var h3 = document.createElement("h3");
    h3.textContent = "Foo";
    output.appendChild(h3);
});

barButton.addEventListener("click", function() {
    
    var h3 = document.createElement("h3");
    h3.textContent = "Bar";
    output.appendChild(h3);
});

foobarButton.addEventListener("click", function() {
    
    var h2 = document.createElement("h2");
    h2.textContent = "FooBar";
    output.appendChild(h2);
});
