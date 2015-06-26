console.log(checkRandom(100, 1, 4));
/**
 * 乱数が偏らないか自分で確認する為の関数
 * return hash
 */
function checkRandom(repeatCnt, lo, hi){
  var stok = {}, cnt = 0;
  return (function rept(stok, cnt){
    if(cnt >= repeatCnt){
      return stok;
    }
    var rdm = parseInt(Math.floor(Math.random() * hi), 10) + lo;
    stok[rdm] = stok[rdm] ? stok[rdm] + 1 : 1;
    cnt++;
    return rept(stok, cnt);
  })(stok, cnt);
}

