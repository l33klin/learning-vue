interface UserItem {
    name: string
    age: number
    enjoyFoods: string[]
    // 这个属性引用了本身的类型
    friendList: UserItem[]
}
// 这里继承了 UserItem 的所有属性类型，并追加了一个权限等级属性
interface Admin extends UserItem {
    permissionLevel: number
}

const admin: Admin = {
    name: 'Petter',
    age: 18,
    enjoyFoods: ['rice', 'noodle', 'pizza'],
    friendList: [
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
    permissionLevel: 1,
}

console.log(admin)