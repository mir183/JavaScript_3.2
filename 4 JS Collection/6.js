const person = {
    'name': 'Badar',
    'address': '123 Street',
    'age': 30,
    'country': 'Bangladesh'
};
person.country = 'Bangladesh';
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});