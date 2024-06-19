import React, {useState} from "react";
import Data from './mock_data.json';

export function SearchBar () {

    const [ searchTerm, setSearchTerm ] = useState("");
    const [ filteredData, setFilteredData] = useState(Data);

    const handleTextChange = ({target}) => {
        const {value} = target;
        setSearchTerm(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFilteredData = Data.filter((song) => {
                Object.values(song).some(value => 
                    value.toLowerCase().includes(searchTerm.toLowerCase()));
        });
        setFilteredData(newFilteredData);
    };
    
    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleTextChange}/>
            <input type="submit" value="Search"/>
        </form>
    );
}

// pendiente: - ver si separar handle submit de setFiltered data y mover setfiltered data a Search results para render filteredData en el JSX
// recuerda: saqué props como argumento de search bar porque efectivamete no tiene sentido, esta function no acepta props
