/*
    Interface định nghãi cách chúng ta viết code bằng cách cung cấp
    các công cụ để có thể kiểm soát chặt chẽ việc khai báo Type



*/ 

// ví dụ
function getFullName(person: {
    firstName: string,
    lastName: string,
}) {
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: 'Van',
    lastName: 'Luong'
}

console.log(getFullName(person))

/*
    Với cách viết ở trên, code sẽ dài và khó đọc nếu truyền nhiều
    tham số (person)
*/ 

/*
    Nếu dùng Interface sẽ ngắn gọn hơn
*/ 

interface IPerson {
    firstName: string
    lastName: string
}

function getFullName2(person: IPerson) {
    return `${person.firstName} ${person.lastName}`
}

/*
    Convention
    Luôn bắt đầu vằng chữ "I"(interface), Viết hòa các cữ cái đầu theo kiểu Camelcase
    Ví dụ: IUseProfile
*/ 


/*
    interface và type gần như là giống nhau
    interface khác type ở chỗ là có thể cộng gộp lại với nhau
*/ 
// Ví dụ

interface IPoint { x: number }
interface IPoint { y: number }

const point: IPoint = { x: 1, y: 2}
