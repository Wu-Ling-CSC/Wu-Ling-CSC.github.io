import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// type animation 
import TypeAnimation from 'react-type-animation';

/*---- p5js with react ---*/
import Sketch from 'react-p5';

/*-- css ---*/
import './index.css';

/*-- Images --*/
import LogoImage from './images/WLCSC_Logo.png';
import ComputerImage from './images/computer.gif';
import HackerImage from './images/hacker.gif';
import SocialcareImage from './images/social-care.gif'
import RocketImage from './images/rocket.gif';

import AlgoImage from './images/algorithm.png';
import AIImage from './images/artificial-intelligence.png';
import WebdevImage from './images/data.png';
import CyberImage from './images/encrypted.png';
import LinuxImage from './images/linux.png';

import LocationImage from './images/Location.png'
import GroupImage from './images/Group.jpg'
import BackImage from './images/Back.jpg' 

/* awsomw icon*/
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DARK = 'Dark ';
const LIGHT = 'Light ';

const typingSequence = ['WLCSC', 3000, 'Wu Ling',3000,'Computer Science',3000,'Algorithm',3000,'Cyber Security',3000,'Web Development',3000,''];

const T = ( t )=> ( t===1? DARK:LIGHT);
var flag=1;

const content = [
    {
        button:['About' , 'Advantage' , 'Course' , 'Members' ],
        about:{
            title:'About us',
            subtitle:'A group of student love computer science , coding and sharing experience in Wuling senior high school.',
        },
        advantage:[
            { 
                title:'Meet talented members',
                icon:HackerImage,
                subtitle:'qtqtqtqtqtsdgkgnregnqoirgnkabal blkb wegewgwegwegwegwgwegewg',
            },
            { 
                title:'Start coding from senior high',
                icon:RocketImage,
                subtitle:'sdgknbaorn awiognwao waasfafafasfa wefwefwegwegweg fqfqefwegew',
            },
            { 
                title:'Get experience from seniors',
                icon:SocialcareImage,
                subtitle:'wirnhwon knlkfnbsmngo; awoiethubndfkb aegegwegweg w wewegweg  g ewwe',
            },
            { 
                title:'Good academic atmosphere',
                icon:ComputerImage,
                subtitle:'Learn computer science and all sorts of cool stuff with friends and seniors',
            },
        ],
        course:[
            { 
                title:'Algorithm',
                icon:AlgoImage,
                subtitle:'From C++ syntax to data structures and algorithm , learn competitive programming through online judges problems and contests.',
            },
            { 
                title:'Web Devlopment',
                icon:WebdevImage,
                subtitle:'Learn Web Application Exploitation by solving CTF and look into common web attacks .',
            },
            { 
                title:'Cyber Security',
                icon:CyberImage,
                subtitle:'wirnhwon knlkfnbsmngo; awoiethubndfkb aegegwegweg w wewegweg  g ewwe',
            },
            { 
                title:'Mechine Learing',
                icon:AIImage,
                subtitle:'The most trend tech nowadays , learn AI stack from Keras , PyTorch to Tensenflow.',
            },
            { 
                title:'Linux',
                icon:LinuxImage,
                subtitle:'Instead of CLI tools , programmers tend to use terminal as their weapond , it\'s essential to get used to linux commands.',
            },
        ],
        members:"see all club members",
    },
    {
        button:['關於' , '優勢' , '課程' , '成員' ],
        about:{
            title:'關於我們',
            subtitle:'我們是一群來自武陵高中，喜歡 coding 同時也熱於分享學習經驗的宅宅',
        },
        advantage:[
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
                subtitle:'教室沒有怪獸，只有此起比落的鍵盤聲，現場收聽ASMR Programming',
            },
        ],
        course:[
            { 
                title:'演算法競賽',
                icon:AlgoImage,
                subtitle:'不保證能學會毒瘤資料結構和神奇的演算法，但是保證能讓你學到程競中的電神裝弱文化。',
            },
            { 
                title:'前端網頁開發',
                icon:WebdevImage,
                subtitle:'手把手教你用 HTML CSS Javascript 刻出你現在看到的網站（ 沒',
            },
            { 
                title:'資訊安全',
                icon:CyberImage,
                subtitle:'沒辦法教你駭入同學FB ，但是能學會如何找網頁漏洞並成為 bugs hunter ！',
            },
            { 
                title:'Mechine Learing',
                icon:AIImage,
                subtitle:'The most trend tech nowadays , learn AI stack from Keras , PyTorch to Tensenflow.',
            },
            { 
                title:'Linux',
                icon:LinuxImage,
                subtitle:'讓你學會在你同學面前帥氣的使用 terminal 打 linux command',
            },
        ],
        members:"看看有誰！",
    },
]

