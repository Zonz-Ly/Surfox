// @-ts-nocheck - Tested on Firefox 133.0.3.

Services.prefs.setBoolPref("svg.context-properties.content.enabled", true);
Services.prefs.setBoolPref("layout.css.light-dark.enabled", true);
Services.prefs.setBoolPref("layout.css.nesting.enabled", true);
Services.prefs.setBoolPref("browser.compactmode.show", true);
Services.prefs.setBoolPref("browser.touchmode.auto", false);
Services.prefs.setBoolPref("browser.urlbar.scotchBonnet.enableOverride", false);
Services.prefs.setBoolPref("browser.tabs.groups.enabled", false);
if (!Services.prefs.prefHasUserValue("userChrome.Surfox.firstRun")) {
    Services.prefs.setBoolPref("userChrome.Surfox.firstRun", true);
    Services.prefs.setBoolPref("extensions.unifiedExtensions.enabled", false);
    Services.prefs.setBoolPref("userChrome.menuButton.enabled", false);
    Services.prefs.setBoolPref("userChrome.urlbar.starButton.enabled", false);
    Services.prefs.setBoolPref("userChrome.windowControls.macStyle", false);
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
    let tabsArrowScrollBox = tabbrowserTabs.querySelector("#tabbrowser-arrowscrollbox");
    let tabShadowRoot = tabsArrowScrollBox.shadowRoot;
    let tabOverflowIndicator = tabShadowRoot.querySelectorAll("spacer");
    tabOverflowIndicator.forEach(spacer => spacer.remove());

    //  Remove star button if need.
    try {
        if (!Services.prefs.getBoolPref("browser.tabs.tabmanager.enabled")) {
            document.querySelector("#alltabs-button").remove();
        }
    } catch(e) {}

    //  Customize search bars.
    let urlbarContainer = document.querySelector("#urlbar-container");
    let urlbar = urlbarContainer.querySelector("#urlbar");
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
    let selectedTab = tabbrowserTabs.querySelector(".tabbrowser-tab[selected]");
    let selectedTabCloseButton = selectedTab.querySelector(".tab-close-button");
    let urlbarCloseButton = document.createElement("box");
    urlbarCloseButton.classList.add("tab-close-button", "close-icon");
    urlbarCloseButton.addEventListener("click", () => selectedTabCloseButton.click());
    urlbarInputContainer.prepend(urlbarCloseButton);
    
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
                if (element === urlbarCloseButton) {
                    continue;
                }
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
        spacer.style.setProperty("--span-width", space + "px");
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
        tabClosingObserver.observe(tabsArrowScrollBox, {subtree: true, childList: true});
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
            urlbarContainer.style.marginLeft = "4px";
            urlbarContainer.style.marginRight = "4px";
            urlbarContainer.style.minWidth ="";
            urlbarContainer.style.maxWidth ="";
            let flexibleSpaces = navBarTarget.querySelectorAll("toolbarspring");
            flexibleSpaces.forEach(space => {
                space.style.minWidth = "";
                space.style.maxWidth = "";
            });
            return;
        }

        let windowWidth = navBar.clientWidth;
        let urlbarWidth = windowWidth * 0.41;
        urlbarContainer.style.maxWidth = urlbarWidth - 8 + "px";
        let leftFlexibleSpaces = [];
        let rightFlexibleSpaces = [];
        let navBarTargetComputedStyle = window.getComputedStyle(navBarTarget);
        let beforeBarWidth = parseFloat(navBarTargetComputedStyle.paddingLeft);
        let afterBarWidth = parseFloat(navBarTargetComputedStyle.paddingRight);

        let isLeft = true;
        let isRight = false;
        for (let element of navBarTarget.children) {
            if (element === urlbarContainer) {
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
            if (element.matches("splitter")) {
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
        urlbarContainer.style.minWidth = 
        (restBarWidth < urlbarWidth || navBarTarget.querySelector("#personal-bookmarks")) 
        ? urlbarWidth - 8 + "px" 
        : "";    

        let leftFlexibleSpaceCount = leftFlexibleSpaces.length;
        let rightFlexibleSpaceCount = rightFlexibleSpaces.length;

        if (beforeBarWidth > afterBarWidth) {
            if (leftFlexibleSpaceCount === 0) {
                urlbarContainer.style.marginLeft = Math.max(4, Math.min((windowWidth * 0.295) - beforeBarWidth + 4, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + "px";
            } else {
                urlbarContainer.style.marginLeft = "4px";
                let spaceWidth = Math.max(0, Math.min((windowWidth * 0.295) - beforeBarWidth, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + "px";
                    space.style.maxWidth = spaceWidth + "px";
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                if ((windowWidth * 0.295) - afterBarWidth > 0 && (windowWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarContainer.style.marginRight = "auto";
                } else {
                    urlbarContainer.style.marginRight = "4px";
                }
            } else {
                urlbarContainer.style.marginRight = "4px";
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = "0px";
                    space.style.maxWidth = "none";
                }
            }
        } else {
            if (leftFlexibleSpaceCount === 0) {
                if ((windowWidth * 0.295) - beforeBarWidth > 0 && (windowWidth * 0.59) - beforeBarWidth - afterBarWidth > 0) {
                    urlbarContainer.style.marginLeft = "auto";
                } else {
                    urlbarContainer.style.marginLeft = "4px";
                }
            } else {
                urlbarContainer.style.marginLeft = "4px";
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = "0px";
                    space.style.maxWidth = "none";
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                urlbarContainer.style.marginRight = Math.max(4, Math.min((windowWidth * 0.295) - afterBarWidth + 4, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth + 4)) + "px";
            } else {
                urlbarContainer.style.marginRight = "4px";
                let spaceWidth = Math.max(0, Math.min((windowWidth * 0.295) - afterBarWidth, (windowWidth * 0.59) - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + "px";
                    space.style.maxWidth = spaceWidth + "px";
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
        requestAnimationFrame(() => {
            delayedUrlbarSizing = false;
        });
    }

    let urlbarSizerResizeObserver = new ResizeObserver(delayedUrlbarSizer);
    let urlbarSizerMutationObserver = new MutationObserver(delayedUrlbarSizer);

    //  Customize tab bar.
    let tabStrip = document.querySelector("#TabsToolbar-customization-target");

    function hideShowTabBar(minRequiredTabs = 1) {
        let tabsLength = tabbrowserTabs.querySelectorAll(".tabbrowser-tab:not([hidden])").length;
        let canHideTabBar = 
            tabStrip.childElementCount <= 1 &&
            tabsLength <= minRequiredTabs &&
            !document.documentElement.hasAttribute("customizing");
        tabBar.style.visibility = canHideTabBar ? "collapse" : "";
        let unpinnedTabs = tabbrowserTabs.querySelectorAll(".tabbrowser-tab:not([pinned], [hidden])").length;
        let canHideTabCloseButton = unpinnedTabs <= minRequiredTabs;
        tabbrowserTabs.querySelectorAll(".tab-close-button").forEach(button => {
            button.style.visibility = canHideTabCloseButton ? "hidden" : "";
        });
        if (tabClosing) {
            unpinnedTabs -= 1;
        }
        tabbrowserTabs.style.setProperty("--tab-max-width", 100 / unpinnedTabs + "%");
    }

    let tabBarMutationObserver = new MutationObserver(() => {
        centerTabText();
        hideShowTabBar();
    });

    //  ----------------------------------------------------------------------------------------------------  //
    //  **Compact Tab bar functions**  //

    function hideShowUrlbarCloseButton() {
        let unpinnedTabs = tabbrowserTabs.querySelectorAll(".tabbrowser-tab:not([pinned], [hidden])").length;
        if (tabClosing) {
            unpinnedTabs -= 1;
        }
        let canHideUrlbarCloseButton = unpinnedTabs <= 1;
        urlbarCloseButton.style.display = canHideUrlbarCloseButton ? "none" : "";
        if (canHideUrlbarCloseButton) {
            urlbarInputContainer.removeAttribute("hovered");
        }
    }

    //  Move URL bar to the position of selected tab.

    let tabScrollUpButton = tabShadowRoot.querySelector("#scrollbutton-up")
    let tabScrollDownButton = tabShadowRoot.querySelector("#scrollbutton-down")
    let tabMargin = 6;
    function tabsSizer() {
        if (document.documentElement.hasAttribute("customizing")) {
            let flexibleSpaces = navBarTarget.querySelectorAll("toolbarspring");
            flexibleSpaces.forEach(space => {
                space.style.minWidth = "";
                space.style.maxWidth = "";
            });
            tabbrowserTabs.style.maxWidth = "";
            tabbrowserTabs.style.setProperty("--tab-max-width", "");
            tabbrowserTabs.style.marginLeft = "";
            tabbrowserTabs.style.marginRight = "";
            tabScrollUpButton.style.visibility = "";
            tabScrollDownButton.style.visibility = "";
            return;
        }

        let windowWidth = navBar.clientWidth;
        let leftFlexibleSpaces = [];
        let rightFlexibleSpaces = [];
        let navBarTargetComputedStyle = window.getComputedStyle(navBarTarget);
        let beforeBarWidth = parseFloat(navBarTargetComputedStyle.paddingLeft);
        let afterBarWidth = parseFloat(navBarTargetComputedStyle.paddingRight);

        let isLeft = true;
        let isRight = false;
        for (let element of navBarTarget.children) {
            if (element === tabbrowserTabs) {
                isLeft = false;
                isRight = true;
                continue;
            }
            if (element === urlbarContainer) {
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
            if (element.matches("splitter")) {
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
        let unselectedTabs = tabsArrowScrollBox.querySelectorAll(".tabbrowser-tab:not([selected]):not([pinned]):not([hidden])").length;
        let selectedTabs = tabsArrowScrollBox.querySelectorAll(".tabbrowser-tab[selected]:not([pinned]):not([hidden])").length;
        let pinnedTabs = tabsArrowScrollBox.querySelectorAll(".tabbrowser-tab[pinned]:not([hidden])").length;
        
        if (tabClosing) {
            unselectedTabs -= 1;
        }
        
        let tabFreeMargin = (0.01 * restBarWidth) / (unselectedTabs + selectedTabs + (0.25 * pinnedTabs)) + 3;
        tabMargin = Math.max(4, Math.min(tabFreeMargin, 6));
        tabbrowserTabs.style.setProperty("--tab-margin", tabMargin + "px");
        
        let tabsNotSelectedFreeWidth = pinnedTabs * (32 + (2 * tabMargin)) + unselectedTabs * (148 + (2 * tabMargin));
        let tabsMaxFreeWidth = Math.max((windowWidth * (0.41 - (unselectedTabs * 0.0425) - (pinnedTabs * 0.01))), (240 + (2 * tabMargin))) + tabsNotSelectedFreeWidth;
        let tabsMaxLimitedWidth = tabsNotSelectedFreeWidth + selectedTabs * (480 + (2 * tabMargin));
        let oneTabMaxWidth = selectedTabs ? windowWidth * 0.41 : 0;
        let tabsMaxWidth = Math.max(Math.min(tabsMaxFreeWidth, tabsMaxLimitedWidth), oneTabMaxWidth);
        let tabMaxWidth = Math.max((tabsMaxWidth - tabsNotSelectedFreeWidth - (2 * tabMargin)), 240);
        tabbrowserTabs.style.maxWidth = tabsMaxWidth + "px";
        tabbrowserTabs.style.setProperty("--tab-max-width", tabMaxWidth + "px");

        let leftFlexibleSpaceCount = leftFlexibleSpaces.length;
        let rightFlexibleSpaceCount = rightFlexibleSpaces.length;

        if (beforeBarWidth > afterBarWidth) {
            if (leftFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginLeft = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) + "px";
            } else {
                tabbrowserTabs.style.marginLeft = "0";
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + "px";
                    space.style.maxWidth = spaceWidth + "px";
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginRight = "auto";
            } else {
                tabbrowserTabs.style.marginRight = "0";
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = "0px";
                    space.style.maxWidth = spaceWidth + "px";
                }
            }
        } else {
            if (leftFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginLeft = "auto";
            } else {
                tabbrowserTabs.style.marginLeft = "0";
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - beforeBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / leftFlexibleSpaceCount;
                for (let space of leftFlexibleSpaces) {
                    space.style.minWidth = "0px";
                    space.style.maxWidth = spaceWidth + "px";
                }
            }
            if (rightFlexibleSpaceCount === 0) {
                tabbrowserTabs.style.marginRight = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) + "px";
            } else {
                tabbrowserTabs.style.marginRight = "0";
                let spaceWidth = Math.max(0, Math.min((windowWidth - tabsMaxWidth) / 2 - afterBarWidth, windowWidth - tabsMaxWidth - beforeBarWidth - afterBarWidth)) / rightFlexibleSpaceCount;
                for (let space of rightFlexibleSpaces) {
                    space.style.minWidth = spaceWidth + "px";
                    space.style.maxWidth = spaceWidth + "px";
                }
            }
        }

        let tabsMinWidth = pinnedTabs * (32 + (2 * tabMargin)) + unselectedTabs * (74 + (2 * tabMargin)) + selectedTabs * (240 + (2 * tabMargin));
        let showScrollButtons = restBarWidth < tabsMinWidth;
        tabScrollUpButton.style.visibility = showScrollButtons ? "" : "collapse";
        tabScrollDownButton.style.visibility = showScrollButtons ? "" : "collapse";
        tabbrowserTabs.style.minWidth = showScrollButtons && selectedTabs ? 288 + tabMargin * 6 + "px" : "";
    }
    
    let delayedtabsSizer = false;
    function delayedtabsSizerHandler() {
        if (delayedtabsSizer) {
            return;
        }

        delayedtabsSizer = true;
        tabsSizer();
        requestAnimationFrame(() => {
            delayedtabsSizer = false;
        });
    }

    let tabAnimate = true;
    let tabsSizerResizeObserver = new ResizeObserver(() => {
        if (!tabAnimate) {
            return;
        }
        if (tabAnimate) {
            tabAnimate = false;
            tabbrowserTabs.style.setProperty("--tab-transition", "none");
            requestAnimationFrame(() => {
                tabAnimate = true;
                requestAnimationFrame(() => {
                    if (tabAnimate) {
                        tabbrowserTabs.style.setProperty("--tab-transition", "");
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

    let selectedTabResizeObserver = new ResizeObserver(delayedUpdateSelectedTabPosition);

    function updateSelectedTabPosition() {
        if (document.documentElement.hasAttribute("customizing")) {
            return;
        }

        if (!selectedTab || selectedTab.hasAttribute("pinned") || selectedTab.hasAttribute("hidden")) {
            urlbarContainer.style.display = "none";
            return;
        }

        let tabRect = selectedTab.getBoundingClientRect();
        urlbarContainer.style.display = "";
        urlbarContainer.style.width = `${tabRect.width}px`;
        urlbarContainer.style.height = `${tabRect.height}px`;

        if (tabbrowserTabs.hasAttribute("overflow")) {
            let tabsRect = tabsArrowScrollBox.getBoundingClientRect();
            urlbarContainer.style.left = `${Math.min(
                Math.max(tabsRect.left + 24 + (3 * tabMargin), tabRect.left), 
                tabsRect.right - tabRect.width - 24 - (3 * tabMargin)
            )}px`;
        } else {
            urlbarContainer.style.left = `${tabRect.left}px`;
        }
    }

    function updateSelectedTab() {
        let newSelectedTab = tabbrowserTabs.querySelector(".tabbrowser-tab[selected]");
        if (newSelectedTab !== selectedTab) {
            selectedTab = newSelectedTab;
            selectedTabCloseButton = selectedTab.querySelector(".tab-close-button");
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


    //  ----------------------------------------------------------------------------------------------------  //
    //  **Setup Tab bar functions**  //


    const setURLBarForwardsEventsToTab = (() => {
        //  MozTabbrowserTabs handles the wheel event manually to scroll the tabs — which doesn’t rely on
        //  the default action and the event target — so we can directly forward the event to the tabs.
        function forwardWheel(event) {
            if (!urlbarContainer.matches(":focus-within")) {
                let copyEvent = new WheelEvent(event.type, event);
                tabsArrowScrollBox.dispatchEvent(copyEvent);
                event.preventDefault();
            }
        }

        //  Mid-click to close tab.
        function forwardClickCapture(event) {
            if (event.button === 1) {
                let copyEvent = new MouseEvent(event.type, event);
                selectedTab.dispatchEvent(copyEvent);
            }
        }

        //  FireFox localizes menu items lazily on the first shown.
        function forwardContextMenuCaptureOnce(event) {
            let copyEvent = new Event(event.type, event);
            selectedTab.dispatchEvent(copyEvent);
            urlbarContainer.removeEventListener("contextmenu", forwardContextMenuCaptureOnce, true);
        }

        function urlbarCloseButtonHover() {
            urlbarInputContainer.setAttribute("hovered", "");
            urlbarInputContainer.addEventListener("mouseleave", inputContainerNotHover);
        }
        
        function inputContainerNotHover() {
            urlbarInputContainer.removeAttribute("hovered");
            urlbarInputContainer.removeEventListener("mouseleave", inputContainerNotHover);
        }

        function tabCloseButtonHover(event) {
            if (!event.target.matches(".tab-close-button")) {return;}
            event.target.parentElement.setAttribute("hovered", "");
        }
    
        function tabNotHover(event) {
            if (!event.target.matches(".tabbrowser-tab")) {return;}
            let closeButton = event.target.querySelector(".tab-close-button");
            closeButton?.parentElement.removeAttribute("hovered");
        }

        return function setURLBarContainerForwardsEventsToTab(forward) {
            if (forward) {
                urlbarContainer.addEventListener("wheel", forwardWheel);
                urlbarContainer.addEventListener("click", forwardClickCapture, true);
                urlbarContainer.addEventListener("contextmenu", forwardContextMenuCaptureOnce, true);
                urlbarInputContainer.setAttribute("context", "tabContextMenu");
                urlbarCloseButton.addEventListener("mouseenter", urlbarCloseButtonHover);
                tabsArrowScrollBox.addEventListener("mouseenter", tabCloseButtonHover, true);
                tabsArrowScrollBox.addEventListener("mouseleave", tabNotHover, true);
            } else {
                urlbarContainer.removeEventListener("wheel", forwardWheel);
                urlbarContainer.removeEventListener("click", forwardClickCapture, true);
                urlbarContainer.removeEventListener("contextmenu", forwardContextMenuCaptureOnce, true);
                urlbarInputContainer.removeAttribute("context");
                urlbarCloseButton.removeEventListener("mouseenter", urlbarCloseButtonHover);
                tabsArrowScrollBox.removeEventListener("mouseenter", tabCloseButtonHover, true);
                tabsArrowScrollBox.removeEventListener("mouseleave", tabNotHover, true);
            }
        }
    })();

    //  Add touch options on Mac.
    let uidensityMenuMutationObserver = new MutationObserver(() => {
        let uidensityButton = document.querySelector("#customization-uidensity-button");
        if (uidensityButton) {
            let normalItem = uidensityButton.querySelector("#customization-uidensity-menuitem-normal");
            if (normalItem) {
                uidensityMenuMutationObserver.disconnect();
                let touchItem = uidensityButton.querySelector("#customization-uidensity-menuitem-touch");
                if (!touchItem) {
                    touchItem = normalItem.cloneNode(true);
                    touchItem.setAttribute("id", "customization-uidensity-menuitem-touch");
                    touchItem.setAttribute("data-l10n-id", "customize-mode-uidensity-menu-touch");
                    normalItem.after(touchItem);
                }
                let compactItem = uidensityButton.querySelector("#customization-uidensity-menuitem-compact");
                touchItem.after(compactItem);
                var currentLocale = navigator.language;
                setTimeout(() => {
                    switch (currentLocale) {
                        case "zh-TW":
                            uidensityButton.setAttribute("label", "分頁佈局");
                            compactItem.setAttribute("label", "精簡");
                            compactItem.setAttribute("tooltiptext", "精簡");
                            touchItem.setAttribute("label", "個別");
                            touchItem.setAttribute("tooltiptext", "個別");
                            normalItem.setAttribute("label", "個別（窄）");
                            normalItem.setAttribute("tooltiptext", "個別（窄）");
                          break;
                        case "zh-CN":
                            uidensityButton.setAttribute("label", "标签页布局");
                            compactItem.setAttribute("label", "紧凑");
                            compactItem.setAttribute("tooltiptext", "紧凑");
                            touchItem.setAttribute("label", "单独");
                            touchItem.setAttribute("tooltiptext", "单独");
                            normalItem.setAttribute("label", "单独（窄）");
                            normalItem.setAttribute("tooltiptext", "单独（窄）");
                          break;
                        default:
                            uidensityButton.setAttribute("label", "Tab layout");
                            compactItem.setAttribute("label", "Compact");
                            compactItem.setAttribute("tooltiptext", "Compact");
                            touchItem.setAttribute("label", "Separate");
                            touchItem.setAttribute("tooltiptext", "Separate");
                            normalItem.setAttribute("label", "Separate (Narrow)");
                            normalItem.setAttribute("tooltiptext", "Separate (Narrow)");
                            break;
                      }
                      touchItem.setAttribute("accesskey", "S");
                }, 500);
            }
        }
    })
    uidensityMenuMutationObserver.observe(document.body, {
        childList: true
    });

    //  Setting uidensity attributes.
    let tabsScrollBox = tabShadowRoot.querySelector("scrollbox");
    let tabPinHideShowTabBar = () => hideShowTabBar(1);
    let tabClosingHideShowTabBar = () => hideShowTabBar(2);
    let currentUidensity = null;
    let uidensity = null;
    let tabsPlaceHolder = document.createElement("span");
    tabsPlaceHolder.style.display = "none";
    tabbrowserTabs.setAttribute("overflows", "false");
    function setUidensity() {
        uidensity = document.documentElement.getAttribute("uidensity");
        switch (uidensity) {
            case "touch":
                document.documentElement.setAttribute("uidensity", "mac");
                //  fallthrough,
            case null:
                if (currentUidensity !== "separate") {
                    selectedTabResizeObserver.disconnect();
                    tabsArrowScrollBox.removeEventListener("scroll", delayedUpdateSelectedTabPosition);
                    tabbrowserTabs.removeEventListener("TabSelect", updateSelectedTab);
                    tabsSizerResizeObserver.disconnect();
                    tabsSizerMutationObserver.disconnect();
                    setURLBarForwardsEventsToTab(false);
                    urlbarContainer.style.cssText = "";
                    tabbrowserTabs.style.cssText = "";
                    tabsScrollBox.style.borderRadius = "";
                    tabScrollUpButton.style.visibility = "";
                    tabScrollDownButton.style.visibility = "";
    
                    moveBookmarkBar();
                    Services.prefs.addObserver("browser.toolbars.bookmarks.visibility", moveBookmarkBar);
                    if (tabbrowserTabs.parentElement !== tabStrip) {
                        tabsPlaceHolder.replaceWith(tabbrowserTabs);
                    }
                    urlbarSizer();
                    urlbarSizerResizeObserver.observe(navBar);
                    urlbarSizerMutationObserver.observe(navBar, {subtree: true, attributes: true});
                    hideShowTabBar();
                    tabBarMutationObserver.observe(tabbrowserTabs, {subtree: true, childList: true});
                    gBrowser.tabContainer.addEventListener("TabClose", tabClosingHideShowTabBar);
                    gBrowser.tabContainer.addEventListener("TabPinned", tabPinHideShowTabBar);
                    gBrowser.tabContainer.addEventListener("TabUnpinned", tabPinHideShowTabBar);

                    currentUidensity = "separate";
                }
                break;
            case "compact":
                document.documentElement.setAttribute("uidensity", "mix");

                if (currentUidensity !== "compact") {
                    Services.prefs.removeObserver("browser.toolbars.bookmarks.visibility", moveBookmarkBar);
                    urlbarSizerResizeObserver.disconnect();
                    urlbarSizerMutationObserver.disconnect();
                    tabBarMutationObserver.disconnect();
                    gBrowser.tabContainer.removeEventListener("TabClose", tabClosingHideShowTabBar);
                    gBrowser.tabContainer.removeEventListener("TabPinned", tabPinHideShowTabBar);
                    gBrowser.tabContainer.removeEventListener("TabUnpinned", tabPinHideShowTabBar);
                    urlbarContainer.style.cssText = "";
                    tabsScrollBox.style.borderRadius = "var(--tab-border-radius)";

                    tabbrowserTabs.after(tabsPlaceHolder);
                    if (urlbarContainer.parentElement.matches("#wrapper-urlbar-container")) {
                            urlbarContainer.parentElement.after(tabbrowserTabs);
                    } else {
                        urlbarContainer.after(tabbrowserTabs);
                    }

                    if (bookmarkBar.previousElementSibling !== navBar) {
                        bookmarkBar.after(tabBar);
                    }
                    bookmarkBar.setAttribute("bookmark-show", "always");
                    selectedTabResizeObserver.observe(selectedTab);
                    updateSelectedTab()
                    updateSelectedTabPosition();
                    tabsArrowScrollBox.addEventListener("scroll", delayedUpdateSelectedTabPosition);
                    tabbrowserTabs.addEventListener("TabSelect", updateSelectedTab);
                    tabsSizer();
                    tabsSizerResizeObserver.observe(navBar);
                    tabsSizerMutationObserver.observe(navBar, {subtree: true, childList: true, attributes: true});
                    hideShowTabBar(0);
                    setURLBarForwardsEventsToTab(true);

                    currentUidensity = "compact";
                }
                break;
            default:
                break;
        }
    }

    setUidensity();
    (new MutationObserver(setUidensity)).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["uidensity"],
    });
});
