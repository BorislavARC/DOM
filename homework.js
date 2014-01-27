
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
    onOk = link.getAttribute('href');
    title = link.dataset.title;
    message = (link.dataset.message).replace(/%s/, onOk);

    return createPopup(title, message, onOk)
}


function createPopup(title, message, onOk) {
    popupWrap.innerHTML = '<div class="popup-wrap"> \
    <div class="popup"> \
    <i class="close" onclick="closePopup()"></i>\
    <h3>' + title + '</h3> \
    <div class="content">' + message + '</div> \
    <input type="button" value="Нет" onclick="closePopup()"> \
    <input type="button" value="Да" onclick="window.location = onOk"> \
  </div></div>';

    document.body.appendChild(popupWrap);
}


function closePopup() {
    document.body.removeChild(popupWrap)
}


