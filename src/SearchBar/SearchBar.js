import React, {useState} from "react";

export function searchBar (props) {

    const [ text, setText ] = useState("");

    const handleTextChange = ({target}) => {
        const {value} = target;
        setText(value);
    };

    const handleSubmit = (event) => {

    };
    
    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleTextChange}/>
            <input type="submit" value="Search"/>
        </form>
    );
}

