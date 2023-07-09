import React, {useState} from 'react'

export default function Textarea(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }
    const [text,setText] = useState("Enter text here");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn-primary mx-2 btn-outline-success-bg-subtle" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn-primary mx-2 btn-outline-danger-border-subtle" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )

}
