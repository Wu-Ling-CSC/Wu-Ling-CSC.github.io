import React from "react";

import LogoImage from '../../images/Logo.png';

const Header = ( props )=>{
    return (
        <header>
            <div className={ 'Header'} >
                <Logo />
                <Buttons navigation={ props.navigation }/>
                <Change callback={ props.callback }/>
            </div>
        </header>
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

const Buttons = (props) => {
    
    return (
        <nav className='Buttons'>
            { props.navigation.map( ele => <Button text={ ele.text } id={ ele.id} key={ ele.text+'Header' } />)}
        </nav>
    );
}

const Button = ( props )=>{
    return (
         <div className={"button-top"} ><a href={ '#'+props.id }>{ props.text }</a></div>
    );
 };

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

export default Header;