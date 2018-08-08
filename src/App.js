import React, { Component, Fragment } from 'react';
import TaskFormContainer from './containers/TaskFormContainer';
import TaskFuncContainer from './containers/TaskFuncContainer';
import TaskViewContainer from './containers/TaskViewContainer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12">
                            <h1 className="text-center">
                                Quản lý công việc
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <TaskFormContainer />
                        <div className="col-12 col-lg">
                            <TaskFuncContainer />
                            <div className="row mb-2">
                                <div className="col-12 text-center">
                                    <h4>
                                        Danh sách công việc
                                    </h4>
                                </div>
                            </div>
                            <TaskViewContainer />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
