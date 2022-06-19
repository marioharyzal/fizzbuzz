const submit = () => {
    const result = [];
    const number = document.getElementById("number").value;

    if (number == 0 || number < 0) {
        result.push("Invalid Number");
    } else if (number % 3 == 0 && number % 5 == 0) {
        result.push("FizzBuzz!!");
    } else if (number % 3 == 0) {
        result.push("Fizz!!");
    } else if (number % 5 == 0) {
        result.push("Buzz!!");
    } else {
        result.push(number);
    }

    console.log(number);
    const ul = document.getElementById("list");
    const li = document.createElement("li");

    result.map((data) => {
        li.appendChild(document.createTextNode(data));
        ul.appendChild(li);
    });

    document.getElementById("number").value = "";
};

document.getElementById("button").addEventListener("click", submit);
