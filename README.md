<h4 align="center"><a href="https://github.com/Wu-Ling-CSC/Wu-Ling-CSC.github.io/blob/main/README_eng.md">English</a></h4>

# 武陵資研網站

- [武陵高中資訊研究社官方網站](#武陵高中資訊研究社官方網站)
- [改善社網](#改善社網)
- [開發測試 & 部署](#開發測試--部署)
- [網站內容](#網站內容)
- [App 架構](#app-架構)
    - [目錄架構](#目錄架構)
    - [主要元件](#主要元件)
        - [App](#app)
        - [HomePage](#homepage)
        - [MembersPage](#memberpage)
        - [其他基本元件](#其他基本元件)
    - [Routing](#routing)
    - [動畫](#動畫)


## 武陵高中資訊研究社官方網站

一個用 [React](https://reactjs.org/) 寫的靜態網站

**Why React ?**
- 重複利用:
    React 元件可以重複利用，如每個頁面的 Footer , Header ，或是成員頁面的 Profile cards 。 只需要寫出元件的模板，就可以將資料帶入並 render 在頁面上

- 主流:
    `React` 與 `Vue` 為目前最主流的前端開發框架，可以增加開發效率和維護性 

## 改善社網

**技能要求：**
- git & github ( 會發 PR 即可 )
- basic JS
- React class component
- React function component 
- CSS ( 如果想要改網頁樣式的話 )

**Todo：**
- [ ] 完成 `PageNotFound` 元件
    目前 `PageNotFound`元件定義在`index.js`的`App`元件中
- [ ] 整理 CSS
    目前所有的 CSS 都寫在通一個檔案 ，可以考慮寫成 Object Oriented CSS

- [ ] 優化 RWD
    把 CSS breakpoint 改好一點

- [ ] 增加新的頁面（ Route ） 
    Eg: 可以增加關於課程的頁面，介紹更詳細的內容


## 開發測試 & 部署
（ 以下指令都是在終端機執行 ）

**前提：**

 安裝好 `npm` ， 並進入 `.../src/` 這個目錄執行 `npm install` 使令

**指令：**


在 local 啟動 App
```sh
npm run start
```
部署當前 App ( 這會自動 build 當前的 App , 並部屬到 Github ， 過約一分鐘就可以看到新版本上線了 )
```sh
npm run deploy
```

## 網站內容

網站的所有內容（包括圖片）都寫在 `index.js` 最上方型態為 `const` 的變數中 （ 所以要單純修改網站內容時，只需要修改最上方的變數內容即可，並且內容都是 `Dictionary` 格式，根據在網頁的相對區塊命名 ）

**首頁：**

首頁的內容都在 `content` array 中 ( 約在`line 70` )
`content[0]`是英語內容，`content[1]`是中文內容（ 切換機制會在說明 `App` 元件時提到 ）

**成員頁面：**

社團成員頁面都在 `MembersContent` array 中 ( 約在`line 280` )`MembersContent[0]`是英語內容，`MembersContent[1]`是中文內容（ 切換機制與`App` 元件相同 ）

**頁尾：**

Footer 中的站外連結都寫在 `SocialLinkList` 中 （ 約在`line 240` ）

**打字機：**

在首頁最上方的打字機效果內容在 `typingSequence` array 中，並且是一個字串與它的間隔時間 (ms) 為一組
```js
// Typing effect in the beginning
const typingSequence = ['WLCSC', 3000, 'Wu Ling',3000,'Computer Science',3000,'Algorithm',3000,'Cyber Security',3000,'Web Development',3000,''];
```



## App 架構

### 目錄架構

```
/src.
├── components
│   ├── Footer
│   │   └── Footer.js
│   ├── Header
│   │   └── Header.js
│   ├── Main
│   │   ├── About
│   │   │   └── About.js
│   │   ├── Advantage
│   │   │   └── Advantage.js
│   │   ├── Course
│   │   │   └── Course.js
│   │   ├── Home.js
│   │   ├── LinkedListBackground
│   │   │   └── LinkedListBackground.js
│   │   ├── Members.js
│   │   └── TextBackground
│   │       └── TextBackground.js
│   └── Trigger
│       ├── Language.js
│       └── SideBar.js
├── images
│   ├── algorithm.png
│   ├── artificial-intelligence.png
│   ├── Back.jpg
│   ├── computer.gif
│   ├── computer.png
│   ├── data.png
│   ├── encrypted.png
│   ├── Group.jpg
│   ├── hacker.gif
│   ├── linux.png
│   ├── Location.png
│   ├── Logo.png
│   ├── Members
│   │   ├── 25th-xxx.jpg
│   │   ├── 26th-xxx.png
│   │   └── 27th-xxx.png
│   ├── rocket.gif
│   └── social-care.gif
├── index.css
└── index.js

```
- `index.js` : 
    是 App 最上層的結構，負責將網站內容的大元件引入，同時也是撰寫所有文字內容的檔案。

- `index.css` :
    網頁 CSS 的檔案，目前還沒依照元件分寫

### 主要元件

這邊列出最主要的幾個大元件


#### App

`App`元件是本網頁中控制**主題**、**語言**和負責 **Routing** 的元件，在修改架構前請先了解 `React Class Component`,`React State` 和 `React Route` 。

`App` 元件架構如下 ： 
```js
class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
            Lang :0,
        };
    }

    handleTheme(){
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
    }

    handleLang(){
        if( this.state.Lang===1 ){
            this.setState( {Lang : 0} );
        }
        else this.setState( {Lang : 1} );
    }

    HomePage =() =>{
        
    }

    MembersPage = ()=>{

    }

    NotFoundPage = ()=>{

    }

    render(){

    }
}
```

**功能：**
1. **切換主題**：

    主要透過 `state` 中的 `IsDark` 來切換 ， 並搭配 CSS （ 透過將最外層的 div 的 className 設定為 `Dark` 或 `Light` ， 就可以透過 CSS 來達到切換主題的效果： 如 `.Dark .obj{ ... }` 或 `.Light .obj{ ... }` ）
2. **切換語言**：

    可以注意到 `state` 中的 `Lang` 是在 `0` 與 `1` 做變換 ， 再搭配 `content` array（  存所有網頁內容的 array , `content[0]` 是英文內容 ， `content[1]` 是中文內容 ， 恰好可以搭配 `state.Lang` 做內容的切換 （ 並且 `state.Lang` 狀態會傳入其他更小的元件中，一層一層傳入 ）

#### HomePage
社團網站首頁( 這邊是 App 最主要的內容 )

主要元件位於`../src/components/Home.js`，並引入 `TextBackground.js` , `About.js` , `Advantage.js` , `Course.js` 和 `LinkedListBackground.js` 等元件

`HomePage` 架構如下 ： 
```
HomePage{
    Header{}
    SideBar{}
    Home{
        TextBackground{}
        About{}
        Advantage{}
        Course{}
        LinkedListBackground{}
    }
}
```

**元件說明：**
- **TextBackforund :**

    最上方有 cyber 感的動畫背景 & 有打字機效果的循環 Title 
- **About :**

    「關於我們」的區塊，包含右側三張有層次介紹的圖片
- **Advantage :**

    四個並列的優勢卡
- **Course :**

    課程資訊
- **LinkedListBackground :**

    在最下方有「社團成員」的超連結 ＆ Linked-List 動畫背景的區塊



#### MemberPage
成員頁面的架構就比首頁簡單許多

主要元件位於`../src/components/Members.js`

`MembersPage` 架構如下：
```
MembersPage{
    Header{}
    SideBar{}
    Members{
        25th{
            Membercard{}
            Membercard{} 
            ...
        }
        26th{

        }
        ...
    }
}
```

不過是將每屆的社團成員重複套入 `MembersCard` 元件中，並 render 到頁面上


#### 其他基本元件 

- **Header** : 

    包括左上的 Logo ， 電腦裝置才會顯示的中央導覽列 ，右上的主題切換
- **SiderBar** : 

    在行動裝置才會顯示的側導覽列，位於 `src/components/Trigger/SideBar.js` 
- **Language** : 

    區換語言 ， 位在 Header 左上 ， 但是沒有寫入 header 元件中，而是在 `src/components/Trigger/Language.js` 
- **Footer** : 

    包括社團的其他連結和 copyright 

### Routing 

**Package** : [React Router V6](https://reactrouter.com/)

[React HashRouter 的文件](https://reactrouter.com/docs/en/v6/routers/hash-router)

因為我們網站是 SPA （一頁式網站），所以唯一一個可以達成 routing 的方式是 `Hash Router`
( 成員頁面的 route 是 `AppDomain/#/members` ， 假設你想要增加一個新頁面 ， 以課程頁面為例 ， 那課程頁面的 URL 會是 `AppDomain/#/members` )

Routing 規則同樣也定義在 `index.js` ( 被定義在 `App` 元件的 `render()` 方法 , 約在 `line 550-600` )

( 在看以下 code 前，請先閱讀 [Nested Route 在 React Router 快速教學中的範例](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes) )

```js
<div className={ ( this.state.IsDark===1? DARK:LIGHT )+'App'}>
                <Language callback={ ()=>this.handleLang() } />

                <Router>
                    <Routes>
                        <Route path='*' element={ < this.NotFoundPage/>}/>

                        <Route path="/">
                            <Route index element={ <this.HomePage/> } />
                            <Route path="members" element={ <this.MembersPage/> } />
                        </Route>
                        
                    </Routes>
                </Router>

                <Footer SocialLinksList={ SocialLinksList }/>
            </div>
```

可以看出不論是哪個 route ， `Language` 和 `Footer` 都會顯示在頁面中 （ 因為他們並沒有包在 `Router` 中 ）
而`AppDomain/`(根目錄)會 render `App.HomePage` 這個元件，而`AppDomain/#/members`則是顯示成員頁面。而`<Route path='*' element={ < this.NotFoundPage/>}/>`這個 path 處理所有不合的 route （ 可以當作 `404 Page` ， 如用戶想連至 `AppDomain/#/cool` 這個 route 就會顯示 `NotFoundPage` 的內容 ，因為沒有 `cool` 這個 route ）  


### 動畫 

首頁最上方和最下方的動畫都是由 `p5.js` 這個套件寫成的， 並透過 `react-p5`使`p5.js` 動畫有辦法被當成 JSX 元件渲染在畫面上。

`p5.js` 動畫原始碼連結如下：
- [cyber BackGround](https://openprocessing.org/sketch/1605892)
- [Linked List Background](https://openprocessing.org/sketch/1605812)


### Reference 

