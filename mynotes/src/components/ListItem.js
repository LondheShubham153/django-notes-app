import React from 'react'
import { Link } from "react-router-dom";

let getTitle = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 25) {
        title = title.slice(0, 25) + '...'
    }
    return title
}
let getDate = (note) => {
    return new Date(note.updated).toLocaleDateString()
}
let getContent = (note) => {
    let title = note.body.split('\n')[0]
    let content = note.body.replace(title, "")
    if (content.length > 69) {
        return content.slice(0, 69) + '...'
    }
    return content
}

const ListItem = ({note}) => {
    return (
    <div className='notes-list-item'>
        <Link to={`/note/${note.id}`}>
            <h3>{getTitle(note)}</h3>
            <p>{getContent(note)}</p>
            <p>{getDate(note)}</p>
        </Link>
    </div>
  )
}

export default ListItem