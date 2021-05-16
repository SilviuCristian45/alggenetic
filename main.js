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
    for (let i = 0; i < 5; i++) {
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

function crossover(individ1, individ2) {//mom - dad 
    let offspring1 = new Genom(); offspring1.chromozoms = [];
    let offspring2 = new Genom(); offspring2.chromozoms = [];

    for (let gene = 0; gene < 4; gene++) {
        offspring1.chromozoms.push(individ2.chromozoms[gene]);
        offspring2.chromozoms.push(individ1.chromozoms[gene]);
    }

    
    for (let gene = 4; gene < 8; gene++) {
        offspring1.chromozoms.push(individ1.chromozoms[gene]);
        offspring2.chromozoms.push(individ2.chromozoms[gene]);
    }

    return {
        child1 : offspring1,
        child2 : offspring2
    };
}

function convergePopulation() {
   	
}

function mutation(individ1) {
    let prob = Math.random();
    let mutationProbability = 0.9;

    console.log("probability : " + prob);

    if(prob < mutationProbability){
        //make mutation
        result = [];
        individ1.chromozoms.forEach(element => {
            result.push( (element === 1 ? 0 : 1) );
        });
        individ1.chromozoms = result;
    }
}

function main() {
    let population = generatePopulation();
    console.log(population[0]);
    console.log(population[1]);
    console.log(crossover(population[0],population[1]))
    //console.log(population[0]);
    //population = orderByFitness(population);
    // for (let gen = 0; gen < 10; gen++) {//primele 10 generatii
    //     //luam fiecare individ (dintre primii 32). i imperechem 
    //     for (let i = 0; i < 31; i++) {
    //         for (let j = i+1; j < 32; j++) {
    //             let childs = crossover(population[i], population[j]);
    //             population[i] = childs.child1;
    //             population[j] = childs.child2;
    //             mutation(population[i]);
    //             mutation(population[j]);
    //         }
    //     }
    //     //i sortam dupa fitness
    //     population = orderByFitness(population);
    // }
    // //afisam sa vedem la ce fitness a ajuns generatia 
}

main();

// console.log(G.chromozoms);
// console.log(G.fitness());