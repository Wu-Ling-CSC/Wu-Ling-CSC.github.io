import React  ,{useState} from "react";

const SideBar = ( props ) =>{
    var [ IsActive , toggle ] = useState(false);
    return (
        <div className={'SideBar ' }>
            <div className={'SideBarGroup '} style={ {right:(IsActive ? '0px':'-90px')} }>
                { props.navigation.map( ele=> <div className={"mobile-nav"} key={ele.text+'SideBar'}><a href={ '#'+ele.id }>{ ele.text }</a></div>) }
            </div>
            <div className='SideBar icon' onClick={()=>{ 
                console.log( 'click\n'  ,IsActive );
                toggle(IsActive=!IsActive); } }>
                <i className="fa fa-bars" ></i>
            </div>
        </div>
    );
}

export default SideBar;