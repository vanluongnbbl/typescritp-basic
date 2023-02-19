/*
    void không cần trả ra dữ liệu (thực chất vẫn trả ra undefine khi gán với 1 biến nào đó),
    không cần keword return (áp dụng chủ yếu cho function)
*/


const sum = (a: number, b: number): number => {
    return a + b
}

const handleLogs = (message: string): void => {
    console.log('message =>>> ', message)
}