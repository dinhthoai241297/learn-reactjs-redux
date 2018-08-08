import React, { Component, Fragment } from 'react';

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
                        <div className="col-12 col-lg">
                            <div className="row">
                                <div className="col-auto mb-4">
                                    <button className="btn btn-primary">Thêm công việc</button>
                                </div>
                                <div className="col-auto mb-4">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control border border-primary" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">Tìm kiếm</button>
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
                            <div className="row mb-2">
                                <div className="col-12 text-center">
                                    <h4>
                                        Danh sách công việc
                                    </h4>
                                </div>
                            </div>
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
