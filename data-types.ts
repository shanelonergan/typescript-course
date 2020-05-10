// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// 	name: 'Shane',
// 	age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
enum Role { ADMIN, READ_ONLY, AUTHOR }
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR } can do this. They increment after 5
// enum Role { ADMIN = 100, READ_ONLY = 'READ_ONLY', AUTHOR='3' } can also set to whatever you want


const person = {
	name: 'Shane',
	age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()) // TS knows all values will be strings
}
