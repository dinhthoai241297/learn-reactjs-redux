import React, { Component } from 'react';
import TaskFunc from '../components/TaskFunc';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskFuncContainer extends Component {

    render() {

        var {toggleForm} = this.props;

        return (
           <TaskFunc clearEditTask={this.props.clearEditTask} taskedit={this.props.taskedit} s={this.props.s} toggleForm={toggleForm} search={this.props.search} sort={this.props.sort} /> 
        );
    }

}

const mapStateToProps = state => {
    return {
        s: {
            sortBy: state.filter.sortBy,
            sortValue: state.filter.sortValue
        },
        taskedit : state.taskedit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm : () => {
            dispatch(actions.toggleForm())
        },
        search: (keyword) => {
            dispatch(actions.search(keyword));
        },
        sort: (sort) => {
            dispatch(actions.sort(sort));
        },
        clearEditTask: () => {
            dispatch(actions.clearEditTask());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFuncContainer);