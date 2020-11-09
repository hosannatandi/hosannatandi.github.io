let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', theClick);
    function theClick(){
    console.log("cick!!!");
    theBody.style.fontFamily = 'Marola';
    /*theBody.style.color = 'green';*/
    document.querySelector('h2').textContent = "you pressed the button!";
   }
/*theButton.addEventListener('click', theSecondclick);
    function theSecondclick(){
    console.log("cick!!!");
    theBody.style.fontFamily = 'badbad';
    theBody.style.color = 'green';
    document.querySelector('h2').textContent = "you pressed the button!";
    }*/
    document.getElementById('badbad').addEventListener('click', fontChangerBadSignal);
    function fontChangerBadSignal() {
        console.log("cick!!!");
        theBody.style.fontFamily = 'badbad';
        /*theBody.style.color = 'green';*/
        document.querySelector('h2').textContent = "you pressed the button!";
   }
   document.getElementById('Times New Roman').addEventListener('click', fontChangerTNR);
   function fontChangerTNR() {
        console.log("cick!!!");
        theBody.style.fontFamily = 'Times New Roman';
        /*theBody.style.color = 'green';*/
        document.querySelector('h2').textContent = "you pressed the button!";
   }