import React, { Component } from 'react';
import TaskItem from './TaskItem';

class ViewTask extends Component {

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
                                        <input type="text" className="form-control" />
                                    </form>
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option>Tất cả</option>
                                        <option>Chưa làm</option>
                                        <option>Đang làm</option>
                                        <option>Đã làm</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <TaskItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewTask;