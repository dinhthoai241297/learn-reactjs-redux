import React, { Component } from 'react';
import TaskItem from '../components/TaskItem';
import TaskView from '../components/TaskView';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskViewContainer extends Component {

    render() {

        var { tasks } = this.props;

        return (
            <TaskView tasks={this.showTasks(tasks)} />
        );
    }

    showTasks = (tasks) => {
        var rs = null;
        if (tasks) {
            rs = tasks.map((task, index) => {
                return <TaskItem 
                            updateStatus={() => this.props.updateStatus(task.id)} 
                            deleteTask={this.props.deleteTask} 
                            editTask={() => this.editTask(task)} 
                            index={index} 
                            key={index} 
                            task={task} 
                        />
            });
        }
        return rs;
    }

    editTask = (task) => {
        this.props.openForm();
        this.props.setEditTask(task);
    }

    filter(tasks) {

        var {keyword} = this.props.filter;

        // tìm kiếm

        // trạng thái

        // sort

        return tasks;
    }
    search = (tasks, keyword) => {
        
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        openForm: () => {
            dispatch(actions.openForm());
        },
        setEditTask: (task) => {
            dispatch(actions.setEditTask(task));
        },
        deleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        updateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskViewContainer);