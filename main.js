console.log('This is Working')



     function calculateArray(numbers) {
    if (numbers.lenght <=2 || numbers.lenght === 0) {
        return false
    }
            
    
    const sumFirstSecond = numbers[0] + numbers[1];
    let productRest = 1;
    for (let i = 2; i < numbers.length; i++) {
        productRest *= numbers[i];
    }
    
    return [sumFirstSecond, productRest];
}
    const numbers = [1, 2, 3, 4, 5, 6, 7, 9];
    const result = calculateArray(numbers);
    console.log(result); 







    const user = {
        name: "bank",
        address: "city",

    }
    const {name, address,} =user
    console.log(address)

