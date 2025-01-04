/*  Tested on Firefox 133.0.3  */

/*  Delete this text to get Firefox default text color (especially it will appear darker in light mode). */
:root {
    --input-color: light-dark( rgba(0, 0, 0, .8), rgb(255, 255, 255) ) !important;
    --toolbox-non-lwt-textcolor: var(--input-color) !important;
    --lwt-text-color: var(--input-color) !important;
    --urlbarView-highlight-color: var(--input-color) !important;
    --arrowpanel-color: var(--input-color) !important;
    --sidebar-text-color: var(--input-color) !important;
    --tab-selected-textcolor: var(--input-color) !important;
    --toolbar-color: var(--input-color) !important;
    --toolbar-field-color: var(--input-color) !important;
    --toolbar-field-focus-color: var(--input-color) !important;
    --newtab-text-primary-color: var(--input-color) !important;
    --newtab-contextual-text-primary-color: var(--input-color) !important;
    --toolbar-non-lwt-textcolor: var(--input-color) !important;
    --toolbox-non-lwt-textcolor-inactive: var(--input-color) !important;
    --panel-banner-item-color: var(--input-color) !important;
    --button-text-color: var(--input-color) !important;
    --button-text-color-hover: var(--input-color) !important;
    --button-text-color-active: var(--input-color) !important;
    --button-text-color-disabled: var(--input-color) !important;
    --toolbar-color: var(--input-color) !important;
    @media (prefers-color-scheme: dark) {
        --toolbar-color: rgb(255, 255, 255) !important;
    }
}

