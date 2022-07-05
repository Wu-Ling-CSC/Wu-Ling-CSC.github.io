import React from "react";

const Language = ( props )=>{
    return (
        <div className='Language' onClick={ props.callback } >
            <i className="fa fa-globe icon"></i>
        </div>
    );
}

export default Language;