import React, { Component } from 'react';
import { connect } from 'react-redux';

class SP extends Component {


    render() {
        let { product } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" height={300} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">
                            {product.giaBan}
                        </p>
                        <button type="button" name="" id="" class="btn btn-primary" onClick={() => {
                            this.props.viewProductDetail(product);
                        }}>Xem Chi tiet</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.themSanPham(product);
                        }} > Thêm sản phẩm </button>
                    </div>
                </div>
            </div>
        )
    }
}


//hàm này cũng giống mapStateToProps tuy nhiên tạo ra props là 1 hàm chứ không phải giá trị =>
// thông qua hàm này sẽ gửi giá trị mới lên redux
const mapDispatchToProps = (dispatch) => {

    return {
        themSanPham: (spClick) => {

            let spGioHang = { ...spClick, soLuong: 1 };
            const action = {
                type: 'THEM_GIO_HANG',// thuộc tính bắt buộc
                spGioHang: spGioHang,// Giá trị gửi lên redux xửu lý
            };
            dispatch(action);
        }

        // dùng hàm dispatch mà redux cung cấp để gửi dữ liệu đi

    }
}
// tạo ra 1 component mới có chứa các props của redux
export default connect(null, mapDispatchToProps)(SP);