/*  Delete until the next comment to get Firefox default background color (especially it will appear slightly bluish in dark mode).  */
:root {
    --button-background-color: light-dark( rgba(0, 0, 0, .03), rgba(255, 255, 255, .03) ) !important;
    --button-background-color-hover: light-dark( rgba(0, 0, 0, .06), rgba(255, 255, 255, .06) ) !important;
    --button-background-color-active: light-dark( rgba(0, 0, 0, .12), rgba(255, 255, 255, .12) ) !important;
    --newtab-button-background: transparent !important;
    --button-bgcolor: var(--button-background-color) !important;
    --panel-banner-item-background-color: var(--button-background-color) !important;
    --button-background-color-disabled: var(--button-background-color) !important;
    --button-hover-bgcolor: var(--button-background-color-hover) !important;
    --newtab-element-hover-color: var(--button-background-color-hover) !important;
    --panel-item-hover-bgcolor: var(--button-background-color-hover) !important;
    --panel-banner-item-hover-bgcolor: var(--button-background-color-hover) !important;
    --toolbarbutton-hover-background: var(--button-background-color-hover) !important;
    --button-background-color-ghost-hover: var(--button-background-color-hover) !important;
    --tab-hover-background-color: var(--button-background-color-hover) !important;
    --button-active-bgcolor: var(--button-background-color-active) !important;
    --newtab-element-active-color: var(--button-background-color-active) !important;
    --panel-item-active-bgcolor: var(--button-background-color-active) !important;
    --panel-banner-item-active-bgcolor: var(--button-background-color-active) !important;
    --toolbarbutton-active-background: var(--button-background-color-active) !important;
    --button-background-color-ghost-active: var(--button-background-color-active) !important;
    --input-border-color: var(--button-background-color-active) !important;
    --urlbarView-separator-color: var(--button-background-color-active) !important;
    --sidebar-border-color: light-dark( rgb(224, 224, 224), rgb(91, 91, 91) ) !important;
    --newtab-button-static-background: light-dark(#F6F6F6, #3C3C3C) !important;
    --newtab-button-static-hover-background: light-dark(#EFEFEF, #424242) !important;
    --newtab-button-static-active-background: light-dark(#E0E0E0, #4E4E4E) !important;
    --toolbar-bgcolor: light-dark(#FDFDFD, #363636) !important;
    --input-bgcolor: light-dark(#FFFFFF, #444444) !important;
    --tabpanel-background-color: light-dark(#FDFDFD, #363636) !important;
    --newtab-background-color: var(--toolbar-bgcolor) !important;
    --toolbar-non-lwt-bgcolor: var(--toolbar-bgcolor) !important;
    --tab-selected-bgcolor: var(--toolbar-bgcolor) !important;
    --button-text-color-primary: var(--toolbar-bgcolor) !important;
    --button-text-color-primary-hover: var(--toolbar-bgcolor) !important;
    --button-text-color-primary-active: var(--toolbar-bgcolor) !important;
    --button-text-color-primary-disabled: var(--toolbar-bgcolor) !important;
    --newtab-background-color-secondary: var(--input-bgcolor) !important;
    --arrowpanel-background: var(--input-bgcolor) !important;
    --toolbar-field-focus-background-color: var(--input-bgcolor) !important;
    --urlbarView-result-button-hover-color: var(--input-bgcolor) !important;
    --toolbarbutton-icon-fill-attention-text: light-dark(rgba(0, 0, 0, .05), rgba(0, 0, 0, .3)) !important;
    --lwt-sidebar-background-color: light-dark(#FDFDFD, #1D1D1D) !important;
    --sidebar-background-color: light-dark(#FDFDFD, #1D1D1D) !important;
    --background-color-canvas: light-dark(#FFFFFF, #222222) !important;
    --background-color-box: light-dark(#FFFFFF, #272727) !important;
    --in-content-table-background: var(--background-color-box) !important;
    --chrome-content-separator-color: light-dark( rgba(0, 0, 0, .15), rgba(0, 0, 0) ) !important;
    --toolbarbutton-icon-fill: light-dark( rgba(0, 0, 0, .555), rgba(255, 255, 255, .637) ) !important;
    --toolbarbutton-disabled-opacity: .3 !important;
    --color-accent-primary: light-dark(#2266EE, #50A6FA) !important;
    --newtab-primary-action-background: var(--color-accent-primary) !important;
    --focus-outline-color: var(--color-accent-primary) !important;
    --accent-color: var(--color-accent-primary) !important;
    --button-background-color-primary: var(--color-accent-primary) !important;
    --link-color: light-dark(#0360E5, #25A0FF) !important;
    --link-color-visited: var(--link-color) !important;
    --toolbarbutton-icon-fill-attention: light-dark(#003CCA, #5EA9FF) !important;
    --download-progress-fill-color: light-dark(#3A80F7, #3267DE) !important;
    --tab-loading-fill: light-dark(#3A80F7, #3267DE) !important;
}

@media (-moz-platform: windows) and (prefers-color-scheme: dark) {
    .urlbar-input:focus::selection,
    .searchbar-textbox:focus-within::selection {
        background-color: #0078D7 !important;
  }
}

menupopup:not(.toolbar-menupopup):not([placespopup="true"]) {
    --panel-background: light-dark(#FAFAFA, #2D2D2D) !important;
    menu, menuitem {
        &:where([_moz-menuactive]:not([disabled="true"])) {
            background-color: var(--button-background-color-active) !important;
        }
        &:where([_moz-menuactive="true"][disabled="true"]) {
            background-color: transparent !important;
        }
    }
}

tooltip {
    background-color: light-dark(#FAFAFA, #2B2B2B) !important;
}

/*  Delete up to here.  */


:root {
    --urlbarView-hover-background: var(--button-background-color-hover) !important;
    --urlbarView-highlight-background: var(--button-background-color-active) !important;
    --tabbar-separator-color: light-dark( rgba(0, 0, 0, .08), rgba(255, 255, 255, .25) );
	--toolbox-non-lwt-bgcolor: var(--toolbar-bgcolor) !important;
    --lwt-accent-color: var(--toolbar-bgcolor) !important;
    --lwt-accent-color-inactive: var(--toolbox-non-lwt-bgcolor-inactive) !important;
    --inactive-titlebar-opacity: 0.5 !important;
    --inactive-window-transition: none !important;
    --toolbarbutton-outer-padding: 4px !important;
    --toolbarbutton-inner-padding: 6px !important;
    --toolbarbutton-border-radius: 6px !important;
    --button-border-radius: 6px !important;
    --tab-border-radius: 6px !important;
    --urlbar-min-height: 28px !important;
    --urlbar-margin-inline: 0px !important;
    --tab-selected-shadow: none !important;
    --tab-shadow-max-size: 0px !important;
    --tab-margin: var(--toolbarbutton-outer-padding);
    --tab-min-height: 28px !important;
    --tab-max-width: 100%;
    --tab-transition: min-width 200ms, max-width 200ms;
    @media (-moz-platform: windows) {
        /*  Make same as Windows 11  */
        --toolbox-non-lwt-bgcolor-inactive: light-dark(#F3F3F3, #202020) !important;
    }
    @media (-moz-platform: macos) {
        /*  Make same as macOS Big Sur +  */
        --toolbox-non-lwt-bgcolor-inactive: light-dark(#F0F0F0, #282828) !important;
    }
    &:-moz-window-inactive {
        --toolbar-bgcolor: var(--toolbox-non-lwt-bgcolor-inactive) !important;
    }
    &[uidensity="mix"] {
        --toolbar-field-background-color: light-dark(#D7D7D7, #5C5C5C) !important;
    }
    &:not([uidensity="mix"]) {
        --toolbar-field-background-color: light-dark(rgba(0, 0, 0, .05), rgba(0, 0, 0, .3)) !important;
    }
    &:not([uidensity]) {
        --toolbar-start-end-padding: 8px !important;
    }
    &[uidensity] {
        --toolbar-start-end-padding: 12px !important;
    }
}

#nav-bar {
    background-color: transparent !important;
    font-size: 13px !important;
    height: 42px !important;
    align-items: center !important;
    z-index: 100 !important;
    :root:not([uidensity="mix"]) & {
        --arrowpanel-border-color: var(--button-background-color-active) !important;
        --toolbar-field-border-color: var(--button-background-color-active) !important;
        --toolbar-field-background-color: transparent !important;
    }
    :root[uidensity="mix"] & {
        --arrowpanel-border-color: var(--input-bgcolor) !important;
    }
    :root[uidensity] & {
        height: 52px !important;
    }
}

#nav-bar {
    @media (-moz-platform: linux) {
	/*  Remove the 1px line at the top on Linux  */
        border-top: none !important;
    }
}

#nav-bar-customization-target {
    height: var(--urlbar-min-height) !important;
}

:root[tabsintitlebar] .browser-titlebar:-moz-window-inactive {
    opacity: 1 !important;
}

:root:not([privatebrowsingmode], [firefoxviewhidden]) :is(toolbarbutton, toolbarpaletteitem) ~ #tabbrowser-tabs, :root[privatebrowsingmode]:not([firefoxviewhidden]) :is(toolbarbutton:not(#firefox-view-button), toolbarpaletteitem:not(#wrapper-firefox-view-button)) ~ #tabbrowser-tabs {
    border-inline-start: none !important;
}

:root:not([macOSNativeFullscreen]):is([chromemargin], [inFullscreen]) #nav-bar > .titlebar-buttonbox-container {
    display: flex !important;
}

:root:not([uidensity]) .titlebar-buttonbox {
    @media (-moz-platform: macos) {
        /*  Make same as Safari's URL bar padding on Catalina −  */
        margin-inline: 14px 6px !important;
    }
    @media (-moz-platform: windows) {
        /*  Make same as Windows 11  */
        > .titlebar-button:hover {
            background-color: var(--toolbarbutton-hover-background) !important;
            &:active {
                background-color: light-dark( rgba(0, 0, 0, .025), rgba(255, 255, 255, .045) ) !important;
            }
        }
        > .titlebar-close:hover {
            stroke: white;
            background-color: #C42B1C !important;
            &:active {
                background-color: light-dark(#C84031, #B22A1B) !important;
            }
        }
    }
}

:root[uidensity] .titlebar-buttonbox {
    @media (-moz-platform: macos) {
        /*  Make same as Safari on Big Sur +  */
        margin-inline: 19px 7px !important;
    }
    @media (-moz-platform: windows) {
        padding-inline-end: calc(var(--toolbar-start-end-padding) - var(--toolbarbutton-outer-padding)) !important;
        > .titlebar-button {
            margin-inline: 4px !important;
            padding: 8px !important;
            border-radius: var(--toolbarbutton-border-radius) !important;
            &:hover {
                background-color: var(--toolbarbutton-hover-background) !important;
                &:active {
                    background-color: var(--toolbarbutton-active-background) !important;
                }
            }
        }
        > .titlebar-close:hover {
            stroke: white;
            background-color: #C42B1C !important;
            &:active {
                background-color: light-dark(#AC2619, #CB4437) !important;
            }
        }
    }
}

@media (-moz-platform: windows) {
    :root:not([uidensity]) .titlebar-buttonbox-container {
        align-self: stretch !important;
    }
}

@media (-moz-platform: linux) {
    .titlebar-buttonbox-container {
        align-self: stretch !important;
    }
}

@media (-moz-platform: windows) {
    .titlebar-min {
        list-style-image: url("data:image/svg+xml,%3Csvg width='12' height='12' fill='context-stroke' fill-opacity='context-stroke-opacity' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 6a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5z'/%3E%3C/svg%3E") !important;
        @media (resolution > 1dppx) {
            list-style-image: url("data:image/svg+xml,%3Csvg width='12' height='12' fill='context-stroke' fill-opacity='context-stroke-opacity' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 5.5a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5z'/%3E%3C/svg%3E") !important;
        }
    }

    .titlebar-max {
        list-style-image: url("data:image/svg+xml,%3Csvg width='12' height='12' fill='context-stroke' fill-opacity='context-stroke-opacity' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 1C1.677 1 1 1.677 1 2.5v7c0 .823.677 1.5 1.5 1.5h7c.823 0 1.5-.677 1.5-1.5v-7c0-.823-.677-1.5-1.5-1.5zm0 1h7c.282 0 .5.218.5.5v7c0 .282-.218.5-.5.5h-7a.493.493 0 0 1-.5-.5v-7c0-.282.218-.5.5-.5z'/%3E%3C/svg%3E") !important;
    }

    .titlebar-restore {
        list-style-image: url("data:image/svg+xml,%3Csvg width='12' height='12' fill='context-stroke' fill-opacity='context-stroke-opacity' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 2h5A1.5 1.5 45 0 1 10 3.5v5a1 1 135 0 0 1-1v-4A2.5 2.5 45 0 0 8.5 1h-4a1 1 135 0 0-1 1zM1 4.5v5A1.5 1.5 45 0 0 2.5 11h5A1.5 1.5 135 0 0 9 9.5v-5A1.5 1.5 45 0 0 7.5 3h-5A1.5 1.5 135 0 0 1 4.5zM2.5 4h5a.5.5 45 0 1 .5.5v5a.5.5 135 0 1-.5.5h-5a.5.5 45 0 1-.5-.5v-5a.5.5 135 0 1 .5-.5z'/%3E%3C/svg%3E") !important;
    }

    .titlebar-close {
        list-style-image: url("data:image/svg+xml,%3Csvg width='12' height='12' fill='context-stroke' fill-opacity='context-stroke-opacity' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 1a.5.5 0 0 0-.353.146.5.5 0 0 0 0 .708L5.293 6l-4.146 4.145a.5.5 0 0 0 0 .707.5.5 0 0 0 .707 0L6 6.706l4.146 4.146a.5.5 0 0 0 .706 0 .5.5 0 0 0 0-.707L6.708 6l4.146-4.146a.5.5 0 0 0 0-.707.5.5 0 0 0-.707 0L5.998 5.292 1.855 1.146A.5.5 0 0 0 1.5 1z'/%3E%3C/svg%3E") !important;
    }
}

:root[sizemode="normal"][tabsintitlebar] #navigator-toolbox {
    /*  Windows has eaten the topmost pixel, now let's make it spit it out.  */
    @media (-moz-platform: windows) {
        padding-top: 1px !important;
    }
}

#urlbar-container {
    padding-block: 0 !important;
    :root[uidensity="mix"] & {
        position: absolute !important;
    }
}

#urlbar, #searchbar {
    font-size: inherit !important;
    --urlbar-icon-padding: 4px !important;
    --urlbar-box-bgcolor: var(--button-background-color) !important;
    --urlbar-box-focus-bgcolor: var(--button-background-color-hover) !important;
    --urlbar-box-hover-bgcolor: transparent !important;
    --urlbar-box-active-bgcolor: transparent !important;
    --urlbar-icon-fill-opacity: 1 !important;
}

.urlbar-input, .searchbar-textbox {
    border-radius: 0 !important;
}

.urlbar-input::placeholder, .searchbar-textbox::placeholder {
    opacity: 0.35 !important;
}

#identity-box {
    margin-inline: 0 !important;
}

.searchbar-search-button{
    opacity: 0.63 !important;
}

#identity-box[pageproxystate="invalid"] #identity-icon,
.searchbar-search-icon {
    opacity: 0.5 !important;
}

#identity-box[pageproxystate="invalid"] > .identity-box-button {
    padding-inline: calc(var(--urlbar-icon-padding) + 3px) var(--urlbar-icon-padding) !important;
}

#identity-box[pageproxystate="valid"]:is(.notSecureText, .chromeUI, .extensionPage) > .identity-box-button {
    &:hover:not([open]) {
        background-color: var(--button-background-color-hover) !important;
    }
    &:is(:hover:active, [open]) {
        background-color: var(--button-background-color-active) !important;
    }
}

#remote-control-box, #tracking-protection-icon-container, #notification-popup-box, .identity-box-button,
.urlbar-revert-button, .urlbar-show-page-actions-button, .urlbar-go-button, .search-go-button,
.urlbar-page-action, #urlbar-zoom-button, #userContext-icons,
.urlbar-input-container #reload-button, .urlbar-input-container #stop-button {
    align-items: center !important;
    justify-content: center !important;
    opacity: .63 !important;
    &:hover{
        opacity: 1 !important;
    }
}

#identity-permission-box {
	fill: currentColor;
	fill-opacity: var(--urlbar-icon-fill-opacity);
}

#notification-popup-box {
    background-color: var(--urlbar-box-hover-bgcolor) !important;
}

#urlbar-zoom-button {
    margin-inline: 0 !important;

    &:hover {
        background-color: var(--button-background-color-hover) !important;

        &:active {
            background-color: var(--button-background-color-active) !important;
        }
    }
}

.urlbar-input-container #reload-button,
.urlbar-input-container #stop-button {
    width: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding)) !important;
    height: calc(var(--urlbar-min-height) - 2px /* border */ - 2 * var(--urlbar-container-padding)) !important;
    padding-inline: var(--urlbar-icon-padding) !important;
    border-radius: var(--urlbar-icon-border-radius) !important;
    --toolbarbutton-icon-fill: var(--toolbar-field-color) !important;
    &:hover {
        background-color: var(--urlbar-box-hover-bgcolor) !important;
        color: var(--urlbar-box-hover-text-color) !important;
    }

    &:hover:active {
        background-color: var(--urlbar-box-active-bgcolor) !important;
        color: var(--urlbar-box-hover-text-color) !important;
    }
    .toolbarbutton-icon {
		background-color: transparent !important;
	}
	#urlbar:is([focused], [open]) & {
        --toolbarbutton-icon-fill: var(--toolbar-field-focus-color) !important;
	}
}

#remote-control-box, #tracking-protection-icon-container, #identity-permission-box, #notification-popup-box, #stop-reload-button {
    .urlbar-input-container[pageproxystate="invalid"] & {
        display: none !important;
    }
}

/* Buttons */

#customization-container{
    background-color: var(--tabpanel-background-color) !important;
    background-image: none !important;
}

#nav-bar-customization-target {
    padding-inline-start: calc(var(--toolbar-start-end-padding) - var(--toolbarbutton-outer-padding)) !important;
    & > :is(toolbarbutton, toolbaritem):first-child, & > toolbarpaletteitem:first-child > :is(toolbarbutton, toolbaritem) {
        padding-inline-start: var(--toolbarbutton-outer-padding) !important;
    }
}

