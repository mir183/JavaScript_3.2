const friends = ['Anika', 'Badar', 'Arif', 'Tahsin', 'Ayesha', 'Mehjabin', 'Asif'];
const namesStartingWithA = friends.filter(name => name.startsWith('A'));
console.log('Names starting with A: ' + JSON.stringify(namesStartingWithA));