// create html table
let getTable = (() => {
  let html_tbl = (data) => `<table>${data}</table>`;
  let html_tbd = (...data) => `<tbody>${data}</tbody>`;
  let html_tr  = (...data) => `<tr>${data}</tr>`;
  let html_th  = (data) => `<th>${data}</th>`;
  let html_td  = (data) => `<td>${data}</td>`;

  let create_html = (func) => (arr) => arr.reduce((a, b) => a.concat(func(b)), []);
  let create_tr = create_html(html_tr);
  let create_th = create_html(html_th);
  let create_td = create_html(html_td);

  let create = (pdat) =>
    html_tbl(
      html_tbd(
        create_tr([
          create_th(pdat.title).join(''),
          create_td(pdat.data1).join(''),
          create_td(pdat.data2).join('')
        ]).join('')
      )
    );
  
  return {create: create};
})();

let pdat = {};
pdat.title = ['ahoo', 'oogle'];
pdat.data1 = [1000, 2000];
pdat.data2 = [5200, 7400];

console.log(getTable.create(pdat));