// const texts = ['About' , 'Advantage' , 'Course' , 'Members' ];

const Buttons = () => {
    
    return (
        <nav className='Buttons'>
            { texts.map( ele => <Button text={ ele } key={ ele } />)}
        </nav>
    );
}

const Button = ( props )=>{
    return (
         <div className={"button-top"} ><a href={ '#'+props.text }>{ props.text }</a></div>
    );
 };
 
 const Logo = ()=>{
     return (
         <a className='Logo' href='#Start'>
             <img src={LogoImage} alt='Logo'/>
             <span> WLCSC </span>
         </a>
     );
 }

const Change = ( props ) =>{
    return (
        <div className='Change'  >
            <label className="switch">
            <input type="checkbox" onClick={props.callback}/>
            <span className="slider round"></span>
            </label>
        </div>
    );
}


const SideBar = () =>{
    var [ IsActive , toggle ] = useState(false);
    return (
        <div className={'SideBar ' }>
            <div className={'SideBarGroup '} style={ {right:(IsActive ? '0px':'-90px')} }>
                { texts.map( ele=> <div className={"mobile-nav"} ><a href={ '#'+ele }>{ ele }</a></div>) }
            </div>
            <div className='SideBar icon' onClick={()=>{ 
                console.log( 'click\n'  ,IsActive );
                toggle(IsActive=!IsActive); } }>
                <i className="fa fa-bars" ></i>
            </div>
        </div>
    );
}

const Typing = ()=>{
    
    return (
        <TypeAnimation className='Typing'
            cursor={true}
            sequence={ typingSequence }
            wrapper="h2"
            repeat={Infinity}
       />
    );
}

class TextBackground extends React.Component {
	constructor( props){
			super( props );
			this.R_size = 0;
			this.C_size = 0;
			this.span = 80 ;
			this.dot_R = 10;		
	}

    setup = (p5, parentRef) => {
        let W = p5.windowWidth , H = p5.windowHeight-100;
        p5.createCanvas( W , H ).parent(parentRef);
        /* Background Part */
        this.R_size = p5.width / this.span + 1 ;
        this.C_size = p5.height / this.span + 1;

        p5.angleMode( p5.DEGREES );

        p5.stroke(255);
        p5.strokeWeight(3);
        p5.fill(255);
        p5.noStroke();
    };

