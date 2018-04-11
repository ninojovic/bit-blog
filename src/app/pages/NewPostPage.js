import React from 'react'
import {Link} from 'react-router-dom'

class NewPostPage extends React.Component {
    state = {
        titleValue: "",
        postValue: ""
    }

    handleTextChange = (e) => {
        this.setState({ postValue: e.target.value })
    }

    handleTitleChange = (e) => {
        this.setState({ titleValue: e.target.value })
    }

    submitData = () => {
        fetch('http://localhost:4000/posts', {
            method: 'POST',
            body: JSON.stringify({ "title": this.state.titleValue, "body": this.state.postValue }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => console.log(res))
    }

    render() {
        return (
            <div className="container">
                <h2 className="center-align">NEW POST</h2>
                <h4>Title</h4>
                <input type="text" onChange={this.handleTitleChange} value={this.state.titleValue}/>
                <h4>Content</h4>
                <textarea value={this.state.postValue} onChange={this.handleTextChange}></textarea>
                <Link to="/"><input type='button' value='submit' onClick={this.submitData} /></Link>
            </div >
        )
    }
}

export { NewPostPage }