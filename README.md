## Introduction
A Firefox userChrome.CSS theme that mimics the new UI of Safari on macOS Big Sur and above.

While there are many similar themes on GitHub, none of them met my expectations, so I created my own. It not only replicates the interface but also the operational logic, with some optimizations and adjustments for a more perfect user experience. This is my first time working with CSS and JS, and I spent a lot of time and effort to complete it, with a great help and guidance from my boyfriend.

## Requirement
Firefox version 128 and above.

## **Installation**

### **On Windows:**
1. **config.js** → `Installation directory/`
2. **autoconfig.js** → `Installation directory/defaults/pref/`
   (Create the folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.  
   (You should see a lot of different files and folders, not just a few; if you only see a few, open the automatically selected folder), then move the entire **chrome** folder into this folder.

### **On macOS:**
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
   (Press ⇧⌘G in Finder, paste the path above, and you'll go directly to the location)
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`  
   (Create the folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.  
   (You should see a lot of different files and folders, not just a few; if you only see a few, open the automatically selected folder), then move the entire **chrome** folder into this folder.

## **Customize**

When there is only one tab and the tab bar contains no tool icons, it will hide automatically. Alternatively, you can place a tool icon (e.g., a new tab button) on the tab bar to prevent it from hiding.

Right-click on a blank area in the window to set the position of the bookmarks toolbar:  
- When **"Always Show"** is selected, it will appear above the tab bar.  
- When **"Only Show on New Tabs"** is selected, it will appear below the tab bar.
- Alternatively, you can try placing the "Bookmarks Toolbar Items" on the **tab bar**—there might be a pleasant surprise waiting for you!
- If you want to place the "Bookmarks toolbar items" on the **navigation bar**, make sure there is 'Flexible Space' on both sides of the URL bar. Otherwise, Firefox's bug may cause it to crash. If you're unlucky to encounter this issue, temporarily delete the `config.js` file, then open Firefox, adjust the navigation bar layout, and restore the `config.js` file.

In the "Customize Toolbar" page, click the "Density" button in the lower-left corner to choose different navigation bar widths:  
- **Standard (default on Windows):** The vertical padding of the address bar matches that of Catalina − and is recommended for Catalina − users.  
- **Touch (default on macOS):** The navigation bar width matches that of Big Sur + and is recommended for Windows 11 users.  
- You can also enable **Compact** through `about:config`, which matches the native compact toolbar style width on Big Sur +.  

### Some configurable `about:config` values (set to `true`):  
- `extensions.unifiedExtensions.enabled`: Show the unified extensions button.  
- `userChrome.menuButton.enabled`: Show the menu button (Why not just use the menu bar instead? On macOS, it is natively built-in, and on Windows or Linux, it appears by pressing the Alt key).
- `userChrome.urlbar.starButton.enabled`: Show the star button for bookmarks at the far right of the address bar.  
- `browser.tabs.tabmanager.enabled`: Show the "All Tabs" button to the right of the tabs (Firefox 131− only; can be removed starting in version 132).  
- `browser.compactmode.show`: Display the "Compact" option in the "Density" menu.  

It is recommended to disable updates (default) as new versions are likely to adjust the browser's UI structure, causing the unadapted Surfox to stop working. If you need to enable updates, open the `autoconfig.js` file, delete the line `pref("app.update.channel", "");` then save.

##

## **介绍**
一个 Firefox 的 userChrome 主题，侭可能模仿 Big Sur Safari 的 UI。基埠上有很多类似的但没有一个让我满意的，于是我自己写了一个；不仅模仿外观，还模仿交互，且加以取捨优化，打造一个更完美的使用体验。这是我第一次接触 CSS 和 JS，为了完成它，我花了大量时间和精力，这也离不开我男朋友的帮助和指导。

## **要求**
Firefox 版本 128 及更高。

## **安装**

### **Windows 下：**
1. **config.js** → `安装目录/`
2. **autoconfig.js** → `安装目录/defaults/pref/`
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」  
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

### **macOS 下：**
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
   （在 Finder 中按下 ⇧⌘G 快捷键，把上面的路径复制进去即可直达）
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`  
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」  
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

## **自定义**

当只有一个标签页且标签栏没有工具图标时，标签栏将自动隐藏；或者你可以在标签栏放入一个工具图标（例如打开新标签页），这样它就不会自动隐藏了。



在窗口空白处点右键，可以设置书签工具栏的位置：
- 当选择 **「永远显示」** 时，它将出现在标签栏上方；
- 当选择 **「只在新分页显示」** 时，它将出现在标签栏下方。
- 或者你可以试试把「书签工具栏项目」放在**标签栏**上，也许会有惊喜！
- 如果你想把「书签工具栏项目」放在**导航栏**上，请确保地址栏左右均放置有「弹性空白」，否则 Firefox 的罢虼将导致其崩溃。如果你不幸中招了，请暂时先删除 `config.js`，然后打开 Firefox，调整好导航栏排序，再恢复 `config.js`。

在「自定义工具栏」页面左下角，点击「密度」按钮，可以选择不同导航栏宽度。
- **「标准（Windows 下默认）」** 的地址栏上下边距和 Catalina − 一致，亦推荐 Catalina − 的用户设置成这个。
- **「触控（macOS 下默认）」** 的导航栏宽度和 Big Sur + 一致，亦推荐 Windows 11 的用户设置成这个。
- 还可以通过 `about:config` 开启 **「紧凑」** ，它和 Big Sur + 上的原生紧凑工具栏样式宽度一致。

### 一些可以根据需要调整的 `about:config` 的值（设置为 `true` 时）：
- `extensions.unifiedExtensions.enabled` 显示扩展按钮
- `userChrome.menuButton.enabled`: 显示菜单按钮（为什么不用菜单栏代替呢？macOS 原生自带，Windows 和 Linux 下按一下 alt 就会出现）
- `userChrome.urlbar.starButton.enabled` 显示地址栏最右侧的星星收藏按钮
- `browser.tabs.tabmanager.enabled` 显示标签右侧的所有标签页按钮（仅 Firefox 131−，132 起可以自行移除）
- `browser.compactmode.show` 在「密度」菜单中显示「紧凑」选项

推荐禁用更新（默认），因为新版本很可能会改变浏览器界面结构导致未适配的 Surfox 无法使用。如果需要启用更新，请打开 `autoconfig.js` 文件，删除 `pref("app.update.channel", "");` 这一行，并保存。
