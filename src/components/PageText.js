import React from 'react'
import GlossaryList from '../helpers/GlossaryList'
function Text(props) {
    const{activePage, setActivePage, onClick} = props

    console.log( activePage.text?.page.replace(/[.,]/g,'').split(' '))

    const connectingGlossary = (activePage) => {
        const wordSearch= activePage.text?.page.split('')
        // wordSearch.map(word => {
        //     if(GlossaryList.word) word= <span className="defineWord" onClick= {() => onClick(word)}>{word}</span>
        // })
        setActivePage(wordSearch.join(''))
        // return activePage.text.page.join('')
    }


    return(
        <div>
            <h1 className="page1-H1"> {activePage.count>0? `PAGE ${activePage.count}`: `COVER PAGE`}</h1>
            {/* <p>
                {connectingGlossary(activePage)
                }
            </p> */}
            <p className= 'page-text'> {activePage.text?.page}</p>
        </div>
        
    )
}

export default Text