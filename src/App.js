import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      nextId: 1
    };
  }

  addTask = (taskName) => {
    const newTask = {
      id: this.state.nextId,
      name: taskName,
      isCompleted: false
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask],
      nextId: prevState.nextId + 1
    }));
  };

  validateTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: true } : task
      )
    }));
  };

  invalidateTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: false } : task
      )
    }));
  };

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  };

  render() {
    const { tasks } = this.state;
    const completedTasks = tasks.filter(task => task.isCompleted);
    const pendingTasks = tasks.filter(task => !task.isCompleted);

    return (
      <div style={{ padding: '20px' }}>
        <h1>Liste de Tâches</h1>
        <TaskForm onAddTask={this.addTask} />
        <h2>Tâches en cours</h2>
        <div>
          {pendingTasks.map(task => (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskName={task.name}
              isCompleted={task.isCompleted}
              onClickValidate={() => this.validateTask(task.id)}
              onClickInvalidate={() => this.invalidateTask(task.id)}
              onClickDelete={() => this.deleteTask(task.id)}
            />
          ))}
        </div>
        <h2>Tâches complètes</h2>
        <div>
          {completedTasks.map(task => (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskName={task.name}
              isCompleted={task.isCompleted}
              onClickValidate={() => this.validateTask(task.id)}
              onClickInvalidate={() => this.invalidateTask(task.id)}
              onClickDelete={() => this.deleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
