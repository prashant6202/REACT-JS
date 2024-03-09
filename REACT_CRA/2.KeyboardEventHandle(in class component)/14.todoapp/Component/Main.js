import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  toggleTask(index) {
    let arr = [...this.state.tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    this.setState({ tasks: arr });
  }
  deleteTask(index) {
    let arr = this.state.tasks.filter((t, id) => {
      return index !== id;
    });
    this.setState({ tasks: arr });
  }
  editTask(index, taskStr) {
    let arr = [...this.state.tasks];
    arr[index].taskName = taskStr;
    this.setState({ tasks: arr });
  }
  addTask(task) {
    if (task === "") {
      alert("Task is empty");
      return;
    }
    let newTask = { taskName: task, isCompleted: false };
    let arr = [...this.state.tasks, newTask];
    this.setState({ tasks: arr });
  }
  render() {
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="content">
          <CreateTask addTask={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
