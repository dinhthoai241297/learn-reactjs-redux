import React, { Component } from 'react';

class TaskItem extends Component {

    deleteTask = (id) => {
        if (confirm('bạn có chắc chắn muốn xóa!')) { // eslint-disable-line
            this.props.deleteTask(id);
        }
    }

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
                    <span onClick={this.props.updateStatus} className={'badge badge-' + badge}>{text}</span>
                </td>
                <td>
                    <button className="btn btn-warning mr-2" onClick={this.props.editTask}>
                        Sửa
                    </button>
                    <button className="btn btn-danger" onClick={() => this.deleteTask(task.id)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;