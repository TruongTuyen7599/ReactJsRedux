import React, { Component } from 'react'
import TableSinhVien from './TableSinhVien';
import { connect } from 'react-redux';
class FromValidation extends Component {
    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },

    }


    handleChangeInput =
        (event) => {
            const { value, name } = event.target;// thẻ inpit có chứa 2 attribute là name và value nên phải bốc tách phần tử
            let typeProps = event.target.getAttribute('typeProps');

            let newValues = { ...this.state.values };
            //newValues.maSinhVien <=> newValues['maSinhVien']
            newValues[name] = value;

            let newErrors = { ...this.state.errors };

            let errorMess = '';

            if (newValues[name].trim() === '') {
                errorMess = name + 'Không được bỏ trống';
            }
            if (typeProps === 'email') {
                const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regexEmail.test(newValues[name])) {
                    errorMess = 'Email không hợp lệ';
                }
            }
            newErrors[name] = errorMess;




            this.setState({
                values: newValues,
                errors: newErrors
            }, () => {
                console.log('state', this.state);
            })

        }

    handleSubmit = (event) => {
        // chặn sư kiện reload của browser
        event.preventDefault();

        // kiểm tra hợp lệ của form  => form hợp lệ khi (1): tất cả value phải khác rỗng. (2):
        // các thuộc tính error  = rổng

        let { values, errors } = this.state;
        let valid = true;
        for (let key in values) {
            if (values[key].trim() === '') {
                valid = false;
            }
        }
        for (let key in errors) {
            if (errors[key].trim() !== '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('dữ liệu nhập vào chưa hợp lệ');
            return;
        }

        // cách 2: hàm connect không truyền tham số thứ 2 =>  dùng this.props.dispatch
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: values
        };
        this.props.dispatch(action)


    }
    render() {

        let { maSinhVien, tenSinhVien, soDienThoai, email } = this.props.sinhVienSua;
        return (

            <form className="container" onSubmit={this.handleSubmit}>
                <div className="card text-dark">
                    <div className="card-header">Thông tin sinh viên</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input value={maSinhVien} className="form-control" name="maSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input value={soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input value={tenSinhVien} className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.tenDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email </p>
                                    <input value={email} typeProps="email" className="form-control" name="email" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Thêm sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableSinhVien />

            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        sinhVienSua: state.quanLySinhVienReducer.sinhVienSua
    }
}
export default connect(mapStateToProps)(FromValidation)