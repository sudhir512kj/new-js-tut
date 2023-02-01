const addNumbers = () => {
    var numbers = [];

    for (var i = 1; i <= 3; i++) {
        ((index) => {
            numbers.push(() => {
                return index;
            });
        })(i);
    }

    return numbers;
};

const getNumbers = addNumbers();

console.log(getNumbers[0]());
console.log(getNumbers[1]());
console.log(getNumbers[2]());