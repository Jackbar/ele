export default {
  paramToString(e){

  },
  resolveFetch(e) {
    var t = e.json();
    return e.status >= 200 && e.status < 300 ? t : t.then(Promise.reject.bind(Promise))
  }
}
