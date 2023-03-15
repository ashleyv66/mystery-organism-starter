// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// My code starts here
const pAequorFactory = (orgNo, dna) => {
  return {
    specimenNum: orgNo,
    dna: dna,
    mutate() {
      let newBase = returnRandBase()
      let rndIndex = Math.floor(Math.random() * 15);
      if (newBase !== this.dna[rndIndex])
      {console.log(rndIndex,newBase)
      this.dna[rndIndex] = newBase;
      console.log(this.dna[rndIndex]);}
    },
    compareDNA(newStrain) {
      let curDNA = this.dna
      let newDna = newStrain.dna
      let counter = 0
      for (let i =0; i <= this.dna.length; i++) {
      let curDNA = this.dna
       if (newDna[i] === curDNA[i]) {
          counter ++;
       }
      }
      console.log(curDNA);
      console.log(newDna);
      let percent = parseFloat((counter/curDNA.length)*100).toFixed(1);
    console.log(`Specimen ${ex1.specimenNum} and specimen ${ex2.specimenNum} have ${percent}% DNA in common.`)
    },
    willLikelySurvive() {
      let sDna = this.dna;
      let counter2 = 0;
      for (let s = 0; s < sDna.length; s++) {
        if (sDna[s] === 'C' || sDna[s] === 'G') {
          counter2++;
        }
      }
      //console.log(counter2);
      //console.log(sDna.length);
      let likelyhood = 100 * counter2/sDna.length;
      //console.log(likelyhood);
      if (likelyhood >= 60) {
        return true;
      }
      return false;
    }
    
  }
}
const ex1 = pAequorFactory(1,mockUpStrand());
const ex2 = pAequorFactory(2,mockUpStrand());
//console.log(ex1.specimenNum);
//console.log(ex1.dna);
//ex1.mutate();
ex2.compareDNA(ex1);
console.log(ex2.willLikelySurvive())
console.log(ex2.dna);








