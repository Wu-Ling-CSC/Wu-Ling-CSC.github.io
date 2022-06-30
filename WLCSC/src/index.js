import React from 'react';
import ReactDOM from 'react-dom/client';

/*---- p5js with react ---*/
import Sketch from 'react-p5';

/*-- css ---*/
import './index.css';

import LogoImage from './images/WLCSC_Logo.png';


const DARK = 'Dark ';
const LIGHT = 'Light ';

const T = ( t )=> ( t===1? DARK:LIGHT);

const Button = ( props )=>{
   return (
        <button className={"button-top"} >{ props.text }</button>
   );
};

const Logo = ()=>{
    return (
        <a className='Logo' href='/'>
            <img src={LogoImage} alt='Logo'/>
            <span> WLCSC </span>
        </a>
    );
}

const texts = ['about' , 'advantage' , 'course' , 'member' ];
const Buttons = () => {
    
    return (
        <nav className='Buttons'>
            { texts.map( ele => <Button text={ ele } key={ ele } />)}
        </nav>
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

class TextBackground extends React.Component {
	constructor( props){
			super( props );
			this.R_size = 0;
			this.C_size = 0;
			this.span = 100 ;
			this.dot_R = 10;		
	}

    setup = (p5, parentRef) => {
        let W = p5.windowWidth-10 , H = p5.windowHeight-100;
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
                
                                                p5.stroke( 90 );
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
                        
                        let shift = 80 ;
                        p5.text( "X : " + p5.mouseX+ (p5.noise(p5.frameCount/10)*10).toFixed(3) , shift , p5.height - shift+33 );

                        p5.push();
                                p5.strokeWeight(3);
                                p5.stroke( 255 );
                                p5.line( 0 , p5.height -shift +10  , p5.width , p5.height-shift +10 );
                        p5.pop();

                        p5.push();
                                p5.translate( shift , p5.height - shift );
                                p5.rotate( -90 );
                                p5.text( "Y : " + p5.mouseY+ (p5.noise(p5.frameCount/10)*10).toFixed(3) , 10 , -20 );
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
            <div className="TextBackground">
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

class GameMachine extends React.Component {

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

const Main = ( props )=>{
    return(
        <div className={'Main'}>
            {/* <TextBackground /> */}
            {/* <GameMachine />
            <Advantage />
            <Course />
            <QA /> */}
        </div>
    );
}

const Footer = ( props )=>{
    return (
        <footer>
            <div className={'Footer'}>
                {/* <Links />
                <Copyright /> */}
            </div>
        </footer>  
    );
}



class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
        };
    }

    handleTheme(){
        console.log( "change" , this.state.IsDark );
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
    }

    render(){

        // console.log( "App" ,this.handleTheme() );
        return (
            <div className={ T(this.state.IsDark)+'App'}>
                <Header callback={ ()=>this.handleTheme() }  />
                <Main/>
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