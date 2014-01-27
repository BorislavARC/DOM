
var links = document.getElementsByClassName('popup-link'),
    popupWrap = document.createElement('div'),
    link, href, onOk, title, message, i;

for(i = 0; i < links.length; i++) {
    links[i].onclick = _onMouseClick;
}


function _onMouseClick(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue=false);
    link = this;

    return openPopupFromLink(link);
}


function openPopupFromLink(link) {
    href = link.getAttribute('href');
    console.log(href);
    title = link.dataset.title;
    console.log(title);
    message = (link.dataset.message).replace(/%s/, href);
    onOk = href;

    return createPopup(title, message, onOk)
}


function createPopup(title, message, onOk) {
    popupWrap.innerHTML = '<div class="popup-wrap"> \
    <div class="popup"> \
    <i class="close" onclick="closePopup()"></i>\
    <h3>' + title + '</h3> \
    <div class="content">' + message + '</div> \
    <button id="no" value="no" onclick="closePopup()"> Нет </button> \
    <button id="ok" value="ok" onclick="window.location = onOk"> Да </button> \
  </div></div>';

    return document.body.appendChild(popupWrap);
}


function closePopup() {
    document.body.removeChild(popupWrap)
}


