const init = () => {
    let initialized = false;

    return () => {
        if (initialized) {
            return console.warn('⚠️ init function already called, not initializing');
        }

        initialized = true;
        return console.info('initialized 🚀');
    };
};

const initialize = init();

initialize();
initialize();
initialize();