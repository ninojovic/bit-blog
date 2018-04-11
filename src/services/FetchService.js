import { POSTS_URL, USERS_URL } from './../shared/constants'

class FetchService {

    fetchPosts() {
        return fetch(POSTS_URL)
            .then(response => response.json())
    }

    fetchMyPosts() {
        return fetch("http://localhost:4000/posts")
            .then(response => response.json())
    }

    fetchUsers() {
        return fetch(USERS_URL)
            .then(response => response.json())
    }

    fetchSinglePost(id) {
        return fetch(`${POSTS_URL}/${id}`)
            .then(response => response.json())
    }

    fetchSingleUser(id) {
        return fetch(`${USERS_URL}/${id}`)
            .then(response => response.json())
    }

    fetchUserPosts(userId) {
        return fetch(`${POSTS_URL}?userId=${userId}`)
            .then(response => response.json())
    }

    fetchUserDetails(userId) {
        return fetch(`${USERS_URL}/${userId}`)
            .then(response => response.json())
    }
}


export const fetchService = new FetchService()