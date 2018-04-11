import React from 'react'

import { AuthorList } from './../components/AuthorList'
import { fetchService } from './../../services/FetchService'

class AuthorsPage extends React.Component {
    state = {
        users: []
    }

    fetchAuthors = () => {
        fetchService.fetchUsers()
            .then(users => this.setState({ users }))
    }

    componentDidMount() {
        this.fetchAuthors()
    }

    render() {
        return (
            <div className="container">
                <h2 className="center-align">AUTHORS (9)</h2>
                <AuthorList users={this.state.users} />
            </div>
        )
    }
}

export { AuthorsPage }