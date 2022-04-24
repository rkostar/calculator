var space = document.getElementById('display');

var buttons = Array.from(document.getElementsByClassName('buttons'));
console.log(buttons);

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
                } catch {
                    space.innerText = 'ERROR';
                }
                break;
            default:
                space.innerText += e.target.innerText;
        }
    });
});