export const findLocalItems = query => {
  let i, results = [];
  for (i in localStorage) {
    if (localStorage.hasOwnProperty(i)) {
      if (i.match(query) || (!query && typeof i === 'string')) {
        const value = JSON.parse(localStorage.getItem(i));
        const date = i.substring(6);

        results.push({
          timestamp: new Date(date).getTime(),
          date: date,
          list: value,
        });
      }
    }
  }

  return results;
};

export const localStorageSpace = () => {
  var allStrings = '';
  for (var key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      allStrings += window.localStorage[key];
    }
  }
  return allStrings ? 3 + ((allStrings.length * 16) / (8 * 1024)) + ' KB' : 'Empty (0 KB)';
};

export const sortDate = arr => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = arr[i].timestamp;
    let minIndex = i;

    for (let j = i; j < length; j++) {
      if (arr[j].timestamp < min) {
        min = arr[j].timestamp;
        minIndex = j;
      }
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
};
