import React from 'react'
import { Link } from 'react-router-dom'

export const SinglePostItem = ({ post }) => {

    const { postId, title, details } = post

    return (
        <li className="collection-item">
            <Link to={`/singlepost/${postId}`}>
                <h4>{title}</h4>
                <p>{details}</p>
            </Link>
        </li>
    )
}