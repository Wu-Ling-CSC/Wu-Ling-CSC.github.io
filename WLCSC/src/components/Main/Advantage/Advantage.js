import React from "react";

const Advantage = ( props )=>{

    return (
        <div className='Advantage' id='Advantage'>
            <h1>{ props.advantage.title }</h1>
            { props.advantage.card.map( (ele)=> < AdvCard ele={ele} key={ele.icon}/> ) }
        </div>
    );
}

const AdvCard = (props)=>{
    return (
        <div className='AdvCard'>
            <img src={props.ele.icon}  alt='icon'/>
                <h2>{ props.ele.title }</h2>
                <p>{ props.ele.subtitle }</p>
        </div>
    );
}

export default Advantage;
