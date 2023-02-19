// enum dùng để liệt kê, đồng bộ hóa cú pháp

enum API_STATUS {
    PENDING,
    FULFILLED = 2,
    REJECTED = 3
} 

let a1 = API_STATUS.FULFILLED
let a2 = API_STATUS.REJECTED