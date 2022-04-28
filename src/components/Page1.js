import React from 'react'



function Page1 (props) {
    
    return(
        <>
        <h1 className= 'page1-H1'> PAGE 1</h1>
        <p>
            Every <span onClick = {() => props.onClick('gnome')}>gnome</span> knows<br/>
            Climbing <span onClick = {() => props.onClick('knobby')}>knobby</span> knolls of gneiss< br/>
            Causes knocking knees <br/>
            And <span onClick = {() => props.onClick('gnarled')}>gnarled</span> knuckles.<br/>
            And knotted muscles,<br/>
            Surely,<br/>
            Needing <span onClick = {() => props.onClick('knead')}>kneading</span> for easing<br/>
            Their <span onClick = {() => props.onClick('pneumatic')}>pneumatic</span> breathing.<br/>
        </p>
        </>
    )
}

export default Page1