    draw = (p5) => {
        p5.background(0);
                // this.CreateLine();
                p5.strokeWeight( 2 ) ;
                p5.stroke( 50 );
                for( let i=1;i<this.R_size ;i++){
                        if( i%3===0){
                                
                                p5.line(i*this.span , 0 , i*this.span , p5.height );
                        }
                }

                for( let i=1;i<this.C_size ;i++){
                        if( i%3===0){
                                p5.line( 0 , i*this.span , p5.width , i*this.span);
                        }
                }
                // CreateLine end

                // this.CreateDot();
                for(let i=0;i<this.R_size ; i++){
                        for( let j =0 ; j<this.C_size ; j++){
                                let x = i*this.span  , y=j*this.span ;
                                if( i%3===0 && j%3===0){
                                        p5.push();
                                                p5.translate( x, y );
                                                p5.rotate(45);
                                                p5.noFill();
                
                                                p5.stroke( 150 );
                                                let cur_sz =  this.dot_R+ p5.abs( 2*this.dot_R* p5.sin(p5.frameCount) );
                                                p5.rect( -cur_sz/2, -cur_sz/2 , cur_sz , cur_sz );
        
                                                
                                                p5.stroke(255);
                                                p5.rect( -this.dot_R/2, -this.dot_R/2 , this.dot_R , this.dot_R);
        
                                        p5.pop();
                                }
                                else{
                                        
                                        p5.fill( 90 );
                                        p5.circle( x ,y , this.dot_R);
                                }
                                
                        }
                }
                // CreateDot end
                // this.UpdateMouse();
                p5.textSize(20);
                p5.fill( 255)
                p5.textStyle( p5.BOLD)
                p5.push();
                        
                        let shift = (window.innerWidth>600 ? 60:40) ;
                        p5.text( "X : " + p5.mouseX+ (p5.noise(p5.frameCount/10)*10).toFixed(3) , shift , p5.height - shift+33 );

                        p5.push();
                                p5.strokeWeight(3);
                                p5.stroke( 255 );
                                p5.line( 0 , p5.height -shift +10  , p5.width , p5.height-shift +10 );
                        p5.pop();

                        p5.push();
                                p5.translate( shift , p5.height - shift );
                                p5.rotate( -90 );
                                p5.text( "Y : " + ((p5.mouseY+ (p5.noise(p5.frameCount/10)*10)).toFixed(3)) , 10 , -20 );
                        p5.pop();

                        p5.push();
                                p5.strokeWeight(3);
                                p5.stroke( 255 );
                                p5.line( shift-10 , 0 ,shift-10 , p5.height );
                        p5.pop();
                p5.pop();
    };