:root[uidensity="mix"]:not([customizing]) #back-button[disabled],
:root[uidensity="mix"]:not([customizing]) #forward-button[disabled] {
    display: none !important;
}

@media not (-moz-bool-pref: "extensions.unifiedExtensions.enabled") {
    #unified-extensions-button {
        display: none !important;
    }
}

@media not (-moz-bool-pref: "userChrome.menuButton.enabled") {
    #PanelUI-menu-button {
        display: none !important;
    }
}

@media not (-moz-bool-pref: "userChrome.urlbar.starButton.enabled") {
    #star-button-box{
        display: none !important;
    }
}

#private-browsing-indicator-with-label,
.private-browsing-indicator-with-label {
    display: none !important;
}

#PanelUI-menu-button {
    padding-inline-end: var(--toolbarbutton-outer-padding) !important;
}

#PanelUI-button {
    padding-inline-end: calc(var(--toolbar-start-end-padding) - var(--toolbarbutton-outer-padding)) !important;
}

@media (-moz-platform: windows) {
    :root[uidensity]:is([tabsintitlebar], [inFullscreen]) #PanelUI-button {
        padding-inline-end: 0 !important;
    }
}

.toolbaritem-combined-buttons,
.toolbaritem-menu-buttons {
    padding-inline: var(--toolbarbutton-outer-padding) !important;
    margin: 0 !important;
}

