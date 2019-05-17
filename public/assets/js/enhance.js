// the navigation will function entirely with CSS only (JavaScript disabled)
// this code progressively enhances the mobile experience, removing the need for #url-anchors

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
                if (href && href !== '#' && href !== window.location.href + '#') {
                    window.location.href = href;
                }
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

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// handle expand / contract of main menu items on mobile
setupMenu(document.querySelectorAll('#main-menu > ul > li > a'));

// handle expand / contract of side menu items
setupMenu(document.querySelectorAll('#side-menu > section > ul > li > a'), 3);

// code to handle the tabbed previews
var examples = document.querySelectorAll('div.component-example');
for (var idx2 = 0; idx2 < examples.length; idx2++) {
    var example = examples[idx2];
    var htmlView = example.parentElement.querySelector('div.component-html');
    if (htmlView) {
        var escapedHtml = document.createElement('div').appendChild(document.createTextNode(example.innerHTML)).parentNode.innerHTML;
        var lines = escapedHtml.split('\n');
        var minTabs = 9999;
        for (var l = 0; l < lines.length; l++) {
            var tabs = lines[l].match(/^\s+&lt;/);
            if (tabs && tabs.length > 0) {
                minTabs = Math.min(minTabs, tabs[0].length - 4);
            }
        }
        console.log({ minTabs });
        if (minTabs > 0 && minTabs < 9999) {
            escapedHtml = escapedHtml.replace( new RegExp('^\\s{' + minTabs + '}', 'gm'), '');
        }
        htmlView.innerHTML = '<pre><code class="language-html">' + escapedHtml + '</code></pre>';
    }
}
