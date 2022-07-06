// basic react package
import React from 'react';
import ReactDOM from 'react-dom/client';
// routing package
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

/*-- css ---*/
import './index.css';

/*-- Images --*/

// 3 images of [ About ]  
import GroupImage from './images/Group.jpg'
import BackImage from './images/Back.jpg' 
import LocationImage from './images/Location.png'

// images of [ Advantage ]
import ComputerImage from './images/computer.gif';
import HackerImage from './images/hacker.gif';
import SocialcareImage from './images/social-care.gif'
import RocketImage from './images/rocket.gif';

// icon of [ Couse ]
import AlgoImage from './images/algorithm.png';
import AIImage from './images/artificial-intelligence.png';
import WebdevImage from './images/data.png';
import CyberImage from './images/encrypted.png';
import LinuxImage from './images/linux.png';


/*-- component --*/
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import SideBar from './components/Trigger/SideBar'
import Language from './components/Trigger/Language'

// predefine theme variables ( added to App className )
const DARK = 'Dark ';
const LIGHT = 'Light ';

// Typing effect in the beginning
const typingSequence = ['WLCSC', 3000, 'Wu Ling',3000,'Computer Science',3000,'Algorithm',3000,'Cyber Security',3000,'Web Development',3000,''];

// content[0]:English , content[1]:Mandarin
const content = [
    {
        navigation:[
            {text:'About' ,id:'About'},
            {text:'Advantage' ,id:'Advantage'},
            {text:'Course' ,id:'Course'},
            {text:'Members' ,id:'Members'},
        ],
        about:{
            title:'About us',
            subtitle:'A group of student love computer science , coding and sharing experience in Wuling senior high school.',
        },
        IntroImages:[
            {
                url:GroupImage,
                txt:'discuss obstacle with senior clubmates',
            },
            {
                url:BackImage,
                txt:'equipped RTX™ 2080 Ti on every computer',
            },
            {
                url:LocationImage,
                txt:'www',
            },
        ],
        advantage:{
            title:'Advantages',
            card:[
                { 
                    title:'Meet talented members',
                    icon:HackerImage,
                    subtitle:'In our club, there are plenty of talented members hiding behind monitors. Making friends with them not only improves your programming skills, but also helps you learn more about the amazing IT field.',
                },
                { 
                    title:'Start coding from senior high',
                    icon:RocketImage,
                    subtitle:'Start your journey of of becoming an expert in computer science at the age of 16! While your friends are still playing Brawl Stars, you are already building your own AI model to play that garbage game.',
                },
                { 
                    title:'Get experience from seniors',
                    icon:SocialcareImage,
                    subtitle:'Our friendly seniors have plenty of experience in the IT world, you can learn from their experience. Such as, how to get a 5/4 in APCS, how to meet girls while the only girls you met are Vtubers, why this year’s YTP still don’t provide free fried chicken.',
                },
                { 
                    title:'Good academic atmosphere',
                    icon:ComputerImage,
                    subtitle:'The nice and comfy atmosphere in the club can increase your productivity in learning.',
                },
            ],
        },
        course:{
            title:'Course',
            card:[
                { 
                    title:'Algorithm',
                    icon:AlgoImage,
                    subtitle:'From C++ syntax to data structures and algorithm , learn competitive programming through online judges problems and contests.',
                },
                { 
                    title:'Web Devlopment',
                    icon:WebdevImage,
                    subtitle:'Learn Front-end fundamental tech , including HTML CSS Javascript . Design your own personal website step by step.',
                },
                { 
                    title:'Cyber Security',
                    icon:CyberImage,
                    subtitle:'Learn Web Application Exploitation by solving CTF and look into common web attacks .',
                },
                { 
                    title:'Mechine Learing',
                    icon:AIImage,
                    subtitle:'The most trend tech nowadays , learn AI stack from Keras , PyTorch to Tensenflow and all sorts of Neural Network',
                },
                { 
                    title:'Linux',
                    icon:LinuxImage,
                    subtitle:'Instead of GUI tools , programmers tend to use terminal as their weapons , it\'s essential to get used to linux commands.',
                },
            ],
        },
        members:"see all club members",
    },
    {
        navigation:[
            {text:'關於' ,id:'About'},
            {text:'優勢' ,id:'Advantage'},
            {text:'課程' ,id:'Course'},
            {text:'成員' ,id:'Members'},
        ],
        about:{
            title:'關於我們',
            subtitle:'我們是一群來自武陵高中，喜歡 coding 同時也熱於分享學習經驗的宅宅',
        },
        IntroImages:[
            {
                url:GroupImage,
                txt:'學長姐親自輔導',
            },
            {
                url:BackImage,
                txt:'每台電腦都有 RTX™ 2080 Ti',
            },
            {
                url:LocationImage,
                txt:'www',
            },
        ],
        advantage:{
            title:'優勢',
            card:[
                { 
                    title:'認識酷酷的電神',
                    icon:HackerImage,
                    subtitle:'武陵資研有許多身藏不露的電神，所以請勿觸摸身旁同學，我們一概不負責因為高壓電而受傷的狀況',
                },
                { 
                    title:'從高中開始程式生涯',
                    icon:RocketImage,
                    subtitle:'當身旁的同學還在打荒野亂鬥，你已經在寫艾爾登法環的外掛無情開賺了',
                },
                { 
                    title:'得到學長姐的經驗',
                    icon:SocialcareImage,
                    subtitle:'如何從 APCS 3/2 考到 5/4 ？ 如何在北二區資訊學科能力競賽喇分？ 如何在 YTP 搶到炸雞？',
                },
                { 
                    title:'舒服的社團氛圍',
                    icon:ComputerImage,
                    subtitle:'教室沒有怪獸，只有此起比落的鍵盤聲，現場收聽 Programming ASMR',
                },
            ],
        },
        course:{
            title:'課程',
            card:[
                { 
                    title:'演算法競賽',
                    icon:AlgoImage,
                    subtitle:'不保證能學會毒瘤資料結構和神奇的演算法，但是保證能讓你學到程競中的電神裝弱文化',
                },
                { 
                    title:'網頁開發',
                    icon:WebdevImage,
                    subtitle:'手把手教你用 HTML CSS Javascript 刻出你現在看到的網站',
                },
                { 
                    title:'資訊安全',
                    icon:CyberImage,
                    subtitle:'沒辦法教你駭入同學FB ，但是能學會如何找網頁漏洞並成為 bugs hunter ！',
                },
                { 
                    title:'機器學習',
                    icon:AIImage,
                    subtitle:'超前部署未來的趨勢，囊括影像辨識到語言處理',
                },
                { 
                    title:'Linux',
                    icon:LinuxImage,
                    subtitle:'讓你學會在你同學面前帥氣的使用 terminal 打 linux command',
                },
            ],
        },
        members:"社團成員",
    },
]

