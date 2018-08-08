import React, { Component } from 'react';
import TaskFunc from '../components/TaskFunc';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskFuncContainer extends Component {

    render() {

        var {toggleForm} = this.props;

        return (
           <TaskFunc toggleForm={toggleForm} search={this.props.search} /> 
        );
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm : () => {
            dispatch(actions.toggleForm())
        },
        search: (keyword) => {
            dispatch(actions.search(keyword));
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskFuncContainer);