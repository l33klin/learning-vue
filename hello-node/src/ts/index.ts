interface UserItem {
    name: string
    age: number
    enjoyFoods: string[]
    // 这个属性引用了本身的类型
    friendList: UserItem[]
}

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
    permissionLevel: number
}

// 现在的 admin 就非常精简了
const admin: Admin = {
    name: 'Petter',
    age: 18,
    permissionLevel: 1,
}

console.log(admin)

// 对单人或者多人打招呼
function greet(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
}

// 虽然已知此时应该是 string[]
// 但 TypeScript 还是会认为这是 string | string[]
const greetings = greet(['Petter', 'Tom', 'Jimmy']) as string[]

// 会导致无法使用 join 方法
const greetingSentence = greetings.join(' ')
console.log(greetingSentence)
