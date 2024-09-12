function queueTime(customers, n) {

    if (customers.length === 0) {
        return 0;
    }
    if (n === 1) {
        return customers.reduce((a, b) => a + b, 0);
    }
    let tills = new Array(n).fill(0);

    customers.forEach((time) => {
        console.log("Math.min(...tills) is : " + Math.min(...tills));
        let nextTill = tills.indexOf(Math.min(...tills));
        tills[nextTill] += time;
    });
    return Math.max(...tills);
}
const result = queueTime([2, 3, 10, 2], 2);
console.log("result is " + result);

