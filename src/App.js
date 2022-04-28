import React from "react";
import "./App.css";
import Kobold from "./images/Kobold.webp";
import Gnome from "./images/Gnome.jpg";
import Glossary from "./Glossary.js";

function App() {
  return (
    <div className="App">
      <header>
        <h3>EVERY GNOME KNOWS</h3>
      </header>
      {/* title page*/}
      <h1>EVERY GNOME KNOWS</h1>
      <h3>By: Elijah and Alyssa Hopkin</h3>
      <h4>2022</h4>
      <div id='cover-image-container'>
        <img id= 'cover-gnome' src={Gnome} alt={"Guillaume GuGnome"} />
        <img id= 'cover-kobold' src={Kobold} alt={"Kobold Heinzelmann"} />
      </div>
      <h5>next</h5>
      {/*write a new component for each page? I can have it clear out the page after we click out of it, or I can write out the 
      whole story as separate 'objects' in a helper file, and have the 'next' button help us progress from one object to the next.
      My conceptual issue I run into with that is how to style the pages with images and such if they are simply objects in another file.
      I've never done in-line styling, but that might be my best approach.
      I also want words to be hyperlinked if they exist in the glossary. Clicking a hyperlinked word will display that word in the footer.
      Clicking a new hyperlink will replace THAT word into the footer.*/}

      <div>
        <footer>
          <Glossary />
          {/* <h4>GLOSSARY</h4>
          <div>
            <h5>ad nauseam</h5>
            <h5>
              referring to something that has been done or repeated so often
              that it has become annoying or tiresome.
            </h5>
          </div>
          Definitions from Oxford Languages and Google */}
        </footer>
      </div>
    </div>
  );
}

export default App;
