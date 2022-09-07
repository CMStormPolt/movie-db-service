export function cleanFilterInput(input = {}){
    const conditions = Object.keys(input)
    .reduce((result, key) => {
        if (input[key]) {
        result[key] = input[key];
        }
        return result;
    }, {}); 
    return conditions
}