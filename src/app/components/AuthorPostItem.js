import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorPostItem = ({ posts }) => {
    const postList = posts.map((post, i) =>
        <li key={i}>
            <Link to={`/singlepost/${post.id}`}>
                <h5>{post.title}</h5>
            </Link>
        </li>
    );

    return postList
}