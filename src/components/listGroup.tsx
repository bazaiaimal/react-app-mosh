import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProp{
    names: string[];
    heading: string;
    onSelectName: (name: string) => void;
}

function ListGroup({names , heading , onSelectName}: ListGroupProp) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {names.length === 0 && <p>No item found</p> }
            <ul className="list-group">
                {names.map((name , index) => 
                <li 
                className={selectedIndex === index ? "list-group-item active" : "list-group-item" } 
                key={name} 
                onClick={() => { 
                    setSelectedIndex(index);
                    onSelectName(name);
                    }}>
                    {name}
                </li>)}
            </ul>
        </>
    );
}

export default ListGroup;