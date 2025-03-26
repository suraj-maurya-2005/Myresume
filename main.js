const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");
const b5 = document.getElementById("box5");
const btn = document.getElementById("btn");

function animation() {
    b1.style.top = "10px";
    b1.style.right = "1px";
    b1.style.transition = '1s ease-out';

    setTimeout(() => {
        b2.style.top = "5cm";
        b2.style.left = "1px";
        b2.style.transition = '1s ease-out';
    }, 2000);

    setTimeout(() => {
        b3.style.top = "10cm";
        b3.style.right = "1px";
        b3.style.transition = '1s ease-out';
    }, 4000);

    setTimeout(() => {
        b4.style.top = "14cm";
        b4.style.left = "1px";
        b4.style.transition = '1s ease-out';
    }, 6000);

    setTimeout(() => {
        b5.style.top = "20%";
        b5.style.right = "10%";
        b5.style.transition = '1s ease-out';
    }, 30000);



    setTimeout(() => {
        b1.style.top = '-84%';
    }, 16000);

    setTimeout(() => {
        b2.style.top = '-84%';
    }, 20000);

    setTimeout(() => {
        b3.style.top = '-84%';
    }, 24000);

    setTimeout(() => {
        b4.style.top = '-84%';
    }, 28000);

    setTimeout(() => {
        b5.style.top = '-84%';
    }, 36000);
}

btn.addEventListener('click', animation);