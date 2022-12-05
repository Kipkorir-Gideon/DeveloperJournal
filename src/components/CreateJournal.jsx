import React from "react";
import { useState } from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateJournal(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [journal, setJournal] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setJournal(prevJournal => {
            return {
                ...prevJournal,
                [name]: value
            }
        })
    }

    function submitJournal(event) {
        props.onAdd(journal)
        setJournal({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }


    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input 
                        name="title" 
                        onChange={handleChange}
                        value={journal.title} 
                        placeholder="Title" 
                    />
                )}

                <textarea 
                    name="content" 
                    onClick={expand}
                    onChange={handleChange}
                    value={journal.content} 
                    placeholder="Write your journal..." 
                    rows={isExpanded ? 3 : 1} 
                    columns="10">
                </textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitJournal}><PostAddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}


export default CreateJournal;