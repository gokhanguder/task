import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleAddTask = () => {
    if (this.state.taskName.trim()) {
      this.props.onAddTask(this.state.taskName);
      this.setState({ taskName: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.taskName}
          onChange={this.handleInputChange}
          placeholder="Ajouter une tâche"
        />
        <button onClick={this.handleAddTask}>Ajouter une tâche</button>
      </div>
    );
  }
}

export default TaskForm;
