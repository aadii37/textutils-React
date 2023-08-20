import React, { useState } from "react"
// import PropTypes from "prop-types"

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Hereee');
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert To UpperCase</button>
        </div>
    )
}
