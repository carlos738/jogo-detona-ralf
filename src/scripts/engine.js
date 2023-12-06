const state={
    view:{
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector(#time-timeLeft),
        score: document.querySelector("#score"),

    },
    values:{
        gameVelocity: 1000,
        htiPosition: 0,    
        result: 0,
        currentTime 60,
    },
    actions:{
        timerId: setInterval(randonSquare,1000),
    },
};
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("GAME OVER O SEU RESULTADO FOI: " + state.values.result);
    }

    
}
function playSound(audioName){
    let audio  = new Audio((`./src/audios/${audioName}.m4a`));
    audio.volume = 0.2;
    audio.play();

}
function randonSquare() {
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });
    let randonNumber = Math.floor(Math.random()* 9 );
    let randonSquare = state.view.squares[randonNumber];
    randonSquare.classList.add("enemy");
    state.values.htiPosition = randonSquare.id;
    
}
function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",() =>{
            if (square.id === state.values.htiPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.htiPosition = null;
                playSound("hit");
            }
        });
    });
}
function initialize(){
    addListenerHitBox();
}
initialize();