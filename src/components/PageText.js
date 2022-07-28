import React, {useState, useEffect} from 'react'
import GlossaryList from '../helpers/GlossaryList'
function Text(props) {
    const{activePage, setActivePage, defineClick} = props

    // console.log(activePage)

    // console.log( activePage.text?.page.replace(/[.,]/g,'').split(' '))
    // console.log(GlossaryList['ad-nauseam'])

    // const connectingGlossary = (activePage) => {
        // const wordSearch= activePage.text?.page.split('')
        // wordSearch.map(word => {
        //     if(GlossaryList.word) word= <span className="defineWord" onClick= {() => onClick(word)}>{word}</span>
        // })
        // setActivePage(wordSearch.join(''))
        // return activePage.text.page.join('')
    // }

    // activePage.text.page.split(' ').map(word => {
        
    //        console.log( GlossaryList[word] )
    // })

    //<span className = 'defineWord' onClick = {() => props.onClick('gnome')}> word <span />
    return(
        <div>
            <h1 className="page1-H1"> {activePage.count>0? `PAGE ${activePage.count}`: `COVER PAGE`}</h1>

            <p>{
               activePage.text.page.split(' ').map(word => {
                   return GlossaryList[word.toLowerCase().replace(/[.,]/g,'')] 
                   ? (<span className = 'defineWord' onClick = {() => defineClick(word.toLowerCase().replace(/[.,]/g,''))}>
                    {`${word} `} 
                    </span >) 
                    : `${word} `
                }
            )
           }</p>
            {/* <p className= 'page-text'> {activePage.text?.page}</p> */}
        </div>
        
    )
}

export default Text