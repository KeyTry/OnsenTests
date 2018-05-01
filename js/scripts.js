document.addEventListener('init', function(event) {
    var page = event.target;
    var myNavigator = document.querySelector('#my-navigator');

    if (page.id === "homepage") {
        page.querySelector('#push-button').onclick = function() {
            myNavigator.pushPage('navigatorpage.html', { data: { title: 'Navigator Page' } });
        }
    } else if (page.id === "navigatorpage") {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});