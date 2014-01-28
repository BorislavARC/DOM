
var links = document.getElementsByClassName('popup-link'),
    popupWrap = document.createElement('div'),
    link, onOk, title, message, href;

links[0].addEventListener("click", _onMouseClick);
links[1].addEventListener("click", _onMouseClick);


function _onMouseClick(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue=false);
    link = this;

    return openPopupFromLink(link);
}


function openPopupFromLink(link) {
    href = link.getAttribute('href');
    title = link.dataset.title;
    message = link.dataset.message.replace(/%s/, href);
    onOk = function() {
        window.location = href;
    };

    return createPopup(title, message, onOk)
}


function createPopup(title, message, onOk) {
    popupWrap.className = 'popup-wrap';
    popupWrap.innerHTML = '<div class="popup"> \
    <i class="close" onclick="document.body.removeChild(popupWrap)"></i>\
    <h3>' + title + '</h3> \
    <div class="content">' + message + '</div> \
    <input type="button" value="Нет" onclick="document.body.removeChild(popupWrap)"> \
    <input type="button" value="Да" onclick="onOk()"> \
    </div>';

    document.body.appendChild(popupWrap);
}