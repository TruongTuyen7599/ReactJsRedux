
const stateGioHang = {
    gioHang: [
        // { maSP: 1, tenSP: 'Iphone', soLuong: 1, giaBan: 1000 }
    ]
}

export const gioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];

            // kiểm tra sản phầm có trong giỏ hàng hay không

            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang)
            }

            // cập nhật lại state 
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
        case 'TANG_GIAM_SO_LUONG': {
            const gioHangCapNhat = [...state.gioHang];
            // tim sp để tăng sl hoặc giảm sl
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSP);

            if (spGH) {
                spGH.soLuong += action.soLuong;
                if (spGH.soLuong < 1) {
                    alert('Số lượng tối thiểu là 1');
                    spGH.soLuong -= action.soLuong;
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
    }
    return state;
}

