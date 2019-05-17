export function enhanceMenu() {
    function setupMenu(menuLinks, parentLevels) {
        for (var idx = 0; idx < menuLinks.length; idx++) {
            var item = menuLinks[idx];
            item.addEventListener("click", function(evt) {
                evt.preventDefault();
                var href = evt.target.href.replace(/#main-menu$/i, '');
                if (window.innerWidth < 1024) {
                    var links = menuLinks;
                    for (var idx2 = 0; idx2 < links.length; idx2++) {
                        var link = links[idx2];
                        var parent = link.parentElement;
                        if (parentLevels && parentLevels > 1) {
                            for (var p = 1; p < parentLevels; p++) {
                                parent = parent.parentElement;
                            }
                        }
                        if (evt.target === link && !parent.classList.contains('active')) {
                            parent.classList.add('active');
                            parent.scrollIntoView(true);
                        } else {
                            parent.classList.remove('active');
                        }
                    }
                } else {
                    window.location.href = href;
                }
            });
        }
    }

    function toggleMenu(evt) {
        evt.preventDefault();
        if (mainMenu.getAttribute("aria-expanded") === 'true') {
            mainMenu.setAttribute('aria-expanded', 'false');
        } else {
            mainMenu.setAttribute('aria-expanded', 'true');
        }
    }

    // expand menu backdrop to full document height
    var backdrop = document.getElementById('backdrop');
    backdrop.setAttribute("style","height:" + document.body.scrollHeight + "px");
    backdrop.addEventListener('click', function(evt) {
        toggleMenu(evt);
    });

    // handle menu open / close on mobile
    var openMenu = document.getElementById('main-menu-toggle');
    var closeMenu = document.getElementById('main-menu-close');
    var mainMenu = document.getElementById('main-menu');

    openMenu && openMenu.addEventListener('click', toggleMenu);
    closeMenu && closeMenu.addEventListener('click', toggleMenu);

    // handle expand / contract of main menu items on mobile
    setupMenu(document.querySelectorAll('#main-menu > ul > li > a'));

    // handle expand / contract of side menu items
    setupMenu(document.querySelectorAll('#side-menu > section > ul > li > a'), 3);

    // code to handle the tabbed previews
    var example = document.querySelector('div.component-example');
    var htmlView = document.querySelector('div.component-html');
    if (example && htmlView) {
        var escapedHtml = document.createElement('div').appendChild(document.createTextNode(example.innerHTML)).parentNode.innerHTML;
        htmlView.innerHTML = '<code class="language-html">' + escapedHtml + '</code>';
    }
}