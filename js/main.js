const arrayMenu = document.getElementsByClassName("horiz-menu d-flex menu flex-wrap");

var listItems = arrayMenu[0].getElementsByTagName("li");



function onClickItem(e){
    var targetElement = e.target;
    for (var i = 0; i < listItems.length; i++) {
        var element =listItems[i].getElementsByTagName("a")[0];
        var hasClass = element.classList.contains("current");
        if(hasClass)
            element.classList.remove('current');
      }
        targetElement.classList.add('current');    
}