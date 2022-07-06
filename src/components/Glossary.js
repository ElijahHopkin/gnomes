import React from 'react'
import GlossaryList from '../helpers/GlossaryList'
export default function Glossary(props) {

    

    return(
        <div>
            <h4>GLOSSARY</h4>
            <p className= 'definition-text'>{props.defineWord?.word} : {props.defineWord?.definition}</p>
            
            <div>Definitions from Oxford Languages and Google</div>
        </div>
    )
}