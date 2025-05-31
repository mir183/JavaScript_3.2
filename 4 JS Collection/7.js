const contacts = {'Adil': '1234', 'Pakhi': '5678', 'Farhan': '9101'};
const keysWithLength4 = Object.keys(contacts).filter(key => key.length === 4);
console.log('Keys with length 4: ' + JSON.stringify(keysWithLength4));