#appMenu-zoomReset-button2[disabled], #zoom-reset-button[disabled] {
  opacity: var(--inactive-titlebar-opacity) !important;
}

:root:not([customizing]) .toolbarbutton-1[disabled] {
  opacity: var(--toolbarbutton-disabled-opacity) !important;
}

:root:not([customizing]) .toolbarbutton-1:not(:hover):not([disabled]):-moz-window-inactive,
:root[customizing] .toolbarbutton-1:-moz-window-inactive,
.bookmark-item:not(:hover):-moz-window-inactive,
.tab-icon-stack:-moz-window-inactive, .tab-label-container:-moz-window-inactive,
.titlebar-button:not(:hover):not([disabled]):-moz-window-inactive,
#main-menubar > menu:not(:hover):not([disabled]):-moz-window-inactive,
findbar:-moz-window-inactive {
    opacity: var(--inactive-titlebar-opacity) !important;
}

:root:not([customizing]) #TabsToolbar .toolbarbutton-1:not(:hover):not([disabled]):-moz-window-inactive,
:root[customizing] #TabsToolbar .toolbarbutton-1:-moz-window-inactive {
    opacity: 1 !important;
    > .toolbarbutton-icon,
    > .toolbarbutton-text,
    > .toolbarbutton-badge-stack {
        opacity: var(--inactive-titlebar-opacity) !important;
    }
}

#scrollbutton-up:not(:hover):not([disabled]):-moz-window-inactive,
#scrollbutton-down:not(:hover):not([disabled]):-moz-window-inactive {
    fill-opacity: var(--inactive-titlebar-opacity) !important;
}

