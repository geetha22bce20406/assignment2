function alphabeticalOrder(str) {
    
    let charArray = str.split('');
    
    
    let sortedArray = charArray.sort();
    
   
    let sortedStr = sortedArray.join('');
    
    return sortedStr;
}


let exampleString = 'adhbfaeghvrf';
console.log(alphabeticalOrder(exampleString));  
