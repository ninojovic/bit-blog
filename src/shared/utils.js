import { Post } from './../entities/Post'
import { Author } from './../entities/Author'

export const createPostInstances = (title, authorId, details, postId) => {
    return new Post(title, authorId, details, postId)
}

export const createUserDetailsInstance = ({ name, username, email, address, phone, company }) => {
    return new Author(name, username, email, phone, address, company)
}