.tab-icon-stack:-moz-window-inactive,
#fxa-avatar-image:-moz-window-inactive,
#PlacesToolbarItems > .bookmark-item:-moz-window-inactive > .toolbarbutton-icon {
    filter: grayscale(100%);
}

#customization-palette .toolbarbutton-1 {
    opacity: 1 !important;
}

toolbarspring {
    margin-block: 0 !important;
}

#PersonalToolbar toolbarspring {
    height: 22px !important;
}

#customization-uidensity-autotouchmode-checkbox,
#customization-uidensity-touch-spacer {
    display: none !important;
}

/* Tabs */
:root:not([uidensity="mix"]) {
    
    #TabsToolbar-customization-target, #tabbrowser-arrowscrollbox {
        height: var(--tab-min-height) !important;
    }
    
    #TabsToolbar {
        font-size: 13px !important;
        opacity: 1 !important;
        transition: none !important;
        margin-right: -1px !important;
        @media (prefers-color-scheme: light) {
            background: linear-gradient(to bottom, #00000030 0px, #00000030 0.55px, #00000022 0.55px, #00000022 1.01px, #0000001A 1.01px, #0000001A 1.55px, #00000014 1.55px, #00000014 2.01px, #00000010 2.01px, #00000010 2.55px, #0000000F 2.55px, #0000000F 3.01px, #0000000E 3.01px, #0000000E 4.01px, #0000000D 4.01px) !important;
        }
        @media (prefers-color-scheme: dark) {
            background: linear-gradient(to bottom, #000000FF 0px, #000000FF 0.55px,  #00000097 0.55px,  #00000097 1.01px, #00000071 1.01px) !important;
        }
    }
    
    #TabsToolbar {
        .toolbarbutton-1,
        .chromeclass-toolbar-additional,
        .toolbaritem-combined-buttons {
            margin: 0 !important;
            padding: 0 !important;
            > .toolbarbutton-icon,
            > .toolbarbutton-text,
            > .toolbarbutton-badge-stack {
                border-radius: 0px !important;
                transition: background-color 200ms !important;
            }
            & > separator {
                display: none !important;
            }
        }
    }
    
    #tabbrowser-tabs {
        margin: 0 !important;
        border: none !important;
        padding-inline-start: calc(var(--tab-overflow-pinned-tabs-width)) !important;
        font-size: 11px !important;
        min-height: var(--tab-min-height) !important;
        --tab-min-width: 120px !important;
        &[movingtab] {
            padding-bottom: 0 !important;
        }
    }
    
    :root:not([customizing]) #TabsToolbar-customization-target .toolbarbutton-1[disabled] {
        opacity: 1 !important;
        > .toolbarbutton-icon,
        > .toolbarbutton-text,
        > .toolbarbutton-badge-stack {
            opacity: var(--toolbarbutton-disabled-opacity) !important;
        }
    }
    
    #TabsToolbar-customization-target #search-container {
        padding: 0 !important;
        > #searchbar {
            border-radius: 0 !important;
            background-color: transparent !important;
            border: 0 !important;
        }
    }
    
    #tabbrowser-arrowscrollbox {
        &::part(scrollbutton-up),
        &::part(scrollbutton-down) {
            & {
                /* This strange nesting is to avoid a Firefox bug. */
                border: 0 !important;
                border-radius: 0 !important;
                padding: 0 calc(var(--toolbarbutton-inner-padding) - 2px) !important;
                transition: background-color 200ms !important;
            }
        }
    }
    
    .tabbrowser-tab,
    #tabbrowser-tabs:not(:last-child) #tabbrowser-arrowscrollbox[overflowing],
    #TabsToolbar-customization-target .toolbarbutton-1,
    #TabsToolbar-customization-target toolbarspring,
    #TabsToolbar-customization-target #search-container,
    #TabsToolbar-customization-target > #personal-bookmarks #PlacesToolbarItems > .bookmark-item,
    #TabsToolbar-customization-target > toolbarpaletteitem > #personal-bookmarks {
        border-right: solid 1px var(--tabbar-separator-color) !important;
    }
    #tabbrowser-arrowscrollbox {
        &::part(scrollbutton-up) {
            & {
                border-right: solid 1px var(--tabbar-separator-color) !important;
            }
        }
        &::part(scrollbutton-down) {
            &:not([disabled]) {
                border-left: solid 1px var(--tabbar-separator-color) !important;
                margin-left: -1px !important;
            }
        }
    }
    
    .tabbrowser-tab {
        padding: 0 !important;
        min-height: var(--tab-min-height) !important;
        background-clip: padding-box !important;
        #tabbrowser-tabs[positionpinnedtabs] > #tabbrowser-arrowscrollbox > &[pinned] {
            display: flex !important; 
        }
    }
    
    .tabbrowser-tab[selected] {
        background-color: var(--toolbar-bgcolor) !important;
        box-shadow: none !important;
    }
    
    .tabbrowser-tab[multiselected]:not([selected]) {
        @media (prefers-color-scheme: light) {
            background: linear-gradient(to bottom, #00000023 0px, #00000023 0.55px, #00000015 0.55px, #00000015 1.01px, #0000000D 1.01px, #0000000D 1.55px, #00000007 1.55px, #00000007 2.01px, #00000003 2.01px, #00000003 2.55px, #00000002 2.55px, #00000002 3.01px, #00000001 3.01px, #00000001 4.01px, transparent 4.01px), var(--toolbar-bgcolor) !important;
        }
        @media (prefers-color-scheme: dark) {
            background: linear-gradient(to bottom, #000000FF 0px, #000000FF 0.55px,  #00000040 0.55px,  #00000040 1.01px, transparent 1.01px), var(--toolbar-bgcolor) !important;
        }
    }
    
    #tabbrowser-tabs:not([movingtab]) .tabbrowser-tab:not([pinned]) {
        transition: min-width 350ms, max-width 350ms !important;
    }
    
    .tabbrowser-tab {
        @media (prefers-reduced-motion: no-preference) {
            #tabbrowser-tabs[movingtab] &[fadein]:not([selected]):not([multiselected]), &[multiselected-move-together], &[tabdrop-samewindow] {
                transition: transform 350ms !important;
            }
        }
    }
    
    .tabbrowser-tab:not([pinned]) {
        margin-inline-start: 0 !important;
        &[fadein]:not([style*="max-width"]) {
            max-width: var(--tab-max-width) !important;
        }
    }
    
    .tab-background:is([selected], [multiselected]) {
        display: none !important;
    }
    
    .tab-background {
        transition: background-color 200ms !important;
        margin: 0 !important;
        border-radius: 0 !important;
    }
    
    .tab-content[pinned] {
        padding: 0 10px !important;
    }
    
    .tab-content:not([pinned]) {
        padding: 0 12px !important;
    }
    
    .tab-label-container[pinned] {
        display: none !important;
    }
    
    .tab-label-container {
        flex: auto 0 1 !important;
        margin-inline-end: auto !important;
        padding-inline-start: 0 !important;
        padding-inline-end: 12px !important;
    }
    
    #tabbrowser-tabs .tab-close-button {
        order: -1 !important;
        margin: 0 !important;
        margin-inline-start: -8px !important;
        margin-inline-end: 4px !important;
        margin-top: 0.75px !important;
        padding: 3px !important;
        width: 16px !important;
        height: 16px !important;
        border-radius: 2px !important;
        opacity: 0;
        transition: opacity 200ms !important;
        &:hover {
            background-color: light-dark( rgba(0, 0, 0, .11), rgba(255, 255, 255, .17) ) !important;
        }
        &:hover:active {
            background-color: light-dark( rgba(0, 0, 0, .27), rgba(255, 255, 255, .32) ) !important;
        }
        .tabbrowser-tab:hover & {
            opacity: 1;
        }
        &[pinned], #tabbrowser-tabs[closebuttons="activetab"]:not([orient="vertical"]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-content > &:not([selected]) {
            display: flex !important;
            &[pinned] {
                display: none !important;
            }
        }
        .tab-label-container:not([textoverflow]) ~ & {
            margin-inline-start: -7px !important;
            margin-inline-end: 3px !important;
        }
    }
    
    #urlbar #tab-close-button-container {
        display: none !important;
    }
    
    #TabsToolbar #firefox-view-button[open] {
        background-color: var(--toolbar-bgcolor) !important;
        background-clip: padding-box !important;
        > .toolbarbutton-icon {
            background-color: transparent !important;
            box-shadow: none !important;
            color: inherit !important;
            outline-color: var(--toolbarbutton-active-outline-color) !important;
            color-scheme: light dark !important;
            transition: none !important;
        }
    }
}

