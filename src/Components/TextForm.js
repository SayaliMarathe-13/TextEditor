import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
 
    const handleloClick = ()=>{
            let newText= text.toLowerCase();
            setText(newText);
            props.showAlert("converted to lowercase","success");
        }
    const handleClearText = ()=>{
            let newText= "";
            setText(newText);
            props.showAlert("Text cleared","success");
        }
    const handleCopy = ()=>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        
        props.showAlert("Copied to clipboard","success");


    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState(""); //link-"react hooks" 
    // here text is "state variable" whose value is by default enter text here useState is a "hook"
    //and setText ia a "function" that is used to change the value of text variable
    //text = "new text"; wrong way to change the state
    //setText("new text"); // Correct way to change the state
return (
    <>
<div className="container" style={{color : props.mode==="dark"?"white":"black"}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode==="dark"?"rgb(12 13 52)":"white", color: props.mode === "dark"?"white":"black"}} onChange={handleOnChange} rows="10"></textarea >
{/* object in js  */}
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra sapces</button>
</div>

<div className="container my-3" style={{color : props.mode==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
    {/* here split gives us arrays which contains words seperated by space 
    here "/s" means white spaces including new line and "+" means more than one */}
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>

  )
}

