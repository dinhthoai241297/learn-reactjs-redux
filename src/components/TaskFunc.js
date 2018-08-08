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

    render() {
        return (
            <div className="row">
                <div className="col-auto mb-4">
                    <button className="btn btn-primary" onClick={this.props.toggleForm}>Thêm công việc</button>
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
                            <a className="dropdown-item">Tên A-Z</a>
                            <a className="dropdown-item">Tên Z-A</a>
                            <hr />
                            <a className="dropdown-item">Trạng thái A-Z</a>
                            <a className="dropdown-item">Trạng thái Z-A</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TaskFunc;