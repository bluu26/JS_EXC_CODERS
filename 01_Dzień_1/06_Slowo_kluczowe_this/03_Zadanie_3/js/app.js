const stairs = {
    step: 0,
    up() {
        this.step++;
    },
    down(){
        this.step = Math.max(this.step - 1, 0);
    },
    printStep() {
        console.log(this.step);
    }

}

stairs.up();

stairs.up();

stairs.up();

stairs.down();
stairs.down();
stairs.down();
stairs.down();
stairs.down();

stairs.printStep() // 2