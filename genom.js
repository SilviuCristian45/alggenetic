class genom{

    constructor() {
        this.chromozoms = [];
        //generam un sir de 8 valori cu 1 sau 0
        for (let i = 0; i < 8; i++) {
            this.chromozoms.push(Math.floor(Math.random() * 2)); 
        }
    }

    fitness(){
        let sum = 0;
        this.chromozoms.forEach(element => {
            sum += element;
        });
        return sum;
    }

    display(){
        console.log(this.chromozoms + " fitness : " + this.fitness());
    }
}

module.exports = genom;