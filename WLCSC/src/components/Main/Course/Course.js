import React from "react";

const Course= ( props )=>{
    return (
        <div className='Course' id='Course'>
            <h1>{ props.course.title }</h1>
            { props.course.card.map( (ele , idx )=><CourseCard ele={ele} ith={ idx } key={ele.title}/>) }
        </div>
    );
}


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

export default Course;