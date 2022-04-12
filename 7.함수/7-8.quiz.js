let multiply = (a) => console.log(2*a);
let log = (b) => console.log(b);

function iterate(max,action) {
    for(let i = 0; i <= max ; i++) {
        action(i);
    };
}

iterate(5, log);
iterate(5, multiply);