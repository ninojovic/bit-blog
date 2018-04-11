import React from 'react'

import { AuthorListItem } from './AuthorListItem'

const AuthorList = ({ users }) => {

    const listOfAuthors = users.map((user, i) => <AuthorListItem name={user.name} key={i} id={user.id} />)

    return (
        <ul className="collection">
            {listOfAuthors}
        </ul>
    )
}

export { AuthorList }