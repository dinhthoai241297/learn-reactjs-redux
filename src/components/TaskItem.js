import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        var { task, index } = this.props;
        var text = '', badge = '';
        if (task.status === 0) {
            text = 'Chưa làm';
            badge = 'secondary'
        } else if (task.status ===  1) {
            text = 'Đang làm';
            badge = 'primary';
        } else {
            text = 'Đã làm';
            badge = 'success';
        }

        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{task.name}</td>
                <td>
                    <span className={'badge badge-' + badge}>{text}</span>
                </td>
                <td>
                    <button className="btn btn-warning mr-2">
                        Sửa
                    </button>
                    <button className="btn btn-danger">
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;