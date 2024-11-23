## Requirement
Firefox version 132.0 and above.

## **Installation**

### **On Windows:**
1. **config.js** → Installation directory/
2. **autoconfig.js** → Installation directory/defaults/pref/  
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

---

## **要求**
Firefox 版本 132.0 及更高

## **安装**

### **Windows 下：**
1. **config.js** → 安装目录/
2. **autoconfig.js** → 安装目录/defaults/pref/  
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
