import React from 'react'

import { SinglePostItem } from './SinglePostItem'

const PostList = ({ posts }) => {
    const postsList = posts.map((post, i) => <SinglePostItem key={i} post={post} />)
    
    return (
        <ul className="collection">
            { postsList }
        </ul>
    )
}

export { PostList }
