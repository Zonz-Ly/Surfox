## Introduction
A Firefox userChrome.CSS theme that mirrors the new UI of Safari on macOS Big Sur and above.
<img width="1112" alt="Available on multiple platforms" src="https://github.com/user-attachments/assets/482ede59-3879-431a-abe4-a83374414552" />
While there are many similar themes on GitHub, none of them met my expectations, so I created my own. It not only replicates the interface but also the operational logic, with some optimizations and adjustments for a more perfect user experience. This is my first time working with CSS and JS, and I spent a lot of time and effort to complete it, with a great help and guidance from my boyfriend.

## Requirement
Firefox version 128 and above.

(Actually, it can support version 117 with a few tweaks—DIY!)

(Versions 116 and below lack support for CSS nesting and light-dark syntax, making adjustments more complex. However, adaptation is still possible with extra effort.)

## Installation

### On Windows:
1. **config.js** → `Installation directory/`
2. **autoconfig.js** → `Installation directory/defaults/pref/`
   (Create this folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.
   (You should see numerous files and folders. If you see only a few, open the automatically selected folder.) Move the entire chrome folder into this directory.

### On macOS:
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
   (Press ⇧⌘G in Finder, paste the path above, and you'll go directly to the location)
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`
   (Create this folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.
   (You should see numerous files and folders. If you see only a few, open the automatically selected folder.) Move the entire chrome folder into this directory.

## Features

### Centered Address Bar and Auto-Hiding Tab Bar
The URL bar remains centered, including its content, same as Safari.
When there is only one tab and the tab bar contains no tool icons, it will hide automatically. Alternatively, you can place a tool icon (e.g., a new tab button) on the tab bar to prevent it from hiding.
<img width="1112" alt="Always centered URL bar" src="https://github.com/user-attachments/assets/b71f8b64-cba3-4bf8-b700-b96e7db28899" />

### Customize Bookmark Toolbar Position  
Right-click on a blank area in the window to set how the bookmark toolbar shows. It adjusts its position automatically.
- **Always Show**: Shows above the tab bar.  
- **Only Show on New Tabs**: Shows below the tab bar.
<img width="1112" alt="Two bookmark bar positions" src="https://github.com/user-attachments/assets/c59040b3-1df2-4133-a59f-8161be63ea09" />
Alternatively, try placing the "Bookmarks Toolbar Items" on the **tab bar**. Especially with the compact tab layout, you might like it!

If placing the "Bookmarks Toolbar Items" on the **navigation bar**, ensure there is **Flexible Space** on both sides of the address bar; otherwise, the address bar won't center properly.  


### Customize Browser Appearance  
In the "Customize Toolbar" page, click the "Tab layout" button in the lower-left corner to choose navigation bar layouts:  
- **Separate (Narrow) (default on Windows)**: Matches the vertical padding of Catalina and earlier; recommended for Catalina users or those enabling the title bar.  
- **Separate (default on macOS)**: Matches the navigation bar width of Big Sur and later. If resetting the toolbar to defaults on macOS, remember to reselect this option.  
- **Compact (Beta)**: Imitates the compact tab layout of Monterey and later (as shown below). This feature is under development and requires enabling via `about:config`. Official release is planned for version 2.0.  
<img width="1112" alt="Compact tab layout" src="https://github.com/user-attachments/assets/bb3aa3fb-b6e3-4a19-900e-467ee4b8724e" />

### Some configurable `about:config` values (if set to `true`):
- `browser.compactmode.show`: Display the "Compact" option in the "Tab layout" menu.
- `extensions.unifiedExtensions.enabled`: Show the unified extensions button (quite useful if you use extensions).
- `userChrome.menuButton.enabled`: Show the menu button (Why not just use the menu bar instead? On macOS, it's natively built-in, and on Windows and Linux, it appears by pressing the Alt key).
- `userChrome.urlbar.starButton.enabled`: Show the star button for bookmarks at the far right of the address bar (you can also access it by right-clicking on a blank area of the webpage).
- `browser.tabs.tabmanager.enabled`: Show the "All Tabs" button to the right of the tabs (only in Firefox 131−, can be removed manually starting from version 132).  


**It is recommended to disable updates**, as new versions may change the browser's interface structure, causing Surfox to become incompatible.
How to disable updates: Locate the `channel-prefs.js` file in the same directory as `autoconfig.js` (create it if it doesn't exist), modify its content to: `pref("app.update.channel", "");` Then save the file.

##

## 介绍
一个 Firefox 的 userChrome 主题，侭可能模仿 Big Sur Safari 的 UI。基埠上有很多类似的但没有一个让我满意的，于是我自己写了一个；不仅模仿外观，还模仿交互，且加以取捨优化，打造一个更完美的使用体验。这是我第一次接触 CSS 和 JS，为了完成它，我花了大量时间和精力，这也离不开我男朋友的帮助和指导。

## 要求
Firefox 版本 128 及更高。

（其实可以支持到 117，但是需要修改一小部分细节，自己动手！）

（116 及更低由于不支持 css 嵌套和 light-dark 语法，修改起来比较麻烦，但如果你愿意花一些精力转译，也可以支持。）

## 安装

### Windows 下：
1. **config.js** → `安装目录/`
2. **autoconfig.js** → `安装目录/defaults/pref/`
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

### macOS 下：
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
   （在 Finder 中按下 ⇧⌘G 快捷键，把上面的路径复制进去即可直达）
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

## 功能

### 地址栏居中和自动隐藏标签栏
地址栏将会一直保持在中间，包括其本身和其内容，就像 Safari 那样。
当只有一个标签页且标签栏没有工具图标时，标签栏将自动隐藏；或者你可以在标签栏放入一个工具图标（例如打开新标签页），这样它就不会自动隐藏了。


### 自定义书签工具栏的位置
在窗口空白处点右键，设定书签工具栏的显示方式，它将自动匹配位置：
- **「始终显示」** 显示在标签栏上方；
- **「只在新标签页显示」** 显示在标签栏下方。

或者你可以试试把「书签工具栏项目」放在**标签栏**上，特别是在紧凑标签页布局时，也许你会喜欢！

如果你想把「书签工具栏项目」放在**导航栏**上，请确保地址栏左右均放置有「**弹性空白**」，不然地址栏无法居中。


### 设定浏览器外观
在「自定义工具栏」页面左下角，点击「标签页布局」按钮，可以选择不同标签页的位置和导航栏宽度。
- **「单独（窄）（Windows 下默认）」** 的地址栏上下边距和 Catalina 以前一致，亦推荐 Catalina 以前的用户和启用标题栏的用户设置成这个。
- **「单独（macOS 下默认）」** 的导航栏宽度和 Big Sur 以上一致；如果你在 macOS 上恢复工具栏默认设置，记得重新选择它。
- **「紧凑（Beta）」** 模仿 Monterey 以上的标签页布局的紧凑模式；目前还在施工中，需要通过 `about:config` 开启，2.0 会正式发佈。


### 一些可以根据需要调整的 `about:config` 的值（设置为 `true` 时）：
- `browser.compactmode.show` 在「标签页布局」菜单中显示「紧凑」选项
- `extensions.unifiedExtensions.enabled` 显示扩展按钮（如果你用扩展的话还是很有用的）
- `userChrome.menuButton.enabled`: 显示菜单按钮（为什么不用菜单栏代替呢？macOS 原生自带，Windows 和 Linux 下按一下 alt 就会出现）
- `userChrome.urlbar.starButton.enabled` 显示地址栏最右侧的星星收藏按钮（在网页空白处按右键就会有）
- `browser.tabs.tabmanager.enabled` 显示标签右侧的所有标签页按钮（仅 Firefox 131−，132 起可以自行移除）


**推荐禁用更新**，因为新版本很可能会改变浏览器界面结构导致未适配的 Surfox 无法使用。
禁用方法：打开和 `autoconfig.js` 文件相同目录下的 `channel-prefs.js`（如果没有，请新建），修改内容为 `pref("app.update.channel", "");`，并保存。
