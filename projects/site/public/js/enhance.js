/* prevent initial CSS hover on page load */
// document.getElementById('main-menu').querySelector('ul').setAttribute("style","pointer-events: none;");
// window.addEventListener('load', function() {
//     setTimeout(function() {
//         document.getElementById('main-menu').querySelector('ul').setAttribute("style","pointer-events: auto;");
//     }, 100);
// });

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

var demoMenu = document.querySelector('.main-menu-example .menu-toggle');
if (demoMenu) {
    demoMenu.addEventListener('click', function (evt) {
        evt.preventDefault();
        alert('This would open the mobile menu');
    });
}

// handle the tabbed previews

const newWindowLinkHtml = "<div class=\"new-window-link-container\">\n" +
    "    <a target=\"popup\" href=\"/popup/popup.html\" data-inject-content-from=\"parent\">Open in a new window</a>\n" +
    "</div>";

function insertNewWindowLink(elem) {
    var newWindowLink = document.createElement('div');
    newWindowLink.innerHTML = newWindowLinkHtml;
    elem.insertBefore(newWindowLink.firstChild, elem.firstChild);

}

var examples = document.querySelectorAll('div.component-example');
for (var idx2 = 0; idx2 < examples.length; idx2++) {
    var example = examples[idx2];
    insertNewWindowLink(example);

    // grab the example HTML and copy it to the HTML tab
    var htmlView = example.parentElement.querySelector('div.component-html');
    if (htmlView) {
        var exampleHtml = example.innerHTML;
        exampleHtml = exampleHtml.replace(/<div class="new-window-link-container">[\s\S]+?<\/div>/, '');
        var escapedHtml = document.createElement('div').appendChild(document.createTextNode(exampleHtml)).parentNode.innerHTML;
        var lines = escapedHtml.split('\n');
        var minTabs = Infinity;
        for (var l = 0; l < lines.length; l++) {
            var tabs = lines[l].match(/^\s+&lt;/);
            if (tabs && tabs.length > 0) {
                minTabs = Math.min(minTabs, tabs[0].length - 4);
            }
        }
        if (minTabs > 0 && minTabs < 9999) {
            escapedHtml = escapedHtml.replace( new RegExp('^\\n*\\s{' + minTabs + '}', 'gm'), '');
        }
        htmlView.innerHTML = '<pre><code class="language-html">' + escapedHtml + '</code></pre>';
        insertNewWindowLink(htmlView);
    }
}

var angularExamples = document.querySelectorAll('div.component-angular');
for (var idx4 = 0; idx4 < angularExamples.length; idx4++) {
    var angularExample = angularExamples[idx4];
    insertNewWindowLink(angularExample);
}

function defer (callback) {
    var channel = new MessageChannel();
    channel.port1.onmessage = function (e) {
        callback();
    };
    channel.port2.postMessage(null);
}

function awaitLoad(win, cb){
    var wasCalled = false;
    function unloadListener(){
        if (wasCalled)
            return;
        wasCalled = true;
        win.removeEventListener("unload", unloadListener);
        win.removeEventListener("pagehide", unloadListener);
        // Firefox keeps window event listeners for multiple page loads
        defer(function (){
            win.document.readyState;
            // IE sometimes throws security error if not accessed 2 times
            if (win.document.readyState === "loading")
                win.addEventListener("load", function loadListener(){
                    win.removeEventListener("load", loadListener);
                    cb();
                });
            else
                cb();
        });
    }
    win.addEventListener("unload", unloadListener);
    win.addEventListener("pagehide", unloadListener);
}

// handle open in new window for example tabs
var popupLinks = document.querySelectorAll('div.new-window-link-container a');
for (var idx3 = 0; idx3 < popupLinks.length; idx3++) {
    var popupLink = popupLinks[idx3];
    var noContentInjection = popupLink.getAttribute('data-no-content-injection');
    if (!noContentInjection || noContentInjection === 'false') {
        popupLink.addEventListener("click", function(evt) {
            evt.preventDefault();
            var injectContentFrom = evt.target.getAttribute('data-inject-content-from');
            var contentElem = injectContentFrom === 'parent' ? evt.target.parentElement.parentElement : document.querySelector(injectContentFrom);
            // var newWindow = window.open(evt.target.getAttribute('href'), 'popup');
            var newWindow = window.open();
            newWindow.location.href=evt.target.getAttribute('href');
            awaitLoad(newWindow, function (){
                newWindow.setBody(contentElem.innerHTML);

                var newScript = document.createElement("script");
                newScript.src = "/bundle.js";
                newWindow.document.body.appendChild(newScript);

                var newScript = document.createElement("script");
                newScript.src = "/js/textinput.js";
                newWindow.document.body.appendChild(newScript);
            });

        });
    }
}
