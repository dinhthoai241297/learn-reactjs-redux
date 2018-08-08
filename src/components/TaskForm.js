import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: 0,
            id: ''
        }
    }

    onChange = (e) => {
        var {name, value} = e.target;
        value = name === 'name' ? value : parseInt(value, 10);
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var {name, status, id} = this.state;
        this.props.saveTask({
            id,
            name,
            status
        });
        this.closeForm();
    }

    closeForm = () => {
        this.setState({
            name: '',
            status: 0,
            id: ''
        });
        this.props.closeForm();
    }

    componentWillReceiveProps = (nextProps) => {
        var {taskEdit} = nextProps;
        if (taskEdit) {
            this.setState({
                name: taskEdit.name,
                status: taskEdit.status,
                id: taskEdit.id
            });
        }
    }

    render() {

        var { isOpen } = this.props;

        if (!isOpen) {
            return null;
        }

        var {name, status} = this.state;

        return (
            <div className="col-12 col-lg-4 mb-4">
                <div className="card">
                    <div className="card-header">
                        Thêm công việc
                                </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <input onChange={this.onChange} value={name} name="name" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <select selected={status} onChange={this.onChange} value={status} name="status" className="form-control">
                                    <option value={0}>Chưa làm</option>
                                    <option value={1}>Đang làm</option>
                                    <option value={2}>Đã làm</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Lưu lại" className="btn btn-success mr-2" />
                                <input type="button" value="Hủy" className="btn btn-warning" onClick={this.closeForm} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;