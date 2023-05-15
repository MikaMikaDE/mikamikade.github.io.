//----------------------------------------------------------//
//Tool for calculating OTKs with machine deck and solidarity//
//----------------------------------------------------------//

const decklist = [
    {Name: "Green"  , ATK: 1400, solid: null},
    {Name: "Red"    , ATK: 1300, solid: null},
    {Name: "Yellow" , ATK: 1200, solid: null},
    {Name: "Gearf"  , ATK: 1800, solid: null},
    {Name: "Fort"   , ATK: 2500, solid: null},
    {Name: "Scrap"  , ATK:  900, solid: null},

]

//---------------------------------------------------------//


//make it so deck has 3 copies of each
let stats = [];
for (let i = 0; i < decklist.length; i++) {
    for (let j = 0; j < 3; j++) {
        stats.push({
            Name:  decklist[i].Name,
            ATK:   decklist[i].ATK,
            solid: decklist[i].solid
        })
    }
}


//get de atk, used in solidarity function
function findATK(str){
    return stats.find(stat => stat.Name === str).ATK
}


//add solidarity boost
for (i=0; i<stats.length; i++){
    stats[i].solid = 800 + findATK(stats[i].Name)   
}



//---------------------------------------------------------//

//algo

const maxCardCombo = 3;
const combinations = (20000);

const solutions = []
for (j=0; j<combinations; j++){
    var LP = 8000;
    var counter = j;

    while (LP > 0 && counter < stats.length){
        
        LP = LP - stats[counter].solid

        solutions.push(
            {Combo:  j, 
             Name:   stats[counter].Name, 
             Damage: (8000-LP)
            }
        )

        counter += 1
    }

    // if (counter > maxCardCombo){
    //     solutions.splice(-maxCardCombo)
    // }
    console.log(j)
}

console.table(solutions)

//---------------------------------------------------------//

