// 定义用户对象的类型
interface UserItem {
    name: string
    age?: number
}

// 在声明变量的时候将其关联到类型上
const petter: UserItem = {
    name: 'Petter',
    // age: 20,
}

console.log(petter)