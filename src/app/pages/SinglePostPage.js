import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AuthorPostList } from './../components/AuthorPostList'
import { SinglePostDetails } from './../components/SinglePostDetails'
import { fetchService } from './../../services/FetchService'
import { createPostInstances } from './../../shared/utils'

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
    }


    fetchSinglePost = (urlID) => {
        fetchService.fetchSinglePost(urlID)
            .then(({ title, userId, body, id }) => createPostInstances(title, userId, body, id))
            .then(post => this.setState({ post }))
    }

    deletePost = (e) => {
        const {postId} = this.state.post
        fetch(`http://localhost:4000/posts/${postId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => console.log(res))
    }

    componentDidMount() {
        this.fetchSinglePost(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        this.fetchSinglePost(newProps.match.params.id)
    }

    render() {

        const { post } = this.state

        if (!post) {
            return <h3>Loading...</h3>
        }

        return (
            <div className='container'>
                <br />
                <Link to="/" className="waves-effect waves-light btn">Back</Link>
                <Link to="/" onClick={this.deletePost} className="waves-effect waves-light btn">Delete</Link>
                <br /><br />
                <SinglePostDetails post={post} />
                <hr />
                <AuthorPostList authorId={post.authorId} />
            </div>
        )
    }
}

export { SinglePostPage }