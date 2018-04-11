import React, { Component } from 'react'

import { AuthorPostItem } from './AuthorPostItem'
import { fetchService } from './../../services/FetchService'

class AuthorPostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    fetchAuthorPosts = () => {
        fetchService.fetchUserPosts(this.props.authorId)
            .then(post => post.slice(0, 3))
            .then(firstThreePosts => {
                this.setState({ posts: firstThreePosts })
            })
    }

    componentDidMount() {
        this.fetchAuthorPosts()
    }



    render() {

        const { posts } = this.state;

        if (!posts) {
            return (<h1>loading...</h1>)
        }

        return (
            <React.Fragment>
                <h4>3 more posts from same author</h4>
                <ul>
                    <AuthorPostItem posts={posts} />
                </ul>
            </React.Fragment >
        )
    }
}

export { AuthorPostList }