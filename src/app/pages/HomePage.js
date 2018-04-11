import React from 'react'
import { PostList } from './../components/PostList'
import { fetchService } from './../../services/FetchService'
import { createPostInstances } from './../../shared/utils'


class HomePage extends React.Component {
    state = {
        posts: [],
    }

    fetchPosts = async () => {
        const apiPosts = await fetchService.fetchPosts()
        //const myPosts = await fetchService.fetchMyPosts()

        //const reversed = myPosts.reverse();
        const rawPosts = apiPosts.slice(0, 10)

        const postInstances = rawPosts.map(({ title, userId, body, id }) => {
            return createPostInstances(title, userId, body, id)
        })

        this.setState({ posts: postInstances })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div className="container">
                <h2 className="center-align">Posts</h2>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}

export { HomePage }