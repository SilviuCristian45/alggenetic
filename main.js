// START
// Generate the initial population
// Compute fitness
// REPEAT
//     Selection
//     Crossover
//     Mutation
//     Compute fitness
// UNTIL population has converged
// STOP
const Genom = require('./genom.js'); //importam clasa de genom 

function generatePopulation() {
    let Population = [];
    for (let i = 0; i < 100; i++) {
        let G = new Genom();
        Population.push(G);
        //console.log(Population[i].chromozoms);
    }
    return Population;
}

function orderByFitness(data) {
    return data.sort( (a,b) => {
        return a.fitness() - b.fitness();
    });
}

function randomBetween2Values(a, b) {
    return Math.floor(Math.random() * (a - b + 2));
}

function crossover(individ1, individ2) {
    for (let gene = 0; gene < 4; gene++) {
        
        
    }
}

function convergePopulation() {
   	
}

function main() {
    let population = generatePopulation();
    //population = orderByFitness(population);
    for (let gen = 0; gen < 10; gen++) {//primele 10 generatii
        //luam fiecare individ (dintre primii 32). i imperechem 
        for (let i = 0; i < 31; i++) {
            for (let j = i+1; j < 32; j++) {
                crossover(population[i], population[j]);
            }
        }
        //i sortam dupa fitness
        population = orderByFitness(population);
    }
    //afisam sa vedem la ce fitness a ajuns generatia 
}

//main();
console.log(randomBetween2Values(1,1));

// console.log(G.chromozoms);
// console.log(G.fitness());