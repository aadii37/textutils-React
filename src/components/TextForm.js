import React, { useState } from "react"
// import PropTypes from "prop-types"

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handlepalindrome = () => {
        // find the length of a string
        const len = {text}.length;
        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {
            // check if first and last string are same
            if ({text}[i] !== {text}[len - 1 - i]) {
                setText('It is Not a  palindrome word ');
            }
        }
        setText('It is a palindrome word');
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handlepalindrome}>Check Palindrome Word</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} & {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read  </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )

}
