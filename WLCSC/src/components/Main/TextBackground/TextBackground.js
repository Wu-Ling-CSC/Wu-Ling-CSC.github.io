import React from "react";
// type animation 
import TypeAnimation from 'react-type-animation';
/*---- p5js with react ---*/
import Sketch from 'react-p5';

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
                <Typing typingSequence={this.props.typingSequence } />
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}


const Typing = (props)=>{
    
    return (
        <TypeAnimation className='Typing'
            cursor={true}
            sequence={ props.typingSequence }
            wrapper="h2"
            repeat={Infinity}
       />
    );
}

export default TextBackground;