
document.body.addEventListener('click', _onMouseClick);


function _onMouseClick(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;

    if (target.classList.contains('popup-link')) {
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        openPopupFromLink(target);
    }
}


function openPopupFromLink(link) {
    var title = link.dataset.title,
        message = link.dataset.message.replace(/%s/, link.getAttribute('href'));

    if(document.getElementsByClassName('popup-wrap')[0] !== undefined) {
        document.getElementsByClassName('popup-title')[0].innerHTML = title;
        document.getElementsByClassName('popup-content')[0].innerHTML = message;
        document.getElementsByClassName('popup-wrap')[0].style.display = 'block';
    } else {
        createPopup(
            title,
            message,
            function() {
                window.location = link.getAttribute('href');
                document.getElementsByClassName('popup-wrap')[0].style.display = 'none';})
    }



    function createPopup(title, message, onOk) {
        var popupWrap = document.createElement('div');
        popupWrap.className = 'popup-wrap';
        popupWrap.innerHTML = '<div class="popup"> \
            <i class="close"></i>\
            <h3 class="popup-title">' + title + '</h3> \
            <div class="popup-content">' + message + '</div> \
            <input class="not" type="button" value="Нет"> \
            <input class="yes" type="button" value="Да"> \
            </div>';

        document.body.appendChild(popupWrap);

        function del() {
            document.getElementsByClassName('popup-wrap')[0].style.display = 'none';
        }
        document.getElementsByClassName('close')[0].addEventListener('click', del);
        document.getElementsByClassName('not')[0].addEventListener('click', del);
        document.getElementsByClassName('yes')[0].addEventListener('click', onOk);
    }
}