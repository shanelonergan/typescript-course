var person = {
    name: 'Shane',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // TS knows all values will be strings
}
