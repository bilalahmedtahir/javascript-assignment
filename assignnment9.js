function split(obj) {
    const a = Object.keys(obj);
    const b = Object.values(obj);
    return {a, b};        
}

var sampleObject = { name: 'Bashir Butt', title: 'Learn Programming', id: 6721 };
const result = split(sampleObject);
console.log(result.a);
console.log(result.b); 
