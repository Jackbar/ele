import utils from './utils';

let paramToString = utils.paramToString;
let resolveFetch = utils.resolveFetch;
let http = "https://mainsite-restapi.ele.me";

export default {
  shoplist(e){
    return fetch(http + "/shopping/restaurants?" + paramToString(e)).then(resolveFetch)
    //  return fetch(http + "/shopping/restaurants?latitude=22.572909&longitude=113.86192&offset="+offset+"&limit=20&extras[]=activities&terminal=h5").then(resolveFetch)
  }
}
