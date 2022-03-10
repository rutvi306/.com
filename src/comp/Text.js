import React, {useState} from 'react'

export default function Text(props) {
    const handleOnChange= (event)=>{
      setText(event.target.value);
    }

    const handleOnClick= ()=>{
      let newText= text.toUpperCase();
      setText(newText);
    }
    const handleOnClick1= ()=>{
      let newText= text.toLowerCase();
      setText(newText);
    }
    const handleOnClick2= ()=>{
      let newText= '';
      setText(newText);
    }
    const handleOnClick3= ()=>{
      let newText= text[0].toLowerCase()+text.slice(1).toUpperCase();
      setText(newText);
    }
    const handleOnClick4= ()=>{
      let newText= document.getElementById("exampleFormControlTextarea1");
      newText.select();
      navigator.clipboard.writeText(newText.value);
    }
    const handleOnClick5= ()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter the Text here");
  return (
    <div>
        <h4 style={props.myOne}>{props.heading}</h4>
        <div className="mb-3 my-2">
            <textarea className="form-control" style={props.myOne} value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}>
            </textarea>
            <center><div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger mx-3 my-3" onClick={handleOnClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-success mx-3 my-3"onClick={handleOnClick1}>Convert to LowerCase</button>
                <button type="button" className="btn btn-danger mx-3 my-3"onClick={handleOnClick5}>Clear Exter Space</button>
                <button type="button" className="btn btn-success mx-3 my-3"onClick={handleOnClick4}>Copy Text</button>
                <button type="button" className="btn btn-warning mx-3 my-3"onClick={handleOnClick3}>Something New</button>
                <button type="button" className="btn btn-primary mx-3 my-3"onClick={handleOnClick2}>Clear</button>
            </div></center>
        </div>
        <div className="mb-5 my-4" style={props.myOne}>
            <center><h3>Text Summary</h3></center>
            <center>Text Length: {text.length} , Word Length: {text.length>0 ? text.trim().split(" ").length : 0} , Word Timing In Min: {(0.008 * text.split(" ").length)}
            </center>
        </div>
    </div>
  )
}
