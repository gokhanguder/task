import React, { Component } from 'react';

class TaskItem extends Component {

  handleDelete = () => {
    const { taskName, onClickDelete } = this.props;
    const confirmation = window.confirm(`Êtes-vous sûr de vouloir supprimer la tâche : "${taskName}" ?`);
    if (confirmation) {
      onClickDelete();
    }
  };

  render() {
    const { taskName, isCompleted, onClickValidate, onClickInvalidate } = this.props;

    return (
      <div style={{ display: 'flex', border: '1px solid #ddd', padding: '10px', marginBottom: '5px' }}>
        <div style={{ flex: 1, textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {taskName}
        </div>
        <div style={{ flex: 1 }}>
          <button onClick={isCompleted ? onClickInvalidate : onClickValidate}>
            {isCompleted ? 'Invalider' : 'Valider'}
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <button onClick={this.handleDelete}>Supprimer</button>
        </div>
      </div>
    );
  }
}

export default TaskItem;
