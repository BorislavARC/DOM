
var popupWrap = document.createElement('div'),
    onOk;
document.getElementsByClassName('content')[0].onclick = _onMouseClick;


function _onMouseClick(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;

    if (target.tagName != 'A') {
        return false;
    } else {
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);

    return openPopupFromLink(target);
    }
}


function openPopupFromLink(link) {
    var href = link.getAttribute('href');
    var title = link.dataset.title;
    var message = link.dataset.message.replace(/%s/, href);
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
    <div class="popup-content">' + message + '</div> \
    <input type="button" value="Нет" onclick="document.body.removeChild(popupWrap)"> \
    <input type="button" value="Да" onclick="onOk()"> \
    </div>';

    document.body.appendChild(popupWrap);
}