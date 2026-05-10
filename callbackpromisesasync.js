// Callbacks, promises and async await s
function asyncFunction1(callback) {
    // Simulate an asynchronous operation
    setTimeout(function() {
        console.log("Async function 1 completed");
        callback();
    }, 1000);
}

function asyncFunction2(callback) {
    // Simulate another asynchronous operation
    setTimeout(function() {
        console.log("Async function 2 completed");
        callback();
    }, 1000);
}

function asyncFunction3(callback) {
    // Simulate yet another asynchronous operation
    setTimeout(function() {
        console.log("Async function 3 completed");
        callback();
    }, 1000);
}

// Nested callbacks
asyncFunction1(function() {
    asyncFunction2(function() {
        asyncFunction3(function() {
            console.log("All async functions completed");
        });
    });
});


function asyncFunction1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async function 1 completed");
            resolve();
        }, 1000);
    });
}

function asyncFunction2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async function 2 completed");
            resolve();
        }, 1000);
    });
}

function asyncFunction3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async function 3 completed");
            resolve();
        }, 1000);
    });
}

// Using promises
asyncFunction1()
    .then(asyncFunction2)
    .then(asyncFunction3)
    .then(function() {
        console.log("All async functions completed");
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });



async function asyncFunction1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Async function 1 completed");
            resolve();
        }, 1000);
    });
}

async function asyncFunction2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Async function 2 completed");
            resolve();
        }, 1000);
    });
}

async function asyncFunction3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Async function 3 completed");
            resolve();
        }, 1000);
    });
}

// Using async/await
async function executeAsyncFunctions() {
    try {
        await asyncFunction1();
        await asyncFunction2();
        await asyncFunction3();
        console.log("All async functions completed");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

executeAsyncFunctions();


/**
 * Callback Handler
 */
const Division = (numerator, denominator, callback) => {
    if (denominator === 0) {
      callback(new Error('Divide by zero error!'));
    } else {
      callback(null, numerator / denominator);
    }
};

// Function Call
Division(5, 0, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`Result: ${result}`);
});