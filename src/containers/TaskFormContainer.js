import React, { Component } from 'react';
import TaskForm from '../components/TaskForm';
import {connect} from 'react-redux';
import {saveTask} from '../actions/index';

class TaskFormContainer extends Component {

    render() {

        var { isOpen, saveTask } = this.props;

        return (
            <TaskForm saveTask={saveTask} isOpen={isOpen} />
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen : state.form
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveTask : (task) => {
            dispatch(saveTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);