:root[uidensity="mix"] {
    
    #TabsToolbar {
        min-height: 0 !important;
    }
    
    #TabsToolbar-customization-target {
        justify-content: center !important;
        > toolbarbutton,
        > toolbaritem,
        > toolbarpaletteitem > toolbarbutton,
        > toolbarpaletteitem > toolbaritem {
            margin-top: -5px !important;
            padding-bottom: 7px !important;
        }
        #search-container {
            padding-top: 0 !important;
        }
    }
    
    #tabbrowser-tabs {
        font-size: 12px !important;
        min-height: var(--tab-min-height) !important;
        padding-inline: var(--tab-overflow-pinned-tabs-width) 0 !important;
    }
    
    #tabbrowser-tabs:not([movingtab]) .tabbrowser-tab:not([pinned]) {
        transition: var(--tab-transition) !important;
    }
    
    .tabbrowser-tab {
        @media (prefers-reduced-motion: no-preference) {
            #tabbrowser-tabs[movingtab] &[fadein]:not([selected]):not([multiselected]), &[multiselected-move-together], &[tabdrop-samewindow] {
                transition: transform 200ms !important;
            }
        }
    }
    
    .tabbrowser-tab:not([pinned]) {
        padding: 0 !important;
        &[fadein]:not([selected]) {
            margin: 0 var(--tab-margin) !important;
            min-width: 74px !important;
            max-width: 148px !important;
        }
        &[fadein][selected] {
            margin: 0 var(--tab-margin) !important;
            min-width: 240px !important;
            max-width: var(--tab-max-width) !important;
            :root:not([customizing]) & {
                visibility: hidden !important;
            }
        }
    }
    
    .tabbrowser-tab[pinned] {
        padding: 0 var(--tab-margin) !important;
    }
    
    #wrapper-urlbar-container {
        display: none !important;
    }
    
    .tab-content[pinned] {
        padding: 0 8px !important;
    }
    
    .tab-content:not([pinned]) {
        padding: 0 10px !important;
    }
    
    .tab-background {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        .tabbrowser-tab > .tab-stack > &:not([selected], [multiselected]) {
            background-color: var(--tab-hover-background-color) !important;
        }
        .tabbrowser-tab:hover > .tab-stack > &:not([selected], [multiselected]) {
            background-color: var(--toolbarbutton-active-background) !important;
        }
        .tabbrowser-tab > .tab-stack > &[selected] {
            background-color: var(--toolbar-field-background-color) !important;
            box-shadow: none !important;
        }
        .tabbrowser-tab > .tab-stack > &[multiselected] {
            background-color: var(--toolbar-field-background-color) !important;
        }
    }

    #tabbrowser-arrowscrollbox {
        pointer-events: auto !important;
        &::part(scrollbutton-up),
        &::part(scrollbutton-down) {
            & {
                border: 0 !important;
                border-radius: 0 !important;
            }
            &:not([disabled]):hover {
                background-color: transparent !important;
                .toolbarbutton-icon {
                    background-color: var(--toolbarbutton-active-background) !important;
                }
                &:active .toolbarbutton-icon {
                    background-color: var(--toolbar-field-background-color) !important;
                }
            }
            .toolbarbutton-icon {
                border-radius: var(--tab-border-radius) !important;
                padding: var(--toolbarbutton-inner-padding) calc(var(--toolbarbutton-inner-padding) - 2px) !important;
                background-color: var(--toolbarbutton-hover-background) !important;
            }
        }
        
        &::part(scrollbutton-up) {
            & {
                padding: 0 calc(var(--tab-margin) * 2) 0 var(--tab-margin) !important;
            }
        }
        
        &::part(scrollbutton-down) {
            & {
                padding: 0 var(--tab-margin) 0 calc(var(--tab-margin) * 2) !important;
            }
        }
    }
    
    #tabbrowser-arrowscrollbox[overflowing] {
        > .tabbrowser-tab:nth-child(1 of :not([pinned], [hidden])) {
            margin-inline-start: 0 !important;
        }
        > .tabbrowser-tab:last-of-type {
            margin-inline-end: 0 !important;
        }
    }
    
    .tab-label-container[pinned] {
        display: none !important;
    }
    
    #tabbrowser-tabs .tab-close-button {
        order: -1 !important;
        margin: 0 !important;
        margin-inline-start: -4px !important;
        margin-inline-end: -12px !important;
        padding: 3px !important;
        width: 16px !important;
        height: 16px !important;
        border-radius: 2px !important;
        opacity: 0;
        transition: opacity 200ms, margin-inline-end 200ms !important;
        z-index: 1;
        &:hover {
            background-color: light-dark( rgba(0, 0, 0, .11), rgba(255, 255, 255, .17) ) !important;
        }
        &:hover:active {
            background-color: light-dark( rgba(0, 0, 0, .27), rgba(255, 255, 255, .32) ) !important;
        }
        .tab-content[hovered] & {
            opacity: 1;
            margin-inline-end: 5px !important;
        }
        &[pinned], #tabbrowser-tabs[closebuttons="activetab"]:not([orient="vertical"]) > #tabbrowser-arrowscrollbox > .tabbrowser-tab > .tab-stack > .tab-content > &:not([selected]) {
            display: flex !important;
            &[pinned] {
                display: none !important;
            }
        }
    }
    
    .tab-label-container {
        flex: auto 0 1 !important;
        margin-inline-end: auto !important;
        padding-inline-start: 0 !important;
        padding-inline-end: 0 !important;
        transition: padding-inline-end 200ms !important;
        .tab-content[hovered] & {
            padding-inline-end: 17px !important;
        }
    }
    
    #urlbar #tab-close-button-container {
        display: flex;
        margin-inline-start: 4px !important;
        margin-inline-end: -4px !important;
        .tab-close-button {
            visibility: visible !important;
            display: inline-flex;
            padding: 0 !important;
            margin-block: 0 !important;
            margin-inline-end: -16px !important;
            width: 16px !important;
            height: 16px !important;
            border-radius: 2px !important;
            align-self: center !important;
            box-sizing: border-box !important;
            background-image: url(chrome://global/skin/icons/close-12.svg) !important;
            background-position: center;
            background-size: 10px 10px;
            background-repeat: no-repeat;
            opacity: 0 !important;
            z-index: 100 !important;
            transition: opacity 200ms, margin-inline-end 200ms !important;
            #urlbar[focused] & {
                pointer-events: none !important;
            }
            #urlbar:not([focused]) &:hover {
                background-color: light-dark( rgba(0, 0, 0, .11), rgba(255, 255, 255, .17) ) !important;
                &:active {
                    background-color: light-dark( rgba(0, 0, 0, .27), rgba(255, 255, 255, .32) ) !important;
                }
            }
            #urlbar:not([focused]) &[hovered] {
                margin-inline-end: 4px !important;
                opacity: 1 !important;
            }
        }
    }
    
    #TabsToolbar #firefox-view-button[open] > .toolbarbutton-icon {
        box-shadow: none !important;
        background-color: var(--toolbarbutton-active-background) !important;
        color: inherit !important;
        outline-color: var(--toolbarbutton-active-outline-color) !important;
        color-scheme: light dark !important;
    }
}

.tab-background {
    outline: none !important;
    outline-offset: 0 !important;
}

.tab-loading-burst {
    visibility: collapse !important;
}

.tab-icon-stack {
    margin-inline-start: auto !important;
}

.tab-label {
    line-height: inherit !important;
}

#tabbrowser-arrowscrollbox-periphery {
    display: none !important;
}

#tabbrowser-tabs[hasadjacentnewtabbutton]:not([overflow]) ~ #new-tab-button,
#tabbrowser-tabs[orient="vertical"] > #tabbrowser-arrowscrollbox > #tabbrowser-arrowscrollbox-periphery > #tabs-newtab-button,
#tabbrowser-tabs[overflow] > #tabbrowser-arrowscrollbox > #tabbrowser-arrowscrollbox-periphery > #tabs-newtab-button,
#tabbrowser-tabs:not([hasadjacentnewtabbutton]) > #tabbrowser-arrowscrollbox > #tabbrowser-arrowscrollbox-periphery > #tabs-newtab-button,
#TabsToolbar[customizing] #tabs-newtab-button {
    display: flex !important;
}

.tab-preview-thumbnail-container {
    order: -1;
}

#new-tab-button {
    list-style-image: url(chrome://global/skin/icons/plus.svg) !important;
}

/* bookmark bar */

#PersonalToolbar {
    background-color: transparent !important;
    font-size: 11px !important;
    align-items: center !important;
    .toolbarbutton-1 {
        height: 20px !important;
        margin: 4px 0px !important;
        border-radius: 4px !important;
        > .toolbarbutton-icon,
        > .toolbarbutton-text,
        > .toolbarbutton-badge-stack {
            padding-top: 3px !important;
            padding-bottom: 3px !important;
            min-height: 0 !important;
        }
    }
    > .bookmark-item,
    #PlacesToolbar > .bookmark-item,
    toolbarpaletteitem > .bookmark-item {
        height: 20px !important;
        padding: 0px 6px !important;
        margin: 4px 2px !important;
        border-radius: 4px !important;
    }
    #PlacesToolbarItems {
        height: 20px !important;
        margin: 4px 0px !important;
        justify-content: safe center !important;
        > .bookmark-item {
        padding: 0px 6px !important;
        margin: 0px 2px !important;
        border-radius: 4px !important;
        }
    }
}

#PersonalToolbar[bookmark-show="always"] {
    height: 28px !important;
    :root:not([uidensity]) & {
    margin-top: -5px !important;
    margin-bottom: 2px !important;
    }
    :root[uidensity] & {
        margin-top: -7px !important;
        margin-bottom: 5px !important;
    }
}

#PersonalToolbar[bookmark-show="newtab"] {
    height: 29px !important;
    padding-top: 1px !important;
    background: linear-gradient(to bottom, light-dark(#00000026, #000000FF) 0px, light-dark(#00000026, #000000FF) 0.55px, light-dark(#0000000D, #00000040) 0.55px, light-dark(#0000000D, #00000040) 1.01px, var(--toolbar-bgcolor) 1.01px) !important;
}

#navigator-toolbox {
    border-bottom: none !important;
    padding-bottom: 1px !important;
    margin-bottom: -1px !important;
    z-index: 100 !important;
    &:not(.fullscreen-with-menubar) {
        background: linear-gradient(to top, light-dark(#0000000D, #00000040) 0px, light-dark(#0000000D, #00000040) 0.44px, light-dark(#00000026, #000000FF) 0.44px, light-dark(#00000026, #000000FF) 0.99px, var(--toolbar-bgcolor) 0.99px) !important;
    }
    &.fullscreen-with-menubar {
        background-color: var(--toolbar-bgcolor) !important;
    }
}

:root:not([uidensity="mix"]) {

    #TabsToolbar-customization-target #personal-bookmarks {
        font-size: 11px !important;
        min-width: 0 !important;
    }

    #TabsToolbar-customization-target > #personal-bookmarks #PlacesToolbarItems > .bookmark-item {
        border-radius: 0px !important;
        margin: 0 !important;
        background-clip: padding-box !important;
        transition: background-color 200ms !important;
        .toolbarbutton-text {
            display: none !important;
        }
        .toolbarbutton-icon {
            margin-inline: 2px !important;
        }
    }

    #TabsToolbar-customization-target #personal-bookmarks #PlacesToolbarItems > toolbarseparator {
        margin-inline-start: -1px !important;
        padding: 0 !important;
        &::before {
            border-inline-start: 1px solid var(--tabbar-separator-color) !important;
            border-image-source: none !important;
        }
    }
}
:root[uidensity="mix"] {
    
    #TabsToolbar-customization-target > #personal-bookmarks #PlacesToolbarItems > .bookmark-item {
        height: calc(2 * var(--toolbarbutton-inner-padding) + 16px) !important;
        margin-block: 0 !important;
        margin-inline: var(--toolbarbutton-outer-padding) !important;
        .toolbarbutton-text {
            display: none !important;
        }
        .toolbarbutton-icon {
            margin-inline: 2px !important;
        }
    }
    
    #TabsToolbar-customization-target #personal-bookmarks #PlacesToolbarItems > toolbarseparator {
        padding-block: 2px !important;
    }
}

#nav-bar-customization-target > #personal-bookmarks #PlacesToolbar {
    align-items: center !important;
    #PlacesToolbarItems > .bookmark-item {
        height: calc(2 * var(--toolbarbutton-inner-padding) + 16px) !important;
        margin-inline: var(--toolbarbutton-outer-padding) !important;
        .toolbarbutton-text {
            display: none !important;
        }
        .toolbarbutton-icon {
            margin-inline: 2px !important;
        }
    }
    #PlacesToolbarItems > toolbarseparator {
        padding: 4px !important;
    }
}

#PersonalToolbar #wrapper-personal-bookmarks {
      justify-content: center !important;
}

/* menu bar */

#toolbar-menubar {
    .toolbarbutton-1,
    .chromeclass-toolbar-additional,
    .toolbaritem-combined-buttons {
        padding: 0 !important;
        margin: 0 !important;
        height: 19.5px !important;
        align-items: normal !important;
        > .toolbarbutton-icon {
            padding-top: 3px !important;
            padding-bottom: 3px !important;
            align-items: center !important;
            padding-inline: 7px !important;
            border-radius: 0px !important;
            height: inherit !important;
            min-height: 0 !important;
        }
        > .toolbarbutton-text,
        > .toolbarbutton-badge-stack {
            padding-top: 3px !important;
            padding-bottom: 3px !important;
            align-items: center !important;
            border-radius: 0px !important;
            height: inherit !important;
            min-height: 0 !important;
        }
        & > separator {
            display: none !important;
        }
    }
}

/* findbar */

.findbar-container {
    flex-direction: row-reverse;
}

.browserContainer > findbar {
    order: -1;
    border-top: none !important;
    margin-bottom: -1px !important;
    padding-block: 5px !important;
    z-index: 99 !important;
    background: linear-gradient(to top, light-dark(#0000000D, #00000040) 0px, light-dark(#0000000D, #00000040) 0.44px, light-dark(#00000026, #000000FF) 0.44px, light-dark(#00000026, #000000FF) 0.99px, var(--toolbar-bgcolor) 0.99px) !important;
    &:where([hidden]) {
		margin-bottom: calc(-1 * (28px + 8px + 1px)) !important;
	}
}

.findbar-textbox {
    background-color: transparent !important;
}
