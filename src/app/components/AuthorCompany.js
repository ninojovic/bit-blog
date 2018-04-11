import React from 'react'

export const AuthorCompany = ({ name, slogan }) => {

    return (
        <React.Fragment>
            <h2>Company</h2>
            <h5>Name: {name}</h5>
            <h5>Slogan: {slogan}</h5>
        </React.Fragment>
    )
}