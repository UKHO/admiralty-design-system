function setupMenu(menuLinks, parentLevels = 1) {
    for (const item of menuLinks) {
        item.addEventListener('click', evt => {
            evt.preventDefault();
            const href = evt.target.href.replace(/#main-menu$/i, '');
            if (window.innerWidth < 1024) {
                for (const link of menuLinks) {
                    let parent = link.parentElement;
                    if (parentLevels > 1) {
                        for (let p = 1; p < parentLevels; p++) {
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
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu.getAttribute('aria-expanded') === 'true') {
        mainMenu.setAttribute('aria-expanded', 'false');
    } else {
        mainMenu.setAttribute('aria-expanded', 'true');
    }
}

export function enhanceMainMenu() {
    // expand menu backdrop to full document height
    const backdrop = document.getElementById('backdrop');
    if (backdrop) {
        backdrop.setAttribute('style', 'height:' + document.body.scrollHeight + 'px');
        backdrop.addEventListener('click', evt => {
            toggleMenu(evt);
        });
    }

    // handle menu open / close on mobile
    const openMenu = document.getElementById('main-menu-toggle');
    const closeMenu = document.getElementById('main-menu-close');

    if (openMenu) { openMenu.addEventListener('click', toggleMenu); }
    if (closeMenu) { closeMenu.addEventListener('click', toggleMenu); }

    // handle expand / contract of main menu items on mobile
    setupMenu(document.querySelectorAll('#main-menu > ul > li > a'));
}

export function enhanceSideMenu() {
    // handle expand / contract of side menu items
    setupMenu(document.querySelectorAll('#side-menu > section > ul > li > a'), 3);
}
