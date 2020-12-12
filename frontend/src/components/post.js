import React, { Component } from "react";
import TutorialDataService from "../services/updates.service";
import'./styles/post.module.css'

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTxt = this.onChangeTxt.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      txt: "", 
      type: "",    
      author: "",

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeTxt(e) {
    this.setState({
      txt: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.type,
      txt: this.state.txt,
      type: this.state.title,
      author: this.state.author
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.type,
          txt: response.data.txt,
          type: response.data.title,
          author: response.data.author,
          
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      txt: "",
      type: "",
      author: "",
      submitted: false
    });
  }

  render() {
    return (
        <div className="formbox">
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.author}
                  onChange={this.onChangeAuthor}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Type of post</label>
                <label htmlFor="description">(Announcement/Article/Update/Research)</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.type}
                  onChange={this.onChangeType}
              
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Text</label>
                <input
                  type="text"
                  className="text"  
                  required
                  value={this.state.txt}
                  onChange={this.onChangeTxt}          
                />
              </div>
  
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
        </div>
      );
    }
    
  }
