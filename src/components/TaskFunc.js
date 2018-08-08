import React, { Component } from 'react';

class TaskFunc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (e) => {
        var {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.search(this.state.keyword);
    }

    showForm = () => {
        if (this.props.taskedit) {
            this.props.clearEditTask();
        } else {
            this.props.toggleForm();
        }
    }

    render() {
        var {s} = this.props;
        return (
            <div className="row">
                <div className="col-auto mb-4">
                    <button className="btn btn-primary" onClick={this.showForm}>Thêm công việc</button>
                </div>
                <div className="col-auto mb-4">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control border border-primary"
                                onChange={this.onChange}
                                name="keyword"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-auto mb-4">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp
                                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a 
                                className={'dropdown-item ' + (s.sortBy === 'name' && s.sortValue === 1 ? 'active' : '')} 
                                onClick={() => this.props.sort({sortBy: 'name', sortValue: 1})}
                            >
                                Tên A-Z
                            </a>
                            <a 
                                className={'dropdown-item ' + (s.sortBy === 'name' && s.sortValue === -1 ? 'active' : '')}
                                onClick={() => this.props.sort({sortBy: 'name', sortValue: -1})}
                            >
                                Tên Z-A
                            </a>
                            <hr />
                            <a 
                                className={'dropdown-item ' + (s.sortBy === 'status' && s.sortValue === 1 ? 'active' : '')}
                                onClick={() => this.props.sort({sortBy: 'status', sortValue: 1})}
                            >
                                Trạng thái A-Z
                            </a>
                            <a 
                                className={'dropdown-item ' + (s.sortBy === 'status' && s.sortValue === -1 ? 'active' : '')}
                                onClick={() => this.props.sort({sortBy: 'status', sortValue: -1})}
                            >
                                Trạng thái Z-A
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TaskFunc;