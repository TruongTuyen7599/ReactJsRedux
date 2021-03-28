import React, { Component } from 'react'

import _ from 'lodash'; // import thư viện lodash


// Thư viện kết nối reactComponent -reduxStore
import { connect } from 'react-redux';

class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHangReducer.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img width={50} src={spGH.hinhAnh} /></td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaSP}</td>
            </tr>
        })
    }
    render() {
        console.log('prop:', this.props);
        return (

            <div className="mt-5">
                <div>
                    <h3>Giỏ hàng</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá bán</th>
                                <th>Thành tiền</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>{this.renderGioHang()}</tbody>
                    </table>
                </div>

            </div>
        )
    }
}




// hàm lấy giá trị từ state của redux về biến thành props ở component

const mapStateToProps = (state) => {
    //state: rootReducer
    return {
        gioHangReducer: state.gioHangReducer.gioHang
    }
}

//kết nối giỏ hàng component và redux = > tạo 1 component mới chứa các state của redux
export default connect(mapStateToProps)(GioHang);
