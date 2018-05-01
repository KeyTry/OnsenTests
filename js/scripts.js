// Side Menu
window.fn = {};

window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');

    content.load(page).then(menu.close.bind(menu));
}

// Push Page
document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === "homepage") {
        page.querySelector('#push-button').onclick = function() {
            console.log("Button Pushed");
            document.querySelector('#myNavigator').pushPage('navigatorpage.html', {
                data: {
                    title: 'Navigator Page'
                }
            }).then(function() {
                ons.notification.alert('Page pushed!');
            });
            console.log("Page Pushed");
            console.log("Current page: " + page.id);
        }
    } else if (page.id === "navigatorpage") {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});