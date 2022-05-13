/* Background Part */
var R_size = 0;
var C_size = 0;
var span = 100 ;
var dot_R = 10;
var dot_clr;


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');

    /* Background Part */
    R_size = width / span + 1 ;
    C_size = height / span + 1;

    angleMode( DEGREES );

    stroke(255);
    strokeWeight(3);
    fill(255);
    noStroke();

}
  
function draw() {
    background(0);
    CreateLine();
    CreateDot();
    

    UpdateMouse();
}

function CreateDot(){

    for(let i=0;i<R_size ; i++){
        for( let j =0 ; j<C_size ; j++){
            let x = i*span  , y=j*span ;
            if( i%3==0 && j%3==0){
                push();
                    translate( x, y );
                    rotate(45);
                    noFill();

                    stroke( 90 );
                    let cur_sz =  dot_R+ abs( 2*dot_R*sin(frameCount) );
                    rect( -cur_sz/2, -cur_sz/2 , cur_sz , cur_sz );

                    
                    stroke(255);
                    rect( -dot_R/2, -dot_R/2 , dot_R , dot_R);

                pop();
            }
            else{
                
                fill( 90 );
                circle( x ,y , dot_R);
            }
            
        }
    }
}

function CreateLine(){
    strokeWeight( 2 ) ;
    stroke( 50 );
    for( let i=1;i<R_size ;i++){
        if( i%3==0){
            
            line(i*span , 0 , i*span , height );
        }
    }

    for( let i=1;i<C_size ;i++){
        if( i%3==0){
            line( 0 , i*span , width , i*span);
        }
    }
}

function UpdateMouse(){
    textSize(20);
    fill( 255)
    textStyle(BOLD)
    push();
        
        let shift = 80 ;
        text( "X : " + mouseX+ (noise(frameCount/10)*10).toFixed(3) , shift , height - shift+33 );

        push();
            strokeWeight(3);
            stroke( 255 );
            line( 0 , height -shift +10  , width , height-shift +10 );
        pop();

        push();
            translate( shift , height - shift );
            rotate( -90 );
            text( "Y : " + mouseY+ (noise(frameCount/10)*10).toFixed(3) , 10 , -20 );

        pop();

        push();
            strokeWeight(3);
            stroke( 255 );
            line( shift-10 , 0 ,shift-10 , height );
        pop();
    pop();
}
