const stateDefaul = {
    mangSinhVien: [{
        maSinhVien: '1',
        tenSinhVien: 'Nguyễn Văn A',
        soDienThoai: '0978888999',
        email: '097888899@gmail.com'
    },
    {
        maSinhVien: '2',
        tenSinhVien: 'Nguyễn Văn B',
        soDienThoai: '0973443343',
        email: '09312515512@gmail.com'
    }
    ],
    sinhVienSua: {
        maSinhVien: '3',
        tenSinhVien: 'Nguyễn Văn C',
        soDienThoai: '0978888999',
        email: 'xgjddj@gmail.com'
    }
}

export const quanLySinhVienReducer = (state = stateDefaul, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state };
        }
        case 'XOA_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien.filter(sv => sv.maSinhVien !== action.maSinhVien)];
            return { ...state };
        }
        case 'SUA_SINH_VIEN': {
            state.sinhVienSua = action.sinhVienSua;
            return { ...state };
        }
        default: return { ...state }
    }
}