    render() {
        return (
            <div className="TextBackground" id='Start'>
                <Typing/>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

class LinkedListBackground extends React.Component {
    constructor( props){
        super( props );
            this.ListofList = [];

            this.N = null;
            this.List = null;
    }
    setup = (p5, parentRef) =>{
        let W = p5.windowWidth , H = p5.windowHeight-200;
        p5.createCanvas( W , H ).parent(parentRef);

        this.N = p5.random( 3,5 );

        this.List = class {
            constructor( posX,posY,f){
                this.posX = posX;
                this.posY = posY;
                this.origY=posY;
                this.n = p5.int(p5.random(5,12));
                this.x = [];
                this.y = [];
                this.val = [];
                this.strokeWeight=5;
                this.stroke = p5.color(200,150);
                this.segLen = 50;
                this.textSize = 20;
                this.flag = f;
              
                this.w = 30 ;
                this.h = 30;
        
                for( let i=0;i<this.n;i++){
                    this.x.push( 0 );
                    this.y.push( 0 );
                    this.val.push( p5.int(p5.random(15,90)));
                }
            }

            Update(){
                p5.push();
                  p5.stroke( this.stroke );
                    p5.strokeWeight( this.strokeWeight );
                    if( this.posX> p5.windowWidth+this.segLen*this.n ){
                        this.posX = -this.segLen*(this.n+3);
                        this.posY = this.origY;
                    }
                    this.posX+= 5+ p5.noise( this.posX, 100 ) ;
                    this.posY+= 3*(p5.noise(this.posY /100 , this.posX / 100,  p5.frameCount/100)-0.5)+ 5*(this.flag ? p5.sin( p5.frameCount/40):p5.cos(p5.frameCount/40))+ (this.flag ? 0.7:-0.7)*(p5.mouseY-p5.pmouseY);
                    this.Draw( 0 , this.posX ,this.posY );
                    for( let i=0; i< this.n-1 ; i++ ){
                        this.Draw( i+1 , this.x[i] , this.y[i] );
                    }
                p5.pop();
            }
        
            Draw( i ,xin ,yin ){
                const dx = xin - this.x[i];
                const dy = yin - this.y[i];
                const angle = p5.atan2( dy , dx );
                this.x[i] = xin -p5.cos( angle )*this.segLen;
                this.y[i] = yin -p5.sin( angle )*this.segLen;
        
                this.Segment( this.x[i] , this.y[i] , angle ,i );
            }
            Segment( x ,y ,a ,i ){
                p5.push();
                    p5.translate(x,y);
                    p5.rotate( a );
                    if( i!==0) p5.line( 0,0,this.segLen , 0);
        
                    p5.push();
                        
                        p5.noStroke();
                        p5.fill(225);
                        p5.rect(-this.w/2,-this.h/2,this.w,this.h);
              
                        p5.fill( 0 );
                        // console.log( this.val[i] );
                        p5.textSize( this.textSize );
                        p5.textStyle(p5.BOLD);
                        p5.text( this.val[i] , -this.w/2+this.textSize/5, this.textSize/2 );
                        
                    p5.pop();
                p5.pop();
            }
        }

        let cut = p5.windowHeight/this.N;

        for(let i=0;i<this.N;i++){
            this.ListofList.push(
                new this.List( p5.random(100,p5.windowWidth-100) ,cut + i*cut*0.7  , (i%2===0 ? true:false))
            );
        }
    }

    draw = (p5) => {
        p5.background(0);
        this.ListofList.forEach(element => {
            element.Update();
        });
    }
    render(){
        return (
            <div className="LinkedListBackground" id='Members'>
                <a href='/members'><h1>See all club members</h1></a>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

class GameMachine extends React.Component {

}

const IntroImages = [
    {
        url:GroupImage,
        txt:'eetwe ehrhw ewe grhre hwre wgwgw ',
    },
    {
        url:BackImage,
        txt:'eetwe ehrhw ewe grhre hwre wgwgw ',
    },
    {
        url:LocationImage,
        txt:'eetwe ehrhw ewe grhre hwre wgwgw ',
    },
]

const About = ()=>{
    return (
        <div className='About' id='About'>
            <div className='Text'>
                <h1>About us </h1>
                <p>A group of student love computer science , coding and sharing in Wuling senior high school.</p>
            </div>
            <div className='ImgContainer'>
                { IntroImages.map( (ele,idx)=>{
                    return (
                        <div className={'ImgBox i'+idx} key={ele.url} >
                            <img src={ele.url} alt='des'/>
                            <span className='TxtImg'>{ele.txt}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const AdvantageList = [
    { 
        title:'Meet talented members',
        icon:HackerImage,
        subtitle:'qtqtqtqtqtsdgkgnregnqoirgnkabal blkb wegewgwegwegwegwgwegewg',
    },
    { 
        title:'Start coding from senior high',
        icon:RocketImage,
        subtitle:'sdgknbaorn awiognwao waasfafafasfa wefwefwegwegweg fqfqefwegew',
    },
    { 
        title:'Get experience from seniors',
        icon:SocialcareImage,
        subtitle:'wirnhwon knlkfnbsmngo; awoiethubndfkb aegegwegweg w wewegweg  g ewwe',
    },
    { 
        title:'Good academic atmosphere',
        icon:ComputerImage,
        subtitle:'Learn computer science and all sorts of cool stuff with friends and seniors',
    },
];



const AdvCard = (props)=>{
    return (
        <div className='AdvCard'>
            <img src={props.ele.icon}  alt='icon'/>
                <h2>{ props.ele.title }</h2>
                <p>{ props.ele.subtitle }</p>
        </div>
    );
}

const Advantage = ()=>{

    // console.log( AdvantageList );
    return (
        <div className='Advantage' id='Advantage'>
            <h1>Advantages ?</h1>
            { AdvantageList.map( (ele)=> < AdvCard ele={ele} key={ele.icon}/> ) }
        </div>
    );
}

const CourseList = [
    { 
        title:'Algorithm',
        icon:AlgoImage,
        subtitle:'From C++ syntax to data structures and algorithm , learn competitive programming through online judges problems and contests.',
    },
    { 
        title:'Web Devlopment',
        icon:WebdevImage,
        subtitle:'Learn Web Application Exploitation by solving CTF and look into common web attacks .',
    },
    { 
        title:'Cyber Security',
        icon:CyberImage,
        subtitle:'wirnhwon knlkfnbsmngo; awoiethubndfkb aegegwegweg w wewegweg  g ewwe',
    },
    { 
        title:'Mechine Learing',
        icon:AIImage,
        subtitle:'The most trend tech nowadays , learn AI stack from Keras , PyTorch to Tensenflow.',
    },
    { 
        title:'Linux',
        icon:LinuxImage,
        subtitle:'Instead of CLI tools , programmers tend to use terminal as their weapond , it\'s essential to get used to linux commands.',
    },
];



const CourseCard= (props)=>{
    return (
        <div className={'CourseCard '+(props.ith%2===1 ? 'flipped':'') }>
            <div className='Text'>
                <h2>{ props.ele.title }</h2>
                <p>{ props.ele.subtitle }</p>
            </div>
            <div className='ImgBox'>
                <img src={props.ele.icon}  alt='course'/>
            </div>
        </div>
    );
}
const Course= ()=>{
    return (
        <div className='Course' id='Course'>
            <h1>Courses ?</h1>
            { CourseList.map( (ele , idx )=><CourseCard ele={ele} ith={ idx } key={ele.title}/>) }
        </div>
    );
}

const Header = ( props )=>{
    return (
        <header>
            <div className={ 'Header'} >
                <Logo/>
                <Buttons/>
                <Change callback={ props.callback }/>
            </div>
        </header>
    ); 
};

const Language = ( props )=>{
    return (
        <div className='Language' onClick={ props.callback } >
            <i class="fa fa-earth-americas icon"></i>
        </div>
    );
}

const Main = ( props )=>{
    return(
        <div className={'Main'}>
            <TextBackground />
            {/* <GameMachine /> */}
            < About />
            <Advantage />
            <Course />
            <LinkedListBackground />
            {/* <QA /> */}
        </div>
    );
}

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

const SocialLinks = ()=>{
    return (
        <div className='Links' >
            <ul className="social">
                { SocialLinksList.map( (ele)=> <li key={ele.icon}><a href={ele.link}><i className={'fa '+ele.icon}></i></a></li> ) }
            </ul>
        </div>
    );
};

const Copyright = ()=>{
    let currentYear =  new Date().getFullYear();
    return (
        <div className='Copyright'>
            <p>Copyright © {currentYear} <span>WLCSC</span> All rights reserved</p>
        </div>
    );
}

const Footer = ( )=>{
    return (
        <footer>
            <div className={'Footer'}>
                <SocialLinks />
                <Copyright />
            </div>
        </footer>  
    );
}



class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
            Lang :1,
        };
    }

    handleTheme(){
        console.log( "change" , this.state.IsDark );
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
        flag=!flag;
    }

    handleTheme(){
        console.log( "Lang" , this.state.Lang );
        if( this.state.Lang===1 ){
            this.setState( {Lang : 0} );
        }
        else this.setState( {Lang : 1} );
        // flag=!flag;
    }

    render(){

        return (
            <div className={ T(this.state.IsDark)+'App'}>
                <Header callback={ ()=>this.handleTheme() } lang={ this.Lang }/>
                <SideBar lang={ this.Lang } />
                <Language callback={ ()=>this.handleTheme() } />
                <Main lang={ this.Lang }/>
                <Footer/>
            </div>
        );
    }
}


const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( <App/> );

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