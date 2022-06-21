import React from 'react'



function Page1 (props) {
    
    
  // const ornament = (word) => {
    // function ornament(word) {
    //     word=document.querySelectorAll('p')[0].innerHTML.toLowerCase().replace(/[.,]/g,'').split(' ')

    //       const definition = GlossaryList.find(item => item.word===word)
    // }
    
  // }
  
    return(
        <>
        <h1 className= 'page1-H1'> PAGE 1</h1>
        <p>
            Every <span className = 'defineWord' onClick = {() => props.onClick('gnome')}>gnome</span> knows<br/>
            Climbing <span className = 'defineWord' onClick = {() => props.onClick('knobby')}>knobby</span> <span className = 'defineWord' onClick = {() => props.onClick('knoll')}>knolls</span> of <span className = 'defineWord' onClick = {() => props.onClick('gneiss')}>gneiss</span>< br/>
            Causes knocking knees <br/>
            And <span className = 'defineWord'  onClick = {() => props.onClick('gnarled')}>gnarled</span> knuckles.<br/>
            And knotted muscles,<br/>
            Surely,<br/>
            Needing <span className = 'defineWord' onClick = {() => props.onClick('knead')}>kneading</span> for easing<br/>
            Their <span className = 'defineWord' onClick = {() => props.onClick('pneumatic')}>pneumatic</span> breathing.<br/>
        </p>
        </>
    )
}

export default Page1