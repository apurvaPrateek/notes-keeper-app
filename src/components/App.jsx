import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
   let [notes, setNotes]=useState([]);

   function AddNotes(newValue){
      setNotes((prevValue)=>{
         return [...prevValue, newValue];
      })
   }
   
   function deleteNote(id){
      setNotes((prevValue)=>{
         return notes.filter((note, index)=>{
            return index!=id;
         })
      })
   }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNotes}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((note, index)=>{
         return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
