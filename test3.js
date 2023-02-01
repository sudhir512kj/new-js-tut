const createCallbacks1 = () => {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
};

const createCallbacks2 = () => {
    for (var i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 2000);
    }
};


const createCallbacks3 = () => {
    for (var i = 0; i < 3; i++) {
        setTimeout(function (i_local) {
            return function () { console.info(i_local); }
        }(i), 1000 + i);
    }
}

// createCallbacks1();
createCallbacks2();
// createCallbacks3();