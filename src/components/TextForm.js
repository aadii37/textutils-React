import React, { useState } from "react"
// import PropTypes from "prop-types"

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.funcAlert("Converted to Uppercase", 'success')
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.funcAlert("Converted to Lowercase", 'success')
    }
    
    const handletoClear = () =>{
        let newText = '';
        setText(newText);
        props.funcAlert("Cleared The Text", 'success')
    }
    // const handlepalindrome = () => {
    //     // find the length of a string
    //     const len = { text }.length;
    //     let p = ''
    //     // loop through half of the string
    //     for (let i = 0; i < len / 2; i++) {
    //         // check if first and last string are same
    //         if ({ text }[i] !== { text }[len - 1 - i]) {
    //             let p = 'It is Not a  palindrome word '
    //         }
    //         else {
    //             let p = 'It is a palindrome word'
    //         }
    //         setText(p)
    //     }

    // }


    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} </h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'dark' ? 'grey' : 'white', color: props.Mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary my-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handletoClear}>Clear Text</button>

            </div >

            <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
                <p>{0.008 * text.length} Minutes to Read  </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Text in Textbox To Preview"}</p>
            </div>

        </>
    )

}
