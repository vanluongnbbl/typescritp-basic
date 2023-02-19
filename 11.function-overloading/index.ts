// overloading

function addNew(a: number, b: number): number
function addNew(a: string, b: string): string
function addNew(a: any, b: any): any {
    return a + b
}
console.log('check new >>>> ', addNew(6, 9), addNew('Luong ', 'Phuong'))
 