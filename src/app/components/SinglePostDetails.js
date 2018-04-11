import React from 'react'

import { AuthorName } from './AuthorName'

const SinglePostDetails = ({ post }) => {

    const { title, authorId, details } = post;

    return (
        <div className="row center-align">
            <h2>{title}</h2>
            <AuthorName authorId={authorId} />
            <h5>{details}</h5>
        </div>
    )
}

export { SinglePostDetails }