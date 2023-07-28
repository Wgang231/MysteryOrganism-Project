// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// create a factory function that has two parameters
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let currentBase = this.dna[0];
      let randomBase = returnRandBase();
      while (randomBase === currentBase) {
        randomBase = returnRandBase();
      }
      this.dna[0] = randomBase;
      return this.dna;
    },
    compareDNA(anotherpAequor) {
      let identicalCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === anotherpAequor.dna[i]) {
          identicalCount += 1;
        }
      }
      const percentageIdentical = (identicalCount / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${anotherpAequor.specimenNum} have ${percentageIdentical}% DNA sequence similarity.`);
    },
     willLikelySurvive() {
      let dnaBasesCounter = 0
      this.dna.foreach(dnaBase => {
       if (this.dnaBase === "C" || this.dnaBase === "G") {
         dnaBasesCounter += 1;
       }
      });

      let survivalPercentage = ((dnaBasesCounter/this.dna.length) * 100).toFixed(3);
      if (survivalPercentage >= 60) {
        console.log(`Greater chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
      } else {
        console.log(`Lesser chance of survival. Percentage of C and G bases is ${survivalPercentage}%`);
      }

     }

  }
}

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());

specimen1.compareDNA(specimen2);
 console.log(specimen1.mutate());

 // Store instances 
  const storeIns = [];
  for(let i = 0; i <= 30; i++) {
    storeIns.push(pAequorFactory(i, mockUpStrand()))
  };







