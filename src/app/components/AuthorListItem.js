import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorListItem = ({ name, id }) => {

    return (
        <li className="collection-item">
            <Link to={`/singleauthor/${id}`} >
                <h4>{name}</h4>
            </Link>
        </li>
    )
}