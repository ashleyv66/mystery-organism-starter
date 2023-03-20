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
//Factory function to generate new organisms
const pAequorFactory = (orgNo, dna) => {
  return {
    specimenNum: orgNo,
    dna: dna,
    //methods
    //mutates the DNA of the organism by randomly changing a base for another
    mutate() {
      let newBase = returnRandBase()
      let rndIndex = Math.floor(Math.random() * 15);
      if (newBase !== this.dna[rndIndex])
      {console.log(rndIndex,newBase)
      this.dna[rndIndex] = newBase;
      console.log(this.dna[rndIndex]);}
    },
    //Performs a comparison of two organisms to see how much DNA they have in common. Logs the % in common to console.
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
    //Evaluates the DNA strand of the organism to see if it is likely to survive based on the % of C and G bases in the strand. Evaluates to a boolean.
    willLikelySurvive() {
      let sDna = this.dna;
      let counter2 = 0;
      for (let s = 0; s < sDna.length; s++) {
        if (sDna[s] === 'C' || sDna[s] === 'G') {
          counter2++;
        }
      }
      //console.log(counter2);// test log
      //console.log(sDna.length);// test log
      let likelyhood = 100 * counter2/sDna.length;
      //console.log(likelyhood); //test log
      if (likelyhood >= 60) {
        return true;
      }
      return false;
    }
    
  }
}
//Generates 30 instances of the organism which are likely to survive
const instances = []
for (let inst = 0; instances.length < 30; inst++) {
  let strand = pAequorFactory(inst,mockUpStrand());
  if (strand.willLikelySurvive()) {
    console.log(strand.specimenNum)
    console.log(strand.dna);
    console.log(strand.willLikelySurvive())
    instances.push(strand)
  }
}
console.log(instances)
//console.log(instances.length)//test log
//console.log(instances[1].dna)//test log
/* Various test logs
//const ex1 = pAequorFactory(1,mockUpStrand());
//const ex2 = pAequorFactory(2,mockUpStrand());
//console.log(ex1.specimenNum);
//console.log(ex1.dna);
//ex1.mutate();
//ex2.compareDNA(ex1);
//console.log(ex2.willLikelySurvive())
//console.log(ex2.dna);
*/ 







