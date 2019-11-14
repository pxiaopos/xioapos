export const findLocalItems = query => {
    let i, results = [];
    for (i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
            if (i.match(query) || (!query && typeof i === 'string')) {
                let value = JSON.parse(localStorage.getItem(i));

                results.push({
                    date: i,
                    list: value
                })
                // Object.assign(results, {[i]: value})
            }
        }
    }

    return results;
}

export const localStorageSpace = () => {
    var allStrings = '';
    for(var key in window.localStorage){
        if(window.localStorage.hasOwnProperty(key)){
            allStrings += window.localStorage[key];
        }
    }
    return allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)';
};

