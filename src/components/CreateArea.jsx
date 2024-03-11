import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom'


function CreateArea(props) {
    let [content, setContent] = useState("");
    let [titleName, setTitle] = useState("");
    let [zoomIn, setZoom] = useState(false);


    function handleFocus(){
        setZoom(true);
        
    }
    function handleFocusOut(){
        setZoom(false);
        
    }

    

    

    function handleChange(event){
        console.log(event.target.name);
        console.log(event.target.value);
        if(event.target.name =="content") setContent(event.target.value);
        else if(event.target.name =="title") setTitle(event.target.value);
    }

  return (
    <div>
      <form className="create-note" >
        <input onChange={handleChange} name="title" placeholder="Title" value={titleName} style={{display : (!zoomIn && "none")}}/>
        <textarea onFocus={handleFocus}  onChange={handleChange} name="content" placeholder="Take a note..." rows={zoomIn ? "3":"1"} value={content}/>

        <Zoom in={true}>
        <Fab onClick={(event)=>{
            if(titleName=="" || content=="") {alert("Enter values to submit"); event.preventDefault(); return;}
            props.onAdd({
                title: titleName,
                content: content
            })
            setTitle("");
            setContent("");
            event.preventDefault();
        }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
