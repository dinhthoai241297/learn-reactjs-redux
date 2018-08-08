import React, { Component } from 'react';

class FormTask extends Component {

    render() {
        return (
            <div className="col-12 col-lg-4 mb-4">
                <div className="card">
                    <div className="card-header">
                        Thêm công việc
                                </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Chưa làm</option>
                                    <option>Đang làm</option>
                                    <option>Đã làm</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Lưu lại" className="btn btn-success mr-2" />
                                <input type="button" value="Hủy" className="btn btn-warning" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormTask;