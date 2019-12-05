export function today() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
  
    return yyyy + '/' + mm + '/' + dd
  }