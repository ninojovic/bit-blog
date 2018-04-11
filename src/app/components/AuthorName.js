import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchService } from './../../services/FetchService'

class AuthorName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentDidMount = () => {
        this.fetchAuthor(this.props.authorId)
    }

    fetchAuthor = (authorId) => {
        fetchService.fetchSingleUser(authorId)
            .then(author => this.setState({ author }))
    }

    render() {

        if (!this.state.author) {
            return <h1>loading....</h1>
        }

        const {name, id} = this.state.author

        return (
            <Link to={`/singleauthor/${id}`}>
                <h5>{name}</h5>
            </Link>
        )
    }
}

export { AuthorName }