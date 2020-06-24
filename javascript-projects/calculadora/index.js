let output = document.getElementById('resultado');

function calculate (type, value){
    if (type === 'number') {
        output.value += value;
    } else if (type === 'symbol') {
        switch (value) {
            case 'C':
                output.value = '';
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                output.value += value;
                break;
            case '=':
                let result = eval(output.value);
                output.value = result;
        }
    }
}
