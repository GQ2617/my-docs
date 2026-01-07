## 滚动条样式

```css
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #fafafa;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(191, 191, 191);
}
```

## 文本溢出省略

- 单行溢出

```css
.className {
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

- 多行溢出

```css
.className {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
```

## 卡片移入效果

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}
```

## 暗色主题

```css
/* 反转根元素 */
html {
  filter: invert(0.9) hue-rotate(180deg)
}

/* 对图片、视频等再次反转回来 */
img,
video,
.avatar,
.image,
.thumb
.icon {
     filter: invert(0.9) hue-rotate(180deg)
}
```

## UUID生成

```js
const uuid = (a) =>
  a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
```

## 判断运行环境

```js
function userAgent() {
  var u = navigator.userAgent;
  return {
    // 移动终端浏览器版本信息
    trident: u.indexOf("Trident") > -1, // IE内核
    presto: u.indexOf("Presto") > -1, // opera内核
    webKit: u.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    iPad: u.indexOf("iPad") > -1, // 是否iPad
    webApp: u.indexOf("Safari") === -1, // 是否web应该程序，没有头部与底部,
    isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    isAndroid: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
  };
}

// Examples
const browser = userAgent();
if (browser.mobile) {
  // 移动端 => todo something
  if (browser.isiOS && browser.webApp) {
    // IOS系统 && web程序 => todo something
  } else {
    // 安卓 => todo something
  }
} else {
  // PC => todo something
}
```

