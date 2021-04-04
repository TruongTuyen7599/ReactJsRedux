import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSinhVien extends Component {

    render() {


        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.mangSinhVien.map((sinhVien, index) => {
                            return <tr key={index}>
                                <td>{sinhVien.maSinhVien}</td>
                                <td>{sinhVien.tenSinhVien}</td>
                                <td>{sinhVien.email}</td>
                                <td>{sinhVien.soDienThoai}</td>
                                <td><button type="button" className="btn btn-primary" onClick={
                                    () => {
                                        this.props.dispatch({
                                            type: 'SUA_SINH_VIEN',
                                            sinhVienSua: sinhVien
                                        })
                                    }}>Sửa</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={
                                    () => {
                                        this.props.dispatch({
                                            type: 'XOA_SINH_VIEN',
                                            maSinhVien: sinhVien.maSinhVien
                                        })
                                    }}>Xóa</button></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.quanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien);
