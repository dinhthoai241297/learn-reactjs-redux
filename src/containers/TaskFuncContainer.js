import React, { Component } from 'react';
import TaskFunc from '../components/TaskFunc';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskFuncContainer extends Component {

    render() {

        var {toggleForm} = this.props;

        return (
           <TaskFunc toggleForm={toggleForm} /> 
        );
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm : () => {
            dispatch(actions.toggleForm())
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskFuncContainer);