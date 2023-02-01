const count = () => {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => console.log(count),
    };
};

const counter = count();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

counter.getCount();