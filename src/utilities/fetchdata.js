async function fetchdata(apipath) {
    var res = await fetch(apipath);
    var result = await res.json();
      console.log("result",result)
    return result;
  
}

export default fetchdata;