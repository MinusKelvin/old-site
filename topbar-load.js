function init() {
    var colors = ["blue","green","red","purple","yellow","cyan","orange"];
    var list = document.getElementById("navbar-items");
    // First and last items in this list are special cases, fix those
    list.children[0].children[0].id = "left";
    list.children[list.children.length-1].children[0].id = "right";
    // Color
    for (var i = 0; i < list.children.length; i++) {
        list.children[i].children[0].style.borderBottomColor = colors[i%colors.length];
    }
    // Fix whitespace problem with display: inline-block elements
    for (var i = 0; i < list.childNodes.length; i++) {
        if (list.childNodes[i].type === undefined) {
            var d = list.childNodes[i];
            if (d.remove)
                d.remove(); // Not-IE
            else
                d.removeNode(); // IE
        }
    }
}
