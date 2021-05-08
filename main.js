var menulist = [
    "Neapolitan Pizza",
    "Chicago Pizza",
    "New York-Style Pizza",
    "Sicilian Pizza",
    "Greek Pizza"
];

function getmenu() {

    var htmldata;
    htmldata = "<ol class='menulist'>"
    menulist.sort();
    for (var i = 0; i < menulist.length; i++) {
        htmldata = htmldata + '<li>' + menulist[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display-menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menulist.push(item);
    menulist.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menulist.length; i++) {

        htmldata = htmldata + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + menulist[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("addedmenu").innerHTML = htmldata;
}