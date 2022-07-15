<h4 align="center"><a href="https://github.com/jason810496/WLCSC/blob/master/README_zh.md">中文</a></h4>

# WLCSC Website

- [Official Website of Wuling Computer Science Club](#official-website-of-wuling-computer-science-club)
- [Improve club website](#improve-club-website)
- [Development & Deployment](#development--deployment)
- [App content](#app-content)
- [App structure](#app-structure)
    - [Directory structure](#directory-structure)
    - [Components](#components)
        - [App](#app)
        - [HomePage](#homepage)
        - [MembersPage](#memberpage)
        - [Other basic components](#other-basic-components)
    - [Routing](#routing)
    - [Animation](#animation)

## Official Website of Wuling Computer Science Club

A static website builded in [React](https://reactjs.org/)

**Why React ?**
- Reuseable:
    React components are reusebale , for instance : Footer , Header ，or the Profile cards on Members Page 。 Once you write the templates of the components ，you could take data as input of components and render them on page.

- Mainstream:
    `React` 與 `Vue` are the most popular front-end framwork ，which could increase development efficiency and maintainability 

## Improve club website

**Requirement：**
- git & github ( know how to Pull Request )
- basic JS
- React class component
- React function component 
- CSS ( If you want to change the style  )


**Todo：**
- [ ] Finish `PageNotFound` components
    `PageNotFound`component is defined in `App` component in `index.js`.
- [ ] Organize CSS
    The current CSS styling are all written in one file ， which can be consider written in Object Oriented CSS

- [ ] Optimize RWD
    Makes CSS breakpoint better

- [ ] Add new Pages（ Route ） 
    Eg: Add a page about courses , introduce more detail

## Development & Deployment
( the following command are run in terminal )

**prerequisites:**

install `npm` , enter `.../src/` directory and run `npm install` .

**Commands:**

Start the development server
```sh
npm run start
```
For deployment( the script will automatically build current app and deploy it onto Github  . Wait about 1 minute and you will see new version of website is online )
```sh
npm run deploy
```

### App Content

All of the website content ( including images ) were written variables that are `cosnt` type in the beginning of **`index.js`** ( If you merely want to change the content of website , just modify the varibles above , those variable are `Dictionary` type and named by relative positon of website )

**Home page :**

The content of Home page are stored in `content` array ( located at `line 70` ) `content[0]` is English content , `content[1]` is Chinese content ( the switching mechanism will be describe in `App` component section )

**Members page :**

The content of Members page are stored in `Memberscontent` array ( located at `line 280` ) `Memberscontent[0]` is English content , `Memberscontent[1]` is Chinese content ( the switching mechanism is same as `App` component )

**Footer :**

The social links in Footer section are store in `SocialLinkList` ( located at `line 240` )

**Typing effect :**

The words of typing effect in the beginning of home page are stored in `typingSequence` array , moreover , the element should be a pair of string and interger( the span of time in ms )
```js
// Typing effect in the beginning
const typingSequence = ['WLCSC', 3000, 'Wu Ling',3000,'Computer Science',3000,'Algorithm',3000,'Cyber Security',3000,'Web Development',3000,''];
```

## App structure 

### Directory structure


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
    The top structure of Application , include all sors of the main components , and store the content of website .

- `index.css` : 
    CSS file of website  , haven't splitted by components .

### Components 

#### App 

`App` is the component that control **Theme** , **Language** and **Routing** . If you want to modity its structure , please read `React Class Component`,`React State` and `React Route` at first .



The following is structure of `App` component ： 
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

**Feature :**
1. **Switch Theme :**

    Switch the state by `IsDark` properity of `state` , and add CSS ( change the className of  the outest div to `Dark` or `Light` and setup CSS rule , for example :  setup `.Dark .obj{ ... }` or `.Light .obj{ ... }` to achieve theme toggler )

2. **Switch Language :**

    Notice that `Lang` properity of `state` switch between '0' and `1` , additionally , `content` array ( the array that store content of website , and that  `content[0]` is English content , `content[1]` is Chinese content , so that the content of website would switch between English and Chinese while the `state.Lang` switch between `0` and `1` ) 

#### HomePage 
The Home page of website ( most of code in Application )

the main component located in `../src/components/Home.js`，which include `TextBackground.js` , `About.js` , `Advantage.js` , `Course.js` and `LinkedListBackground.js` these components

The structure of `HomePage` is defined as the following : 

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
**Components information :**
- **TextBackforund :**

    Including the cyber style animation background & typing effect titles.
- **About :**

    Section of 「 About us 」and three introduction images with different laywers .
- **Course :**

    Four courses information cards 
- **LinkedListBackground :**

    Link of Members page & Linked-List animation background section 

#### MemberPage 
The structure of members page is more simple than Home page .

The main components are located `../src/components/Members.js` 

The structure of `MembersPage` : 
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

The main function is rendering differnet members data through `MembersCard` component on page .

#### Other basic components 

- **Header** : 

    Including the top-left Logo , the middle navigaton bar that will only show on the computer devices , the top-right theme switch .  
- **SiderBar** : 

    The side navigation bar that onlyt show on mobile device , located in `src/components/Trigger/SideBar.js` 
- **Language** : 

    switch language , located at the top-left area of Header . However , it isn't written in header component , it's written in  `src/components/Trigger/Language.js`  instead .
- **Footer** : 

    Including the social links ansd copyright .

### Routing 

**Package** : [React Router V6](https://reactrouter.com/)

[Document of React HashRouter](https://reactrouter.com/docs/en/v6/routers/hash-router)

As an SPA ( Single Page Application ) , the only way to routing is `Hash Router` . 
( Our members page route is `AppDomain/#/members` , if you want to add a new page ,  such as a course page . The URL of course page would be `AppDomain/#/members`)

Our routing rule were also defined in `index.js` ( It's defined in `render()` method of `App` component at `line 550-600` )


( Read [Nested Route Example in React Router quick turtorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes) first before reading the following code )

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

After some observation , we can find out that no mater which route , the `Language` and `Footer` components will be render on page ( They are not included in `Router` ) The `AppDomain/` route ( root route ) will render `App.HomePage` component , and that `AppDomain/#/members` will show members page . `<Route path='*' element={ < this.NotFoundPage/>}/>`this path will handle invalid route ( which can be seen as `404 Page` , For instance , if user direct to `AppDomain/#/cool`  , it will render `NotFoundPage` , because the `cool` route don't exist )

### Animation 

The background animation at the begininning of page and the bottom of page are written in `p5.js` , and render through `react-p5` ( so that the animation can be render as JSX component on page )

sourse code of `p5.js` animation : 
- [cyber BackGround](https://openprocessing.org/sketch/1605892)
- [Linked List Background](https://openprocessing.org/sketch/1605812)


### Reference 

