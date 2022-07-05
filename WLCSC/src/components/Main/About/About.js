import React from "react";


const About = ( props )=>{
    return (
        <div className='About' id='About'>
            <div className='Text'>
                <h1>{ props.about.title }</h1>
                <p>{ props.about.subtitle }</p>
            </div>
            <div className='ImgContainer'>
                { props.IntroImages.map( (ele,idx)=>{
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


export default About;