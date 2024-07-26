import React from 'react';

class TaskItem extends React.Component {
  handleValidate = () => {
    this.props.onValidate(this.props.taskId);
  };

  handleInvalidate = () => {
    this.props.onInvalidate(this.props.taskId);
  };

  handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      this.props.onDelete(this.props.taskId);
    }
  };

  render() {
    const { taskName, isCompleted } = this.props;
    return (
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none', flex: 1 }}>
          {taskName}
        </span>
        <button onClick={isCompleted ? this.handleInvalidate : this.handleValidate}>
          {isCompleted ? 'Invalider' : 'Valider'}
        </button>
        <button onClick={this.handleDelete}>Supprimer</button>
      </section>
    );
  }
}

export default TaskItem;
