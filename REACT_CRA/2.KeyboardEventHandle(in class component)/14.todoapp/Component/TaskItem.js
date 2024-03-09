import React, { Component } from "react";
import "./TaskItem.css";
export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { taskName: this.props.taskItem.taskName, isEditing: false };
    this.setIsEditing = this.setIsEditing.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(e) {
    this.props.toggleTask(this.props.id);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.editTask(this.props.id, this.state.taskName);
    this.setIsEditing(false);
  }
  handleSave(e) {
    this.setState({ taskName: this.props.taskItem.taskName, isEditing: false });
  }
  handleChange(e) {
    this.setState({ taskName: e.target.value });
  }
  handleClick(e) {
    this.props.deleteTask(this.props.id);
  }
  setIsEditing(editing) {
    this.setState({ isEditing: editing });
  }
  render() {
    let result;
    if (this.state.isEditing == true) {
      result = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.taskName}
                onChange={this.handleChange}
              />
              <span style={{ float: "right" }}>
                <button className="save task" type="submit">
                  Save
                </button>
                <button className="back task" onClick={this.handleSave}>
                  Back
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.handleToggle} className="task">
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-completed"
              }
            >
              {this.props.taskItem.taskName}
            </span>
          </td>
          <td className="Actions">
            <button
              className="edit task"
              onClick={() => {
                this.setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button className="delete task" onClick={this.handleClick}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
