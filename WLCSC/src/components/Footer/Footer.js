import React from 'react';

const Footer = (props)=>{
    return (
        <footer>
            <div className={'Footer'}>
                <SocialLinks SocialLinksList={ props.SocialLinksList } />
                <Copyright />
            </div>
        </footer>  
    );
}

const SocialLinks = (props)=>{
    return (
        <div className='Links' >
            <ul className="social">
                { props.SocialLinksList.map( (ele)=> <li key={ele.icon}><a href={ele.link}><i className={'fa '+ele.icon}></i></a></li> ) }
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

export default Footer;