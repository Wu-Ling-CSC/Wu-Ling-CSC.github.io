import React from "react";

const MemberCard = ( props )=>{
    props = props.person;
    return (
        <div className="MemberCard" key={props.content}>
            <div className="Detail">
                <span className="Dot red"></span>
                <span className="Dot yellow"></span>
                <span className="Dot green"></span>
                <span className="Url">{ props.name+'/'+props.position }</span>
            </div>
            <img src={ props.img } alt={ props.name} />
            <div className="Text">
                <h2>{ props.name }</h2>
                <h3>{ props.position }</h3>
                <p>{ props.content }</p>
            </div>
            <div className="Contact">
                <ul>
                    { props.contact.facebook && <li ><a href={props.contact.facebook}><i className={'fa fa-facebook'}></i></a></li> }
                    { props.contact.github && <li ><a href={props.contact.github}><i className={'fa fa-github'}></i></a></li> }
                    { props.contact.instagram && <li ><a href={props.contact.instagram}><i className={'fa fa-instagram'}></i></a></li> }
                </ul>
                
            </div>
        </div>
    );
}

export default MemberCard;