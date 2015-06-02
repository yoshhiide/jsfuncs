var mf = (function(){

    /**
    * 整数のレンジlistを作成する(引数は少数点以下を考慮)
    * return: array
    * usage:
-----------------
mf.crange(15, 200).reduce(function(m, a){
  return m + a;
});
--------------------------------
    */
    function cRange(a, b){
        var arr = [], sa, sb;

        if((a <= b) && isFinite(a) && isFinite(b)){
            sa = parseInt(Math.ceil(a), 10);   //切り上げ
            sb = parseInt(Math.floor(b), 10);  //切り捨て
            for(var i = sa; i <= sb; i++ ){
                arr.push(i);
            }
        }
        return arr;
    }

    /**
    * 配列の中のオブジェクトを検索する
    * ({property: value} 一致を返す)
    * params: array
    * params: object
    * return: array
    * usage:
-----------------
var arr = [
    {id:1, name:200, age:300}, {id:1, name:100, age:300}, {id:1, name:300, age:300},
    {id:2, name:100, age:200}, {id:2, name:200, age:500}, {id:2, name:200, age:600},
    {id:2, name:100, age:700}, {id:3, name:100, age:800}, {id:3, name:200, age:900}
];
searchObj(arr, {id:2, name:200});
--------------------------------
    * future.. arr先読みのカリー化対応したい
    */
    function searchObj(arr, obj){
        if(!Array.isArray(arr)){
            return false;
        }
        if(obj.toString() !== '[object Object]'){
            return false;
        }
        if(!existhy(arr, obj)){
            return false;
        }
        //search
        return arr.filter(function(item, i){
            return Object.keys(obj).every(function(key){
                return (item[key] === obj[key]);
            });
        });

        function existhy(arr, obj){
            return Object.keys(obj).every(function(key){
                return arr[0] && arr[0][key];
            });
        }
    }

     /**
     * リスト内の出現した値をカウントする
     * (arr[1] = 2)
     * params: array
     * return: object
     * usage:
-----------------
var arr = [1,2,2,1,3,2];
listCount(arr);
-----------------
     */
    function listCount(arr){
        return arr.reduce(function(a, b){
            a[b] = a[b] ? a[b] + 1 : 1;
            return a;
        }, {});
    }
    /* ES6 ver.
    var listCounter = (arr) => arr.reduce((a, b) => { a[b] = a[b] ? a[b] + 1 : 1; return a; }, {});
    */

    function listmaxCounter(arr)
        return arr.reduce(function(a, b){
            a.obj[b] = a.obj[b] ? a.obj[b] + 1 : 1;
            a.cnt = a.obj[b] > a.cnt ? a.obj[b] : a.cnt;
        return a;
    }, {cnt:0, obj:{}});

    /**
     * リスト内のネスト(MAX2段階)した配列を平坦化する
     * params: array
     * return: array
     * usage:
-----------------
var arr = [[2,3], [1,5], [1,2], [3,5], [4,5]];
flatter(arr);
-----------------
    */
    function flatter(arr){
        return arr.reduce(function(a, b){
            return a.concat(b);
        },[]);
    }
    /* ES6 ver.
    var flatter = (arr) => arr.reduce((a, b) => a.concat(b), []);
    */

    /**
     * ２リスト間の数値の範囲重複をチェックする
     * params: array, array
     * return: Boolean
     * usage:
-----------------
uniqRangeChecker([1,3], [3,5]);
//true
-----------------
    */
    function uniqRangeChecker(arr1, arr2){
        if((arr1[0] === arr2[0]) || (arr1[1] === arr2[1])){
            return true;
        }else if((arr1[0] === arr2[1]) || (arr1[1] === arr2[0])){
            return true;
        }else if((arr1[0] < arr2[0]) && (arr1[1] > arr2[0])){
            return true;
        }else if((arr1[0] < arr2[1]) && (arr1[1] > arr2[1])){
            return true;
        }else if((arr2[0] < arr1[0]) && (arr2[1] > arr1[0])){
            return true;
        }else if((arr2[0] < arr1[1]) && (arr2[1] > arr1[1])){
            return true;
        }else{
            return false;
        }
    }

    function refCut(arrobj){
      if(Array.isArray(arrobj)){
        return arrobj.slice();
      }else if(typeof arrobj === 'object'){
        var newObj = {};
        for(var akey in arrobj) newObj[akey] = arrobj[akey];
        return newObj;
      }else{
        return false;
      }
    }

//-------------------------------------------------

  return {
      crange: cRange,
      searchobj: searchObj,
      listcount: listCount,
      listmaxcounter: listmaxCounter,
      flatter: flatter,
      uniqRangeChecker: uniqRangeChecker,
      refcut: refCut
  };
})();
