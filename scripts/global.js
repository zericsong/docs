function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } eles {
        parent.insertBefor(newElement,targetElement.nextSibling)
    }
}

function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    } eles {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

