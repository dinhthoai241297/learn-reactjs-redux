import React, { Component, Fragment } from 'react';
import FormTask from './components/FormTask';
import FuncTask from './components/FuncTask';
import ViewTask from './components/ViewTask';

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
                        <FormTask />
                        <div className="col-12 col-lg">
                            <FuncTask />
                            <div className="row mb-2">
                                <div className="col-12 text-center">
                                    <h4>
                                        Danh sách công việc
                                    </h4>
                                </div>
                            </div>
                            <ViewTask />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
