// the navigation will function entirely with CSS only (JavaScript disabled)
// this code progressively enhances the mobile experience, removing the need for #url-anchors

// handle menu open / close on mobile
var openMenu = document.getElementById('main-menu-toggle');
var closeMenu = document.getElementById('main-menu-close');
var mainMenu = document.getElementById('main-menu');

const toggleMenu = function(evt) {
    evt.preventDefault();
    if (mainMenu.getAttribute("aria-expanded") === 'true') {
        mainMenu.setAttribute('aria-expanded', 'false');
    } else {
        mainMenu.setAttribute('aria-expanded', 'true');
    }
};

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// handle expand / contract of menu items on mobile
var topMenuItems = document.querySelectorAll('#main-menu > ul > li > a');

for (var idx = 0; idx < topMenuItems.length; idx++) {
    var item = topMenuItems[idx];
    item.addEventListener("click", function(evt) {
        evt.preventDefault();
        var href = evt.target.href.replace(/#main-menu$/i, '');
        if (window.innerWidth < 1024) {
            var links = topMenuItems;
            for (var idx2 = 0; idx2 < links.length; idx2++) {
                var link = links[idx2];
                var li = link.parentElement;
                if (evt.target === link && !li.classList.contains('active')) {
                    li.classList.add('active');
                    li.scrollIntoView(true);
                } else {
                    li.classList.remove('active');
                }
            }
        } else {
            window.location.href = href;
        }
    });
}
