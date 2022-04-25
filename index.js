var space = document.getElementById('display');

var buttons = Array.from(document.getElementsByClassName('buttons'));
let stack = [];
const push = (item) => stack.push(item);
const pop = () => stack.pop();

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'AC':
                space.innerText = '';
                break;
            case 'C':
                space.innerText = space.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    space.innerText = eval(space.innerText);
                    stack.push(space.innerText);
                } catch {
                    space.innerText = 'ERROR';
                }
                break;
            case 'undo':
                space.innerText='';
                space.innerText+= stack.pop();
                break;
            default:
                space.innerText += e.target.innerText;
        }
    });
});