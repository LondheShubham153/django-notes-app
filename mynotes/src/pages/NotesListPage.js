import React, { useState,useEffect } from 'react'
// import notes from '../assets/data.js'
import ListItem from '../components/ListItem.js'
import AddButton from '../components/AddButton.js'

const NotesListPage = () => {
    let [notes, setNote] = useState([])

    useEffect(() => {
        getNotes()
    }, []) // fires once when the component is mounted

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log(data)
        setNote(data)
    }

    return (
        <div className='notes'>
            <div className="notes-header">
                <h2 className="notes-title">
                    &#9782; Notes
                </h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note,index) => {
                    return (
                        <div className='note-preview' key={index}>
                            <ListItem note={note}/>
                        </div>
                    )
                })}
            </div>
            <AddButton/>
        </div>
    )
}

export default NotesListPage