import React, { Component } from 'react'

class Form extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
        userName : '',
        comments : '',
        topic : 'english'
    }
  }     

  handleUserNameChange = (e) => {
        this.setState({
            userName : e.userName.value
        })
  }

  handleCommentChange = (event) => {
    this.setState({
        comments : event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.state({
        
    })
  }


  render() {
    return (
      <form>
        <div>
            <label > Username</label>
            <input 
            type="text" value={this.state.userName}
            onChange={this.state.handleUserNameChange} />
        </div>

        <div>
            <label> comments </label>
            <textarea name="" cols="30" rows="10" value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>

        <div>
            <label >topic</label>
            <select value={this.state.topic} onChange={this.state.handleTopicChange}>
                <option value="english">english </option>
                <option value="french">french</option>
                <option value="arabic">arabic</option>
            </select>
        </div>
      </form>
    )
  }
}

export default Form