// Social links at [ Footer ]
const SocialLinksList = [
    
    {
        icon:'fa-envelope',
        link: 'wlcsc1995@gmail.com',
    },
    {
        icon:'fa-github',
        link: 'https://github.com/orgs/Wu-Ling-CSC',
    },
    {
        icon:'fa-instagram',
        link:'https://www.instagram.com/wlcsc_27/',
    },
    {
        icon:'fa-facebook',
        link:'https://www.facebook.com/WLCSC/',
    },
]; 


class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
            Lang :0,
        };
    }

    handleTheme(){
        // console.log( "change" , this.state.IsDark );
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
    }

    handleLang(){
        // console.log( "Lang" , this.state.Lang );
        if( this.state.Lang===1 ){
            this.setState( {Lang : 0} );
        }
        else this.setState( {Lang : 1} );
    }

    render(){

        return (
            <div className={ ( this.state.IsDark===1? DARK:LIGHT )+'App'}>
                <Language callback={ ()=>this.handleLang() } />

                <Router>
                    <Routes>
                        <Route path="/home" element={ ()=>(
                        <div>
                            <Header callback={ ()=>this.handleTheme() } navigation={ content[this.state.Lang].navigation } />
                            <SideBar navigation={ content[this.state.Lang].navigation }/>
                            <Main  
                                // TextBackground
                                typingSequence={ typingSequence }
                                // About
                                about={ content[this.state.Lang].about } 
                                IntroImages={ content[this.state.Lang].IntroImages }
                                // Advantage
                                advantage={ content[this.state.Lang].advantage }
                                // Course
                                course={ content[this.state.Lang].course }
                                // LinkedListBackround
                                members={ content[this.state.Lang].members }  
                            />
                        </div>)}>
                            {/* <Header callback={ ()=>this.handleTheme() } navigation={ content[this.state.Lang].navigation } />
                            <SideBar navigation={ content[this.state.Lang].navigation }/>
                            <Main  
                                // TextBackground
                                typingSequence={ typingSequence }
                                // About
                                about={ content[this.state.Lang].about } 
                                IntroImages={ content[this.state.Lang].IntroImages }
                                // Advantage
                                advantage={ content[this.state.Lang].advantage }
                                // Course
                                course={ content[this.state.Lang].course }
                                // LinkedListBackround
                                members={ content[this.state.Lang].members }  
                            /> */}
                        </Route>
                        <Route path="/member" element={
                            <div>
                                {/* <Header callback={ ()=>this.handleTheme() } navigation={ content[this.state.Lang].navigation } /> */}
                            </div>
                        }>
                            {/* <Header callback={ ()=>this.handleTheme() } navigation={ content[this.state.Lang].navigation } /> */}
                        </Route>
                    </Routes>
                </Router>
                <Footer SocialLinksList={ SocialLinksList }/>
            </div>
            
        );
    }
}

const Index = ()=>{
    return (
        <div>
            <h1>Index</h1>
        </div>
    );   
}

const Home = ()=>{
    return (
        <div>
            <h1>Home</h1>
        </div>
    );   
}

const Members = ()=>{
    return (
        <div>
            <h1>Members</h1>
        </div>
    );
}

const NotFound = ()=>{
    return (
        <div>
            <h1>NotFound</h1>
        </div>
    );
}

const Test = ()=>{
    return (

            <Router>
                <Routes>
                    <Route path='*' element={ < NotFound/>}/>
                    <Route path="/">
                        <Route index element={ <Index/> } 
                        
                        />
                        <Route path="home" element={ <Home/> } 
                        
                        />
                        <Route path="member" element={ <Members/> }
                            
                        />
                    </Route>
                    
                    
                </Routes>
            </Router>
        
    );
}

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( <Test/> );

/*****************
    App :
        Header :
        Main :
            Card:
                User :
                    Image
                Techs :
                Details:
                    checkIcon
        Footer :

*****************/