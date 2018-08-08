import React, { Component } from 'react';

class TaskView extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th width="10%" scope="col">STT</th>
                                <th scope="col">Công việc</th>
                                <th width="25%" scope="col">Trạng thái</th>
                                <th width="20%" scope="col">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <form>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            onChange={(e) => this.props.search(e.target.value)}
                                        />
                                    </form>
                                </td>
                                <td>
                                    <select onChange={(e) => this.props.status(parseInt(e.target.value, 10))} className="form-control">
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Chưa làm</option>
                                        <option value={1}>Đang làm</option>
                                        <option value={2}>Đã làm</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {this.props.tasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskView;