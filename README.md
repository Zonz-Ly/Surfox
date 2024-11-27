## Introduction
A Firefox userChrome.CSS theme that mimics the new UI of Safari on macOS Big Sur and above.

While there are many similar themes on GitHub, none of them met my expectations, so I created my own. It not only replicates the interface but also the operational logic, with some optimizations and adjustments for a more perfect user experience. This is my first time working with CSS and JS, and I spent a lot of time and effort to complete it, with a great help and guidance from my boyfriend.

## Requirement
Firefox version 132. 133 will be adapted later.

## **Installation**

### **On Windows:**
1. **config.js** → `Installation directory/`
2. **autoconfig.js** → `Installation directory/defaults/pref/`
   (Create the folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.  
   (You should see a lot of different files and folders, not just a few; if you only see a few, open the automatically selected folder), then move the entire **chrome** folder into this folder.

### **On macOS:**
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`  
   (Create the folder if it doesn't exist)
3. **chrome** → Open `about:support` in Firefox, find the "Profile Folder" section and click the "Open Folder" button on the right.  
   (You should see a lot of different files and folders, not just a few; if you only see a few, open the automatically selected folder), then move the entire **chrome** folder into this folder.

## **Customize**

Open the `userContent.css` file in the **chrome** folder and remove the unwanted content as indicated in the comments.

When there is only one tab, the tab bar will hide automatically. Or you can place a tool icon (e.g., new tab button ) on the tab bar to keep it from hiding.

If you want to place the 'Bookmarks toolbar items' on the navigation bar, make sure there is 'Flexible Space' on both sides of the URL bar. Otherwise, Firefox's bug may cause it to crash. If you're unlucky to encounter this issue, temporarily delete the `config.js` file, then open Firefox, adjust the navigation bar layout, and restore the `config.js` file.

It is recommended to disable updates (default) as new versions are likely to adjust the browser's UI structure, causing the unadapted Surfox to stop working. If you need to enable updates, open the `autoconfig.js` file, delete the line `pref("app.update.channel", "");` then save.

##

## **介绍**
一个 Firefox 的 userChrome 主题，侭可能模仿 Big Sur Safari 的 UI。基埠上有很多类似的但没有一个让我满意的，于是我自己写了一个；不仅模仿外观，还模仿交互，且加以取捨优化，打造一个更完美的使用体验。这是我第一次接触 CSS 和 JS，为了完成它，我花了大量时间和精力，这也离不开我男朋友的帮助和指导。

## **要求**
Firefox 版本 132。133 将在稍后适配。

## **安装**

### **Windows 下：**
1. **config.js** → `安装目录/`
2. **autoconfig.js** → `安装目录/defaults/pref/`
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」  
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

### **macOS 下：**
1. **config.js** → `/Applications/Firefox.app/Contents/Resources/`
2. **autoconfig.js** → `/Applications/Firefox.app/Contents/Resources/defaults/pref/`  
   （如果没有这个文件夹，请手动创建）
3. **chrome** → 在 Firefox 中打开 `about:support`，找到下方的「配置文件夹」，点击右边的「打开文件夹」  
   (里面会有很多各种各样的文件和文件夹，而不仅仅是几个文件夹；如果你看到的是后者，打开自动选中的那个文件夹)，然后将整个 **chrome** 文件夹放入该文件夹中。

## **自定义**

打开 **chrome** 文件夹中的 `userContent.css` 文件，按照注释提示删除不喜欢的内容。

当只有一个标签页时，标签栏将自动隐藏；或者你可以在标签栏放入一个工具图标（例如打开新标签页），这样它就不会自动隐藏了。

如果你想把「书签工具栏项目」放在导航栏上，请确保地址栏左右均放置有「弹性空白」，否则 Firefox 的罢虼将导致其崩溃。如果你不幸中招了，请暂时先删除 `config.js`，然后打开 Firefox，调整好导航栏排序，再恢复 `config.js`。

推荐禁用更新（默认），因为新版本很可能会改变浏览器界面结构导致未适配的 Surfox 无法使用。如果需要启用更新，请打开 `autoconfig.js` 文件，删除 `pref("app.update.channel", "");` 这一行，并保存。
