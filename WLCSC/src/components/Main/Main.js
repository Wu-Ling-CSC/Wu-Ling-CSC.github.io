import React from "react";

import TextBackground from "./TextBackground/TextBackground";
import About from "./About/About";
import Advantage from "./Advantage/Advantage";
import Course from "./Course/Course";
import LinkedListBackground from "./LinkedListBackground/LinkedListBackground";

const Main = ( props )=>{

    // console.log( 'Main' , props );
    return(
        <div className={'Main'}>
            <TextBackground typingSequence={ props.typingSequence }/>
            <About about={ props.about } IntroImages={ props.IntroImages } />
            <Advantage advantage={props.advantage } />
            <Course course={ props.course }/>
            <LinkedListBackground members={ props.members }/>
            {/* <QA /> */}
        </div>
    );
}

export default Main;