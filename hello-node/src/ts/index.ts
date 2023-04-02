interface UserItem {
    name: string
    age: number
    enjoyFoods: string[]
    // 这个属性引用了本身的类型
    friendList: UserItem[]
}

const petter: UserItem = {
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
}

console.log(petter)