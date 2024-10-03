var sampleArray = [ { name: 'Bashir Butt', title: 'Learn Programming', id: 6721}, { name: 'Sebastian Rao', title: 'Next Door', id: 1423}, { name: 'Julian Shane', title: 'Deep Waters', id: 5424}, { name: 'Sushi King', title: 'Hunger Solutions', id: 3291} ];

sampleArray.sort((a,b) => a.id - b.id);

console.log(sampleArray);