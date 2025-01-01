// @-ts-nocheck - Tested on Firefox 133.0.3.

Services.prefs.setBoolPref("svg.context-properties.content.enabled", true);
Services.prefs.setBoolPref("layout.css.light-dark.enabled", true);
Services.prefs.setBoolPref("layout.css.nesting.enabled", true);
Services.prefs.setBoolPref("browser.touchmode.auto", false);
if (!Services.prefs.prefHasUserValue("userChrome.Surfox.firstRun")) {
    Services.prefs.setBoolPref("userChrome.Surfox.firstRun", true);
    Services.prefs.setBoolPref("extensions.unifiedExtensions.enabled", false);
    Services.prefs.setBoolPref("userChrome.menuButton.enabled", false);
    Services.prefs.setBoolPref("userChrome.urlbar.starButton.enabled", false);
    if (navigator.platform.startsWith("Mac")) {
        Services.prefs.setIntPref("browser.uidensity", 2);
    }
}

queueMicrotask(() => {
    //  **Common Tab bar functions**  //

    //  Move window controls into the navigation bar.
    let navBar = document.querySelector("#nav-bar");
    let tabBar = document.querySelector("#TabsToolbar")
    let menuBar = document.querySelector("#toolbar-menubar");
    navBar.after(tabBar);
    navBar.after(menuBar);

    let windowControls = [...document.querySelectorAll(".titlebar-buttonbox-container")];
    windowControls.forEach((control, index) => {
        if (index === 0) {navBar.prepend(control);}
        else {control.remove();}
    });

    //  Move reload button into urlbar.
    let actionBox = document.querySelector("#page-action-buttons");
    let reloadButton = document.querySelector("#stop-reload-button");
    if (reloadButton) {
        actionBox.after(reloadButton);
    }
        
    //  Move permission box after tracking protection button.
    let permissionButton = document.querySelector("#identity-permission-box");
    let notificationButton = document.querySelector("#notification-popup-box");
    let shieldButton = document.querySelector("#tracking-protection-icon-container");
    shieldButton.after(notificationButton);
    shieldButton.after(permissionButton);

    //  Remove title bar spacers.
    let titlebarSpacers = document.querySelectorAll(".titlebar-spacer");
    titlebarSpacers.forEach(spacer => spacer.remove());

    //  Remove tab bar spacers.
    let tabbrowserTabs = document.querySelector("#tabbrowser-tabs");
    let tabScrollbox = tabbrowserTabs.querySelector("#tabbrowser-arrowscrollbox");
    let tabShadowRoot = tabScrollbox.shadowRoot;
    let tabOverflowIndicator = tabShadowRoot.querySelectorAll("spacer");
    tabOverflowIndicator.forEach(spacer => spacer.remove());

    //  Remove star button if need.
    try {
        if (!Services.prefs.getBoolPref("browser.tabs.tabmanager.enabled")) {
            document.querySelector("#alltabs-button").remove();
        }
    } catch(e) {}

    //  Customize search bars.
    let urlbarToolbarItem = document.querySelector("#urlbar-container");
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

    //  Add close tab button in URL bar.
    let selectedTab = tabbrowserTabs.querySelector('.tabbrowser-tab[selected]');
    let selectedTabCloseButton = selectedTab.querySelector('.tab-close-button');
    let urlbarCloseButtonContainer = document.createElement("box");
    urlbarCloseButtonContainer.classList.add("tab-close-button-container");
    let urlbarCloseButton = document.createElement("image");
    urlbarCloseButton.classList.add("tab-close-button", "close-icon");
    urlbarCloseButton.addEventListener("click", () => selectedTabCloseButton.click());
    urlbarCloseButtonContainer.prepend(urlbarCloseButton);
    urlbarInputContainer.prepend(urlbarCloseButtonContainer);
    
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
        spaceSizer(delayedSizingSpacer === 2);
        queueMicrotask(() => {
            delayedSizingSpacer = 0;
        });
    }

    spaceSizer(false);
    urlbarInput.addEventListener("blur", () => delayedspaceSizer(true));
    urlbarInput.addEventListener("focus", () => delayedspaceSizer(true));

    (new MutationObserver(() => delayedspaceSizer(false))).observe(urlbarInput, {attributeFilter: ["placeholder"]});

    let spaceSizerResizeObserver = new ResizeObserver(() => delayedspaceSizer(false));
    spaceSizerResizeObserver.observe(urlbarInputContainer);
    for (let element of urlbarInputContainer.children) {
        if (element === spacer || element === urlbarInputBox) {continue;}
        spaceSizerResizeObserver.observe(element);
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

    //  Center tab text.
    function centerTabText() {
        //  We can’t override `flex` using CSS because of style sheet precedence.
        tabbrowserTabs.querySelectorAll(`.tab-label-container[flex="1"]`).forEach (t => {
            t.removeAttribute("flex");
        });
    }
    centerTabText();

    //  Observe if a tab is closing.
    let tabClosing = false;
    let tabMultipleClosing = false;
    gBrowser.tabContainer.addEventListener("TabClose", () => {
        if (tabClosing) {
            tabMultipleClosing = true;
            return;
        }
        tabClosing = true;
        tabClosingObserver.observe(tabScrollbox, {subtree: true, childList: true});
    });
    let tabClosingObserver = new MutationObserver(() => {
        if (tabMultipleClosing) {
            tabMultipleClosing = false;
            return;
        }

        tabClosing = false;
        tabClosingObserver.disconnect()
    });

    //  ----------------------------------------------------------------------------------------------------  //
    //  **Separate Tab bar functions**  //

    //  Move bookmark bar to expected order.
    let bookmarkBar = document.querySelector("#PersonalToolbar");

    function moveBookmarkBar() {
        let bookmarkVisibility = Services.prefs.getCharPref("browser.toolbars.bookmarks.visibility");
        switch (bookmarkVisibility) {
            case "always":
                if (bookmarkBar.previousElementSibling !== navBar) {
                    bookmarkBar.after(tabBar);
                }
                bookmarkBar.setAttribute("bookmark-show", "always");
                break;
            case "newtab":
                if (bookmarkBar.previousElementSibling !== tabBar) {
                    tabBar.after(bookmarkBar);
                }
                bookmarkBar.setAttribute("bookmark-show", "newtab");
                break;
            default:
                break;
        }
    }

    //  Absolute URL bar center.
    let navBarTarget = navBar.querySelector("#nav-bar-customization-target");
    
    function urlbarSizer() {
        if (document.documentElement.hasAttribute("customizing")) {
            urlbarToolbarItem.style.marginLeft = '4px';
            urlbarToolbarItem.style.marginRight = '4px';
            urlbarToolbarItem.style.minWidth ='';
            urlbarToolbarItem.style.maxWidth ='';
            let flexibleSpaces = navBarTarget.querySelectorAll("toolbarspring");
            flexibleSpaces.forEach(space => {
                space.style.minWidth = '';
                space.style.maxWidth = '';
            });
            return;
        }

        let windowWidth = navBar.clientWidth
        urlbarToolbarItem.style.minWidth = (windowWidth * 0.41 - 8) + 'px';
        urlbarToolbarItem.style.maxWidth = (windowWidth * 0.41 - 8) + 'px';
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

        if (parseInt(window.getComputedStyle(windowControls[0]).order, 10) > 0) {
            afterBarWidth += windowControls[0].clientWidth;
        } else {
            beforeBarWidth += windowControls[0].clientWidth;
        }

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
                afterBarWidth += element.clientWidth;
            }
        }

        let leftFlexibleSpaceCount = leftFlexibleSpaces.length;
        let rightFlexibleSpaceCount = rightFlexibleSpaces.length;

        if (beforeBarWidth > afterBarWidth) {
            if (leftFlexibleSpaceCount === 0) {
                urlbarToolbarItem.style.marginLeft = Math.max(4, Math.min((windowWidth * 0.295) - beforeBarWidth + 4, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + 'px';
            } else {
                urlbarToolbarItem.style.marginLeft = '4px';
                let spaceWidth = Math.max(0, Math.min((windowWidth * 0.295) - beforeBarWidth, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + 'px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                if ((windowWidth * 0.295) - afterBarWidth > 0 && (windowWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarToolbarItem.style.marginRight = 'auto';
                } else {
                    urlbarToolbarItem.style.marginRight = '4px';
                }
            } else {
                urlbarToolbarItem.style.marginRight = '4px';
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = '0px';
                    space.style.maxWidth = 'none';
                }
            }
        } else {
            if (leftFlexibleSpaceCount === 0) {
                if ((windowWidth * 0.295) - beforeBarWidth > 0 && (windowWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarToolbarItem.style.marginLeft = 'auto';
                } else {
                    urlbarToolbarItem.style.marginLeft = '4px';
                }
            } else {
                urlbarToolbarItem.style.marginLeft = '4px';
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = '0px';
                    space.style.maxWidth = 'none';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                urlbarToolbarItem.style.marginRight = Math.max(4, Math.min((windowWidth * 0.295) - afterBarWidth + 4, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + 'px';
            } else {
                urlbarToolbarItem.style.marginRight = '4px';
                let spaceWidth = Math.max(0, Math.min((windowWidth * 0.295) - afterBarWidth, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
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
        urlbarSizer();
        queueMicrotask(() => {
            delayedUrlbarSizing = false;
        });
    }

    let urlbarSizerResizeObserver = new ResizeObserver(delayedUrlbarSizer);
    let urlbarSizerMutationObserver = new MutationObserver(delayedUrlbarSizer);

    //  Customize tab bar.
    let tabStrip = document.querySelector("#TabsToolbar-customization-target");

    function hideShowTabBar(minRequiredTabs = 1) {
        let tabsLength = tabbrowserTabs.querySelectorAll(".tabbrowser-tab:not([hidden])").length;
        let canHideTabBar = tabStrip.childElementCount <= 1 && tabsLength <= minRequiredTabs;
        canHideTabBar &= !document.documentElement.hasAttribute("customizing");
        tabBar.style.visibility = canHideTabBar ? "collapse" : "";
        let unpinnedTabs = tabbrowserTabs.querySelectorAll('.tabbrowser-tab:not([pinned], [hidden])').length;
        let canHideTabCloseButton = unpinnedTabs <= minRequiredTabs;
        tabbrowserTabs.querySelectorAll('.tab-close-button').forEach(button => {
            button.style.visibility = canHideTabCloseButton ? "hidden" : "";
        });
        if (tabClosing) {
            unpinnedTabs -= 1
        }
        tabbrowserTabs.style.setProperty('--tab-max-width', 100 / unpinnedTabs + '%');
    }

    let tabBarMutationObserver = new MutationObserver(() => {
        centerTabText();
        hideShowTabBar();
    });

    //  ----------------------------------------------------------------------------------------------------  //
    //  **Compact Tab bar functions**  //


    function urlbarCloseButtonHover() {
        urlbarCloseButton.setAttribute("hovered", "");
        urlbarInputContainer.addEventListener("mouseleave", inputContainerNotHover);
    }
    
    function inputContainerNotHover() {
        urlbarCloseButton.removeAttribute("hovered");
        urlbarInputContainer.removeEventListener("mouseleave", inputContainerNotHover);
    }

    function hideShowUrlbarCloseButton() {
        let unpinnedTabs = tabbrowserTabs.querySelectorAll('.tabbrowser-tab:not([pinned], [hidden])').length;
        if (tabClosing) {
            unpinnedTabs -= 1
        }
        let canHideUrlbarCloseButton = unpinnedTabs <= 1;
        urlbarCloseButton.style.display = canHideUrlbarCloseButton ? "none" : "";
    }

    //  Move URL bar to the position of selected tab.

    let selectedTabResizeObserver = new ResizeObserver(delayedUpdateSelectedTabPosition);

    function updateSelectedTabPosition() {
        if (document.documentElement.hasAttribute("customizing")) {
            return;
        }

        if (!selectedTab || selectedTab.hasAttribute("movingtab") || selectedTab.hasAttribute("pinned") || selectedTab.hasAttribute("hidden")) {
            urlbarToolbarItem.style.display = 'none';
            return;
        }

        let tabRect = selectedTab.getBoundingClientRect();
        urlbarToolbarItem.style.display = '';
        urlbarToolbarItem.style.width = `${tabRect.width}px`;
        urlbarToolbarItem.style.height = `${tabRect.height}px`;

        if (tabbrowserTabs.hasAttribute("overflow")) {
            let tabsRect = tabScrollbox.getBoundingClientRect();
            urlbarToolbarItem.style.left = `${Math.min(
                Math.max(tabsRect.left + 36, tabRect.left), 
                tabsRect.right - tabRect.width - 36
            )}px`;
        } else {
            urlbarToolbarItem.style.left = `${tabRect.left}px`;
        }
    }

    function updateSelectedTab() {
        let newSelectedTab = tabbrowserTabs.querySelector('.tabbrowser-tab[selected]');
        if (newSelectedTab !== selectedTab) {
            selectedTab = newSelectedTab;
            selectedTabCloseButton = selectedTab.querySelector('.tab-close-button');
            selectedTabResizeObserver.disconnect();
            selectedTabResizeObserver.observe(selectedTab);
            updateSelectedTabPosition();
        }
    }

    let delayedTabPositionUpdating = false;

    function delayedUpdateSelectedTabPosition() {
        if (delayedTabPositionUpdating) {
            return;
        }
    
        delayedTabPositionUpdating = true;
        updateSelectedTabPosition();
        queueMicrotask(() => {
            delayedTabPositionUpdating = false;
        });
    }

    function tabsSizer() {
        if (document.documentElement.hasAttribute("customizing")) {
            let flexibleSpaces = navBarTarget.querySelectorAll("toolbarspring");
            flexibleSpaces.forEach(space => {
                space.style.minWidth = '';
                space.style.maxWidth = '';
            });
            tabbrowserTabs.style.maxWidth = '';
            tabbrowserTabs.style.setProperty('--tab-max-width', '');
            tabbrowserTabs.style.marginLeft = '';
            tabbrowserTabs.style.marginRight = '';
            return;
        }

        let windowWidth = navBar.clientWidth
        let leftFlexibleSpaces = [];
        let rightFlexibleSpaces = [];
        let beforeBarWidth = 8;
        let afterBarWidth = 0;

        let isLeft = true;
        let isRight = false;
        for (let element of navBarTarget.children) {
            if (element === tabbrowserTabs) {
                isLeft = false;
                isRight = true;
                continue;
            }
            if (element === urlbarToolbarItem) {
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
    
        if (parseInt(window.getComputedStyle(windowControls[0]).order, 10) > 0) {
            afterBarWidth += windowControls[0].clientWidth;
        } else {
            beforeBarWidth += windowControls[0].clientWidth;
        }
    
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
                afterBarWidth += element.clientWidth;
            }
        }

        let restBarWidth = windowWidth - beforeBarWidth - afterBarWidth;
        let unselectedTabs = tabScrollbox.querySelectorAll('.tabbrowser-tab:not([selected]):not([pinned]):not([hidden])').length;
        let selectedTabs = tabScrollbox.querySelectorAll('.tabbrowser-tab[selected]:not([pinned]):not([hidden])').length;
        let pinnedTabs = tabScrollbox.querySelectorAll('.tabbrowser-tab[pinned]:not([hidden])').length;
        
        if (tabClosing) {
            unselectedTabs -= 1;
        }
        
        let tabFreeMargin = (0.01 * restBarWidth) / (unselectedTabs + selectedTabs + (0.25 * pinnedTabs)) + 3;
        let tabMargin = Math.max(4, Math.min(tabFreeMargin, 6));
        tabbrowserTabs.style.setProperty('--tab-margin', tabMargin + 'px');
        
        let tabsNotSelectedFreeWidth = pinnedTabs * (32 + (2 * tabMargin)) + unselectedTabs * (148 + (2 * tabMargin));
        let tabsMaxFreeWidth = Math.max((windowWidth * (0.41 - (unselectedTabs * 0.0425) - (pinnedTabs * 0.01))), (240 + (2 * tabMargin))) + tabsNotSelectedFreeWidth;
        let tabsMaxLimitedWidth = tabsNotSelectedFreeWidth + selectedTabs * (480 + (2 * tabMargin));
        let oneTabMaxWidth = selectedTabs ? windowWidth * 0.41 : 0;
        let tabsMaxWidth = Math.max(Math.min(tabsMaxFreeWidth, tabsMaxLimitedWidth), oneTabMaxWidth);
        let tabMaxWidth = Math.max((tabsMaxWidth - tabsNotSelectedFreeWidth - (2 * tabMargin)), 240);
        tabbrowserTabs.style.maxWidth = tabsMaxWidth + 'px';
        tabbrowserTabs.style.setProperty('--tab-max-width', tabMaxWidth + 'px');

        let leftFlexibleSpaceCount = leftFlexibleSpaces.length;
        let rightFlexibleSpaceCount = rightFlexibleSpaces.length;

        if (beforeBarWidth > afterBarWidth) {
            if (leftFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginLeft = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) + 'px';
            } else {
                tabbrowserTabs.style.marginLeft = '0';
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + 'px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginRight = 'auto';
            } else {
                tabbrowserTabs.style.marginRight = '0';
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = '0px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
        } else {
            if (leftFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginLeft = 'auto';
            } else {
                tabbrowserTabs.style.marginLeft = '0';
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = '0px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginRight = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) + 'px';
            } else {
                tabbrowserTabs.style.marginRight = '0';
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + 'px';
                    space.style.maxWidth = spaceWidth + 'px';
                }
            }
        }

        let canHideScroll = restBarWidth - tabsMaxWidth > 1;
        tabShadowRoot.querySelector("#scrollbutton-up").style.visibility = canHideScroll ? "collapse" : "";
        tabShadowRoot.querySelector("#scrollbutton-down").style.visibility = canHideScroll ? "collapse" : "";
    }
    
    let delayedtabsSizer = false;
    let delayedcustomizing = false;
    function delayedtabsSizerHandler() {
        if (delayedtabsSizer) {
            return;
        }

        delayedtabsSizer = true;
        if (delayedcustomizing) {
            tabsSizer();
            requestAnimationFrame(() => {
                delayedtabsSizer = false;
            });
        } else {
            tabsSizer();
            queueMicrotask(() => {
                delayedtabsSizer = false;
            });
        }

        if (document.documentElement.hasAttribute("customizing")) {
            delayedcustomizing = true;
        } else {
            requestAnimationFrame(() => {
                delayedcustomizing = false;
            });
        }
    }

    let tabAnimate = true;
    let tabsSizerResizeObserver = new ResizeObserver(() => {
        if (!tabAnimate) {
            return;
        }
        if (tabAnimate) {
            tabAnimate = false;
            tabbrowserTabs.style.setProperty('--tab-transition', 'none');
            requestAnimationFrame(() => {
                tabAnimate = true;
                requestAnimationFrame(() => {
                    if (tabAnimate) {
                        tabbrowserTabs.style.setProperty('--tab-transition', '');
                    }
                });
            });
        }
        delayedtabsSizerHandler();
        delayedUpdateSelectedTabPosition();
    })
    let tabsSizerMutationObserver = new MutationObserver(() => {
        if (!tabAnimate) {
            return;
        }
        centerTabText();
        delayedtabsSizerHandler();
        delayedUpdateSelectedTabPosition();
        hideShowUrlbarCloseButton();
    })

    function tabCloseButtonHover(event) {
        if (!event.target.matches(".tab-close-button")) {return;}
        event.target.parentElement.setAttribute("hovered", "");
    }

    function tabNotHover(event) {
        if (!event.target.matches(".tabbrowser-tab")) {return;}
        let closeButton = event.target.querySelector(".tab-close-button");
        closeButton?.parentElement.removeAttribute("hovered");
    }


    //  ----------------------------------------------------------------------------------------------------  //
    //  **Setup Tab bar functions**  //

    //  Add touch options on Mac.
    if (navigator.platform.startsWith("Mac")) {
        let uidensityMenuMutationObserver = new MutationObserver(() => {
            let uidensityMenu = document.querySelector("#customization-uidensity-menu");
            if (uidensityMenu) {
                let normalItem = uidensityMenu.querySelector("#customization-uidensity-menuitem-normal");
                if (normalItem) {
                    let touchItem = normalItem.cloneNode(true);
                    touchItem.setAttribute("id", "customization-uidensity-menuitem-touch");
                    touchItem.setAttribute("data-l10n-id", "customize-mode-uidensity-menu-touch");
                    uidensityMenu.append(touchItem);
                    uidensityMenuMutationObserver.disconnect();
                }
            }
        })
        uidensityMenuMutationObserver.observe(document.querySelector("body"), {
            childList: true
        });
    }

    //  Setting uidensity attributes.
    let tabPinHideShowTabBar = () => hideShowTabBar(1);
    let tabClosingHideShowTabBar = () => hideShowTabBar(2);
    let currentUidensity = null;
    let uidensity = null;
    function setUidensity() {
        uidensity = document.documentElement.getAttribute('uidensity');
        switch (uidensity) {
            case 'touch':
                document.documentElement.setAttribute('uidensity', 'mac');
                //  fallthrough,
            case null:
                if (currentUidensity !== 'separate') {
                    urlbarCloseButton.removeEventListener("mouseenter", urlbarCloseButtonHover);
                    tabScrollbox.removeEventListener("mouseenter", tabCloseButtonHover, true);
                    tabScrollbox.removeEventListener("mouseleave", tabNotHover, true);
                    selectedTabResizeObserver.disconnect();
                    tabScrollbox.removeEventListener("scroll", delayedUpdateSelectedTabPosition);
                    tabbrowserTabs.removeEventListener('TabSelect', updateSelectedTab);
                    tabsSizerResizeObserver.disconnect();
                    tabsSizerMutationObserver.disconnect();
                    urlbarToolbarItem.style.cssText = '';
                    tabbrowserTabs.style.cssText = '';
                    tabShadowRoot.querySelector("scrollbox").style.borderRadius = "";
                    tabShadowRoot.querySelector("#scrollbutton-up").style.visibility = "";
                    tabShadowRoot.querySelector("#scrollbutton-down").style.visibility = "";
    
                    moveBookmarkBar();
                    Services.prefs.addObserver("browser.toolbars.bookmarks.visibility", moveBookmarkBar);
                    if (tabbrowserTabs.parentElement !== tabStrip) {
                        tabStrip.append(tabbrowserTabs);
                    }
                    urlbarSizer();
                    urlbarSizerResizeObserver.observe(navBar);
                    urlbarSizerMutationObserver.observe(navBar, {subtree: true, attributes: true});
                    hideShowTabBar();
                    tabBarMutationObserver.observe(tabbrowserTabs, {subtree: true, childList: true});
                    gBrowser.tabContainer.addEventListener("TabClose", tabClosingHideShowTabBar);
                    gBrowser.tabContainer.addEventListener("TabPinned", tabPinHideShowTabBar);
                    gBrowser.tabContainer.addEventListener("TabUnpinned", tabPinHideShowTabBar);

                    currentUidensity = 'separate';
                }
                break;
            case 'compact':
                document.documentElement.setAttribute('uidensity', 'mix');

                if (currentUidensity !== 'compact') {
                    Services.prefs.removeObserver("browser.toolbars.bookmarks.visibility", moveBookmarkBar);
                    urlbarSizerResizeObserver.disconnect();
                    urlbarSizerMutationObserver.disconnect();
                    tabBarMutationObserver.disconnect();
                    gBrowser.tabContainer.removeEventListener("TabClose", tabClosingHideShowTabBar);
                    gBrowser.tabContainer.removeEventListener("TabPinned", tabPinHideShowTabBar);
                    gBrowser.tabContainer.removeEventListener("TabUnpinned", tabPinHideShowTabBar);
                    urlbarToolbarItem.style.cssText = '';
                    tabShadowRoot.querySelector("scrollbox").style.borderRadius = "var(--tab-border-radius)";
    
                    urlbarCloseButton.addEventListener("mouseenter", urlbarCloseButtonHover);
                    tabScrollbox.addEventListener("mouseenter", tabCloseButtonHover, true);
                    tabScrollbox.addEventListener("mouseleave", tabNotHover, true);
                    if (urlbarToolbarItem.nextElementSibling !== tabbrowserTabs) {
                        if (urlbarToolbarItem.parentElement === document.querySelector('#wrapper-urlbar-container')) {
                            if (urlbarToolbarItem.parentElement.nextElementSibling !== tabbrowserTabs) {
                                urlbarToolbarItem.parentElement.after(tabbrowserTabs);
                            }
                        } else {
                            urlbarToolbarItem.after(tabbrowserTabs);
                        }
                    }
                    if (bookmarkBar.previousElementSibling !== navBar) {
                        bookmarkBar.after(tabBar);
                    }
                    bookmarkBar.setAttribute("bookmark-show", "always");
                    selectedTabResizeObserver.observe(selectedTab);
                    updateSelectedTab()
                    updateSelectedTabPosition();
                    tabScrollbox.addEventListener("scroll", delayedUpdateSelectedTabPosition);
                    tabbrowserTabs.addEventListener('TabSelect', updateSelectedTab);
                    tabsSizer();
                    tabsSizerResizeObserver.observe(navBar);
                    tabsSizerMutationObserver.observe(navBar, {subtree: true, childList: true, attributes: true});
                    hideShowTabBar(0);

                    currentUidensity = 'compact';
                }
                break;
            default:
                break;
        }
    }

    setUidensity();
    (new MutationObserver(setUidensity)).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['uidensity'],
    });
});
