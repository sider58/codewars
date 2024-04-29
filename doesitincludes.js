function doesItIncludes(array1, array2) {
        
    let r = [];

    array2.forEach(string => {
        array1.forEach(substring => {

            if(string.includes(substring) && !r.includes(substring)) {

                r.push(substring);
           }  
        });    
    });

    return r.sort()
}

doesItIncludes(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);