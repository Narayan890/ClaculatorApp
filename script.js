// For getting the history inner text
function getHistory() {
    return document.getElementById("history-value").innerText;
}

// For printing history
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

// For getting output inner text
function getOutput() {
    return document.getElementById("output-value").innerText;
}

// For printing output
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormatedNumber(num);
    }
}

// To format the output value
function getFormatedNumber(num) {
    if (num == '-') {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

// Deformatting the output value
function reverseFormat(num) {
    return Number(num.replace(/,/g, ''));
}

// get the all opertor from class name
var operator = document.getElementsByClassName("operator");

// iterator through all operators
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        // for clear functionality
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        // for backspace functionality
        else if (this.id == "backspace") {
            var output = reverseFormat(getOutput()).toString();
            // if output has a value
            if (output) {
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
        }
        // for operators functionality
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substring(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }


    })
}

// get all numbers from class name
var number = document.getElementsByClassName("number");

// iterator through all numbers 
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = reverseFormat(getOutput());
        // check if output is a number
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
}