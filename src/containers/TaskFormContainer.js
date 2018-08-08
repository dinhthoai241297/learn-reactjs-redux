import React, { Component } from 'react';
import TaskForm from '../components/TaskForm';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskFormContainer extends Component {

    render() {

        var { isOpen, saveTask, taskEdit } = this.props;

        return (
            <TaskForm saveTask={saveTask} isOpen={isOpen} taskEdit={taskEdit} closeForm={this.closeForm} />
        );
    }

    closeForm = () => {
        this.props.clearEditTask();
        this.props.closeForm();
    }
}

const mapStateToProps = state => {
    return {
        isOpen : state.form,
        taskEdit: state.taskedit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveTask : (task) => {
            dispatch(actions.saveTask(task));
        },
        clearEditTask: () => {
            dispatch(actions.clearEditTask());
        },
        closeForm : () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);