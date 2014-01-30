
document.body.addEventListener('click', _onMouseClick);


function _onMouseClick(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;

    if (!(target.classList.contains('popup-link'))) {
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
    var onOk = function() {
        window.location = href;
    };

    return createPopup(title, message, onOk)
}


function createPopup(title, message, onOk) {
    var elem = document.getElementsByClassName('popup-wrap')[0];
    if(elem !== undefined) {
        elem.style.display = 'block';
    } else {
    var popupWrap = document.createElement('div');
    popupWrap.className = 'popup-wrap';
    popupWrap.innerHTML = '<div class="popup"> \
    <i class="close"></i>\
    <h3>' + title + '</h3> \
    <div class="popup-content">' + message + '</div> \
    <input class="not" type="button" value="Нет"> \
    <input class="yes" type="button" value="Да"> \
    </div>';

    document.body.appendChild(popupWrap);
    }

    function del() {
       document.getElementsByClassName('popup-wrap')[0].style.display = 'none';
    }
    document.getElementsByClassName('close')[0].addEventListener('click', del);
    document.getElementsByClassName('not')[0].addEventListener('click', del);
    document.getElementsByClassName('yes')[0].addEventListener('click', onOk);
}