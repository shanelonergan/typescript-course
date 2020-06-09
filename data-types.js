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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR } can do this. They increment after 5
// enum Role { ADMIN = 100, READ_ONLY = 'READ_ONLY', AUTHOR='3' } can also set to whatever you want
var person = {
    name: 'Shane',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // TS knows all values will be strings
}
