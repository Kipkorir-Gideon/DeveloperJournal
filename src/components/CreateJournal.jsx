import { useState } from 'react'

function CreateJournal() {

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


    return (
        <div>
            <form>
                <input 
                    name="title" 
                    onChange={handleChange}
                    value={journal.title} 
                    placeholder="Title" 
                />
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={journal.content} 
                    placeholder="Write your journal..." 
                    rows="3" 
                    columns="10">
                </textarea>
                <button>Add</button>
            </form>
        </div>
    )
}


export default CreateJournal;