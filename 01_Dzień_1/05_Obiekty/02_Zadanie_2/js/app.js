const timeMachine = {
    shape: 'square',
    model: 'r2d2',
  //  run: function(){}
    run(date, place){
        console.log(`Data: ${date}, place: ${place}`);
    }
}

console.log(timeMachine.shape, timeMachine.model);
timeMachine.run('jutro', 'kaczogrod');