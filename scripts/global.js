function addLoadEvent(func) {
    let oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}

function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function highLightPage() {
    if(!element.getElementByTagName) return false;
    if(!element.getElementById) return false;
    let headers = document.getElementByTagName('header');
    if(headers.length == 0) return false;
    let nav1 = headers[0].getElementByTagName('nav');
    if(nav1.length == 0) return false;
    let links = nav1[0].getElementByTagName('a');
    let linkurl;
    for(let i=0;i<links.length;i++) {
        linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
        }
    }
}
addLoadEvent(highLightPage);

