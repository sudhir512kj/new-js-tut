// ineffiecient memory usage
const findByIndex1 = (index) => {
    console.time('array creation');
    const numbers = Array.from(Array(1000000).keys());
    console.timeEnd('array creation');

    const result = numbers[index];

    console.log(`item by index ${index}=${result}`);

    return result;
};

findByIndex1(110351);
findByIndex1(911234);
findByIndex1(520109);
findByIndex1(398);

// efficient memory usage
const findByIndex2 = () => {
    console.time('array creation');
    const numbers = Array.from(Array(1000000).keys());
    console.timeEnd('array creation');
  
    return (index) => {
      const result = numbers[index];
  
      console.log(`item by index ${index}=${result}`);
  
      return result;
    };
  };
  
  const find = findByIndex2();
  
  find(110351);
  find(911234);
  find(520109);
  find(398);