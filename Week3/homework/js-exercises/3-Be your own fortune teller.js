'use strict'

function tellFortune(numChildren,partnerNames,locations,jobs){

    numChildren = [3,4,5,1,2];
    partnerNames = ['Mary', 'Ana','Fadi','Wael','Beno'];
    locations = ['Paris','Rome','Amsterdam','London','Mali'];
    jobs =['Accountant','Manager','Engineer','Artist','HR'];

        
    const childrenRand = Math.floor(Math.random()*numChildren.length); // the first method,( long process)
    const partnerRand = Math.floor(Math.random()* partnerNames.length);
    const locationRand = Math.floor(Math.random()* locations.length);
    const job_titleRand = Math.floor(Math.random()* jobs.length);

    
   
    
    return `"You will be a ${jobs[job_titleRand]} in ${locations[locationRand]}, and married to ${partnerNames[partnerRand]} with ${numChildren[childrenRand]} kids." `

    //second method
    // return`"You will be a ${jobs[Math.floor(Math.random()* jobs.length)]} in ${locations[Math.floor(Math.random()* locations.length)]},and married to ${partnerNames[Math.floor(Math.random()* partnerNames.length)]} with ${numChildren[Math.floor(Math.random()* numChildren.length)]} kids."`;
 
}

console.log(tellFortune());