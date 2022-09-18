function camelize(str){
    return str
    .replace(/(?:^\W|[A-Z]|\b\w)/g, (letter, index) => 
    index === 0
    ? letter.toLowerCase()
    : letter.toUpperCase()
    )
    .replace(/\s+/g, '');
}


export {camelize}
// Test Cases below this line   