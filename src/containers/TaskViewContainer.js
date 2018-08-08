import React, { Component } from 'react';
import TaskItem from '../components/TaskItem';
import TaskView from '../components/TaskView';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskViewContainer extends Component {

    render() {

        var { tasks } = this.props;

        return (
            <TaskView 
                tasks={this.showTasks(tasks)}
                status={this.props.status}
                search={this.props.search}
            />
        );
    }

    showTasks = (tasks) => {
        tasks = this.filter(tasks);
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

        var {keyword, status, sortBy, sortValue} = this.props.filter;
        // tìm kiếm
        tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);

        // trạng thái
        if (status !== -1) {
            tasks = tasks.filter(task => task.status === status);
        }

        // sort
        if (sortBy === 'name') {
            tasks = tasks.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? sortValue : -sortValue);
        } else {
            tasks = tasks.sort((a, b) => a.status === b.status ? 0 : a.status > b.status ? sortValue : -sortValue);
        }
        return tasks;
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
        },
        status: (value) => {
            dispatch(actions.status(value));
        },
        search: (keyword) => {
            dispatch(actions.search(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskViewContainer);