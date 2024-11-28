// @-ts-nocheck - Tested on Firefox 132.0.

queueMicrotask(() => {
    //  Move window controls into the navigation bar.
    let navBar = document.querySelector("#nav-bar");
    let titleBar = document.querySelector("#titlebar");
    navBar.after(titleBar);

    let windowControls = [...document.querySelectorAll(".titlebar-buttonbox-container")];
    windowControls.forEach(control => control.remove());
    navBar.prepend(windowControls[0]);

    //  Move bookmark bar to expected order.
    let bookmarkBar = document.querySelector("#PersonalToolbar");

    function moveBookmarkBar() {
        let bookmarkVisibility = Services.prefs.getCharPref("browser.toolbars.bookmarks.visibility");
        switch (bookmarkVisibility) {
            case "always":
                if (bookmarkBar.previousElementSibling !== navBar) {
                    navBar.after(bookmarkBar);
                }
                break;
            case "newtab":
                if (bookmarkBar.previousElementSibling !== titleBar) {
                    titleBar.after(bookmarkBar);
                }
                break;
            default:
                break;
        }
    }
    
    moveBookmarkBar();
    Services.prefs.addObserver("browser.toolbars.bookmarks.visibility", moveBookmarkBar);

    //  Move reload button into urlbar.
    let reloadButton = document.querySelector("#stop-reload-button");
    let actionBox = document.querySelector("#page-action-buttons");
    actionBox.after(reloadButton);

    //  Move permission box after tracking protection button.
    let permissionButton = document.querySelector("#identity-permission-box");
    let notificationButton = document.querySelector("#notification-popup-box");
    let shieldButton = document.querySelector("#tracking-protection-icon-container");
    shieldButton.after(notificationButton);
    shieldButton.after(permissionButton);

    //  Remove titlebar spacers.
    let titlebarSpacers = document.querySelectorAll(".titlebar-spacer");
    titlebarSpacers.forEach(spacer => spacer.remove());

    //  Absolute URL bar.
    let urlbarToolbarItem = document.querySelector("#urlbar-container");
    let navBarTarget = navBar.querySelector("#nav-bar-customization-target");

    function urlbarSizer() {
        if (document.documentElement.hasAttribute("customizing")) {
            urlbarToolbarItem.style.marginLeft = '';
            urlbarToolbarItem.style.marginRight = '';
            urlbarToolbarItem.style.minWidth ='';
            urlbarToolbarItem.style.maxWidth ='';
            let flexibleSpaces = navBarTarget.querySelectorAll("toolbarspring");
            flexibleSpaces.forEach(space => {
                space.style.minWidth = '';
                space.style.maxWidth = '';
            });
            return;
        }

        urlbarToolbarItem.style.minWidth = (navBar.clientWidth * 0.41 - 8) + 'px';
        urlbarToolbarItem.style.maxWidth = (navBar.clientWidth * 0.41 - 8) + 'px';
        let leftFlexibleSpaces = [];
        let rightFlexibleSpaces = [];
        let beforeBarWidth = 0;
        let afterBarWidth = 0;

        let isLeft = true;
        let isRight = false;
        for (let element of navBarTarget.children) {
            if (element === urlbarToolbarItem) {
                isLeft = false;
                isRight = true;
                continue;
            }
            if (element.matches("toolbarspring")) {
                if (isLeft) {
                    leftFlexibleSpaces.push(element);
                } else if (isRight) {
                    rightFlexibleSpaces.push(element);
                }
                continue;
            }

            if (isLeft) {
                beforeBarWidth += element.clientWidth;
            }

            if (isRight) {
                afterBarWidth += element.clientWidth;
            }
        }

        if (navigator.platform.startsWith("Mac")) {
            beforeBarWidth += windowControls[0].clientWidth;
        } else {
            afterBarWidth += windowControls[0].clientWidth;
        }

        let rightNavBarElementsWidth = 0;
        let isAfterNavBarTarget = false;
        for (let element of navBar.children) {
            if (element === navBarTarget) {
                isAfterNavBarTarget = true;
                continue;
            }
            if (element.matches("panel")) {
                continue;
            }
            if (isAfterNavBarTarget) {
                rightNavBarElementsWidth += element.clientWidth;
            }
        }
        afterBarWidth += rightNavBarElementsWidth;

        let leftFlexibleSpaceCount = leftFlexibleSpaces.length;
        let rightFlexibleSpaceCount = rightFlexibleSpaces.length;

        if (beforeBarWidth > afterBarWidth) {
            if (leftFlexibleSpaceCount === 0) {
                urlbarToolbarItem.style.marginLeft = Math.max(4, Math.min((navBar.clientWidth * 0.295) - beforeBarWidth + 4, (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + 'px';
            } else {
                urlbarToolbarItem.style.marginLeft = '';
                let spaceWidth = Math.max(0, Math.min((navBar.clientWidth * 0.295) - beforeBarWidth, (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + 'px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                if ((navBar.clientWidth * 0.295) - afterBarWidth > 0 && (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarToolbarItem.style.marginRight = 'auto';
                } else {
                    urlbarToolbarItem.style.marginRight = '';
                }
            } else {
                urlbarToolbarItem.style.marginRight = '';
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = '0';
                    space.style.maxWidth = 'none';
                }
            }
        } else {
            if (leftFlexibleSpaceCount === 0) {
                if ((navBar.clientWidth * 0.295) - beforeBarWidth > 0 && (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarToolbarItem.style.marginLeft = 'auto';
                } else {
                    urlbarToolbarItem.style.marginLeft = '';
                }
            } else {
                urlbarToolbarItem.style.marginLeft = '';
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = '0';
                    space.style.maxWidth = 'none';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                urlbarToolbarItem.style.marginRight = Math.max(4, Math.min((navBar.clientWidth * 0.295) - afterBarWidth + 4, (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + 'px';
            } else {
                urlbarToolbarItem.style.marginRight = '';
                let spaceWidth = Math.max(0, Math.min((navBar.clientWidth * 0.295) - afterBarWidth, (navBar.clientWidth * 0.59) - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + 'px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
        }
    }

    let delayedUrlbarSizing = false;
    function delayedUrlbarSizer() {
        if (delayedUrlbarSizing) {
            return;
        }

        delayedUrlbarSizing = true;
        queueMicrotask(() => {
            urlbarSizer();
            delayedUrlbarSizing = false;
        });
    }

    urlbarSizer();
    (new ResizeObserver(() => delayedUrlbarSizer())).observe(navBar);
    (new MutationObserver(() => delayedUrlbarSizer())).observe(navBar, {
        subtree: true,
        attributes: true
    });

    //  Customize search bars.
    let urlbar = urlbarToolbarItem.querySelector("#urlbar");
    let urlbarInputContainer = urlbar.querySelector(".urlbar-input-container");
    let urlIdentityBox = urlbarInputContainer.querySelector("#identity-box");
    let urlbarInputBox = urlbarInputContainer.querySelector(".urlbar-input-box");
    let urlbarInput = urlbarInputBox.querySelector("#urlbar-input");

    //  To make the URL input field centered, we need to add a span before #identity-box.
    let spacer = document.createElement("span");
    spacer.style.display = "inline-block";
    spacer.style.cursor = "text";
    urlIdentityBox.before(spacer);

    //  To measure the width of the URL input text, we need add a invisible span that has the same
    //  font and text content as the URL input field.
    let measurer = document.createElement("span");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "pre";
    measurer.style.top = "0";
    measurer.style.left = "0";
    urlbarInputBox.prepend(measurer);

    //  Centering/flushing left the URL input field may be optionally animated.
    let urlbarTransitionTimer = 0;
    function spaceSizer(animated) {
        //  If focused, flush left; otherwise, center.
        let centers = document.activeElement !== urlbarInput;
        let space = 0;
        if (centers) {
            measurer.textContent = urlbarInput.value || urlbarInput.placeholder || "";
            let totalWidth = urlbarInputContainer.clientWidth;
            let leftWidth = 0;
            let centerWidth = measurer.clientWidth;
            let rightWidth = 0;
            let isInCenterSection = false;
            let isInRightSection = false;

            for (let element of urlbarInputContainer.children) {
                let elementWidth = element.clientWidth;
                if (element === spacer) {
                    isInCenterSection = true;
                    continue;
                }
                if (element === urlbarInputBox) {
                    isInRightSection = true;
                    continue;
                }
                if (!isInCenterSection) {
                    leftWidth += elementWidth;
                }
                if (isInCenterSection && !isInRightSection) {
                    centerWidth += elementWidth;
                }
                if (isInRightSection) {
                    rightWidth += elementWidth;
                }
            }

            space = Math.max(0, Math.min((totalWidth - centerWidth) / 2, totalWidth - centerWidth - rightWidth) - leftWidth - 4);
        }

        if (animated && urlbarTransitionTimer) {
            clearTimeout(urlbarTransitionTimer);
            urlbarTransitionTimer = 0;
        }

        if (animated) {
            spacer.style.transition = "width 0.35s cubic-bezier(0.15, 0.1, 0.15, 1)";
            urlbarTransitionTimer = setTimeout(() => {
                spacer.style.transition = "";
                urlbarTransitionTimer = 0;
            }, 350);
        }

        spacer.style.setProperty("width", space + "px", "important");
    }

    let delayedSizingSpacer = 0;  // 0: none, 1: non-animated sizing, 2: animated sizing.
    function delayedspaceSizer(animated) {
        let type = animated ? 2 : 1;

        if (delayedSizingSpacer) {
            //  Animated sizing takes precedence.
            delayedSizingSpacer = Math.max(delayedSizingSpacer, type);
            return;
        }

        delayedSizingSpacer = type;
        queueMicrotask(() => {
            spaceSizer(delayedSizingSpacer === 2);
            delayedSizingSpacer = 0;   
        });
    }

    spaceSizer(false);
    urlbarInput.addEventListener("blur", () => delayedspaceSizer(true));
    urlbarInput.addEventListener("focus", () => delayedspaceSizer(true));

    (new MutationObserver(() => delayedspaceSizer(false))).observe(urlbarInput, {attributeFilter: ["placeholder"]});

    let resizeObserver = new ResizeObserver(() => delayedspaceSizer(false));
    resizeObserver.observe(urlbarInputContainer);
    for (let element of urlbarInputContainer.children) {
        if (element === spacer || element === urlbarInputBox) {continue;}
        resizeObserver.observe(element);
    }

    //  urlbarInput.value might be changed by code, and not observed by MutationObserver.
    //  We tamper with the setter of urlbarInput.value.
    let getter = urlbarInput.__lookupGetter__("value");
    let setter = urlbarInput.__lookupSetter__("value");
    Object.defineProperty(urlbarInput, "value", {
        configurable: true,
        get: getter,
        set(value) {
            setter.call(this, value);
            requestAnimationFrame(() => delayedspaceSizer(false));
        }
    });

    //  Make spacer clickable.
    let eventListener = event => {
        event.preventDefault();
        event.stopPropagation();
        let copy = new MouseEvent(event.type, event);
        urlbarInput.dispatchEvent(copy);
        urlbarInput.select();
    }
    spacer.addEventListener("mousedown", eventListener);
    spacer.addEventListener("mouseup", eventListener);

    //  Customize tab bar.
    let tabStrip = document.querySelector("#TabsToolbar-customization-target");
    let tabBar = document.querySelector("#TabsToolbar");
    function layoutTabs() {
        let tabs = tabStrip.querySelectorAll(".tabbrowser-tab");
        let canHideTabBar = tabStrip.childElementCount <= 1 && tabs.length <= 1;
        canHideTabBar &= !document.documentElement.hasAttribute("customizing");
        tabBar.style.visibility = canHideTabBar ? "collapse" : "";

        //  We can’t override `flex` using CSS because of style sheet precedence.
        tabStrip.querySelectorAll(`.tab-label-container[flex="1"]`).forEach (t => {
            t.removeAttribute("flex");
        });
        if (tabs.length <= 1) {
            tabStrip.querySelectorAll('.tab-close-button').forEach(button => {
                button.style.visibility = 'hidden';
            });
        } else {
            tabStrip.querySelectorAll('.tab-close-button').forEach(button => {
                button.style.visibility = '';
            });
        }
    }

    layoutTabs();
    let tabMutationObserver = new MutationObserver(() => layoutTabs());
    tabMutationObserver.observe(tabStrip, {subtree: true, childList: true});
    gBrowser.tabContainer.addEventListener("TabClose", () => {
        let tabs = tabStrip.querySelectorAll(".tabbrowser-tab");
        let canHideTabBar = tabStrip.childElementCount <= 1 && tabs.length <= 2;
        canHideTabBar &= !document.documentElement.hasAttribute("customizing");
        if (canHideTabBar) {
            tabBar.style.visibility = "collapse";
        } else {
            if (tabs.length <= 2) {
                tabStrip.querySelectorAll('.tab-close-button').forEach(button => {
                    button.style.visibility = 'hidden';
                });
            }
        }
    });
});
