import React from "react";
/*---- p5js with react ---*/
import Sketch from 'react-p5';

class LinkedListBackground extends React.Component {
    constructor( props){
        super( props );
            this.ListofList = [];

            this.N = null;
            this.List = null;
    }
    setup = (p5, parentRef) =>{
        let W = p5.windowWidth , H = p5.windowHeight-200;
        if( H>500) H=500;
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
                <a href='/members'><h1>{ this.props.members} </h1></a>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

export default LinkedListBackground;