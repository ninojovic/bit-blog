import React from 'react'

export const AuthorInfo = ({ name, username, email, phone }) => {
    return (
        <div className="row">
            <img className="col s3" src="https://picsum.photos/200/?random" alt="randomUserPicture" />
            <div className="col s9">
                <h2>{name}</h2>
                <h5>username: {username}</h5>
                <h5>email: {email}</h5>
                <h5>phone: {phone} </h5>
            </div>
        </div>
    )
}