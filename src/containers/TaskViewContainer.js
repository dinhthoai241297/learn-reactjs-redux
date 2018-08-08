import React, { Component } from 'react';
import TaskItem from '../components/TaskItem';
import TaskView from '../components/TaskView';
import {connect} from 'react-redux';

class TaskViewContainer extends Component {

    render() {

        var {tasks} = this.props;

        return (
            <TaskView tasks={this.showTasks(tasks)} />
        );
    }

    showTasks = (tasks) => {
        var rs= null;
        if (tasks) {
            rs = tasks.map((task, index) => {
                return <TaskItem index={index} key={index} task={task} />
            });
        }
        return rs;
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskViewContainer);