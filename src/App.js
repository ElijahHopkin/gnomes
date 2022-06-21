import React, {useState} from "react";
import "./App.css";
import Kobold from "./images/Kobold.webp";
import Gnome from "./images/Gnome.jpg";
import Glossary from "./Glossary.js";
import Page1 from "./components/Page1";
import GlossaryList from "./helpers/GlossaryList";

function App() {
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(null)
  const [defineWord, setDefineWord] = useState(null)


  const onClick = (word) => {
    const definition = GlossaryList.find(item => item.word===word)
    setDefineWord(definition)
  }





      
   

  

  /* 
  1. work on CSS to enable hover over functionality for specific words that have definitions
  2. build a stateless component for initialPages. Import all of your page components into this component, to then be imported to App for pages slice of state.
  3. set onClick on 'next' text and the function will take the id of current activePage, and add one. Set the initial state to the id:0===the coverpage.
  */
  return (
    <div className="App">
      <header>
        <h3>EVERY <span className = 'defineWord' onClick={() =>onClick('gnome')}>GNOME</span> KNOWS</h3>
      </header>
      {/* title page*/}
      <h1>EVERY <span className = 'defineWord' onClick={() =>onClick('gnome')}>GNOME</span> KNOWS</h1>
      <h3>By: Elijah and Alyssa Hopkin</h3>
      <h4>2022</h4>
      <div id='cover-image-container'>
        <img id= 'cover-gnome' src={Gnome} alt={"Guillaume GuGnome"} />
        <img id= 'cover-kobold' src={Kobold} alt={"Kobold Heinzelmann"} />
      </div>
      <Page1 onClick={onClick}/>
      <h5>next</h5>
      {/*write a new component for each page? I can have it clear out the page after we click out of it, or I can write out the 
      whole story as separate 'objects' in a helper file, and have the 'next' button help us progress from one object to the next.
      My conceptual issue I run into with that is how to style the pages with images and such if they are simply objects in another file.
      I've never done in-line styling, but that might be my best approach.
      I also want words to be hyperlinked if they exist in the glossary. Clicking a hyperlinked word will display that word in the footer.
      Clicking a new hyperlink will replace THAT word into the footer.*/}

      <div>
        <footer>
          <Glossary defineWord = {defineWord} />
        </footer>
      </div>
    </div>
  );
}

export default App;
