function randint(min, max) {
    return Math.floor(Math.random() * (max-min))+min;
}
let canvas = document.getElementById("canvas"), elemLeft = canvas.offsetLeft + canvas.clientLeft, elemTop = canvas.offsetTop + canvas.clientTop, element;
function create_rand_object(ctx, xs, ys) {
    x = randint(0, 800-xs);
    y = randint(0, 600-ys);
    let rc = randint(0, 255);
    let gc = randint(0, 255);
    let bc = randint(0, 255);
    ctx.fillStyle = 'rgb(' + rc + ', ' + gc + ', ' + bc + ')';
    ctx.fillRect(x, y, xs, ys);
    element = {
        width: xs,
        height: ys,
        top: y,
        left: x
    };
}
let score = 0;
let scoreElem = document.getElementById("score");
function create_object(ctx, x, y, xs, ys, color) {
    ctx.fillStyle = 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')';
    ctx.fillRect(x, y, xs, ys);
}
let ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 800, 600);
create_rand_object(ctx, 25, 25);
canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft, y = event.pageY - elemTop;
    if (y > element.top && y < element.top + element.height 
        && x > element.left && x < element.left + element.width) {
        create_object(ctx, 0, 0, 800, 600, {red: 0, green: 0, blue: 0});
        create_rand_object(ctx, element.width, element.height);
        score++;
        if (score === 69) {
            scoreElem.value = "Score: ( ͡° ͜ʖ ͡°)";
            scoreElem.innerHTML = "Score: ( ͡° ͜ʖ ͡°)";
        } else {
            scoreElem.value = "Score: " + score;
            scoreElem.innerHTML = "Score: " + score;
        }
    }

}, false);