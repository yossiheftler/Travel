
let db = {
    destenations: null,
}

console.log('populet destenation');

let destenation = [
    { code: 1, name: 'jerusalem', price: 600 },
    { code: 2, name: 'London', price: 300 },
    { code: 3, name: 'paris', price: 500 },
    { code: 4, name: 'berlin', price: 200 },
    { code: 5, name: 'oslo', price: 550 }
]
let des = document.querySelector('.destenations tbody')
let tempDes = '<tr><td>#code</td><td>#name</td><td>#price</td></tr>'
destRowsHtml = ''

destenation.forEach((desItem) => {
    destRowsHtml += tempDes
        .replace('#code', desItem.code)
        .replace('#name', desItem.name)
        .replace('#price', desItem.price)

})
des.innerHTML = destRowsHtml
db.destenation = destenation



let orderr = []

console.log('populet orders');
function orders() {
    console.log('start')



    let f = destenation.find(x => {
        return x.code == document.getElementById("travel").value
    })

    let ord = document.querySelector('.order tbody')
    console.log('ord', ord)
    let ordTemp = '<tr><td>#Total</td> <td>#passengers</td> <td>#travelID</td><td>#personalID</td><td>#name</td><td>#code</td></tr>'
    let orderHTML = ''

    let newOrder = {
        passengers: document.getElementById("passenger").value,
        name: document.getElementById("name").value,
        total: document.getElementById("passenger").value * f.price,
        travelID: f.name,
        personalID: document.getElementById("personal").value,
        code: f.code

    };
    orderr.push(newOrder);

    orderr.forEach(orditem => {
        orderHTML = ordTemp
            .replace('#Total', document.getElementById("passenger").value * f.price)
            .replace('#passengers', document.getElementById("passenger").value)
            .replace('#travelID', f.name)
            .replace('#personalID', document.getElementById("personal").value)
            .replace('#name', document.getElementById("name").value)
            .replace('#code', f.code)

    })

    console.log('orderr:', orderr)
    ord.innerHTML += orderHTML;

    document.getElementById("passenger").value = '';
    document.getElementById("name").value = '';
    document.getElementById("travel").value = '';
    document.getElementById("personal").value = '';
}
function sbutton() {


    let search = document.getElementById('uname').value;
    let c = orderr.filter(y => {
        return y.name == search;
    })

    console.log("c:", c);

    let cord = document.querySelector('.search tbody')
    //console.log('search', search)
    let crdTemp = '<tr><td>#Total</td> <td>#passengers</td> <td>#travelID</td><td>#personalID</td><td>#name</td><td>#code</td></tr>'
    let crderHTML = ''

    c.forEach(element => {
        crderHTML += crdTemp
            .replace('#Total', element.total)
            .replace('#passengers', element.passengers)
            .replace('#travelID', element.travelID)
            .replace('#personalID', element.personalID)
            .replace('#name', element.name)
            .replace('#code', element.code)
    });

    cord.innerHTML += crderHTML;

}
function selector() {
  let selectOp= document.querySelector('.selected')
  console.log('selectOp', selectOp)
  console.log('orderr', orderr)
  let c=orderr.filter(element => {
      console.log('element.travelID:', element.travelID)
      console.log('selectOp.value:', selectOp.value)
      return element.travelID == selectOp.value
  });
  console.log('c',c)
 let selectTable= document.querySelector('.selectTab tbody')
 let selTemp = '<tr><td>#Total</td> <td>#passengers</td> <td>#travelID</td><td>#personalID</td><td>#name</td><td>#code</td></tr>'
    
 let selHTML = '';

 let totalAll = 0;
 for (let i = 0; i < c.length; i++) {
     totalAll += c[i].total;
 }

 console.log('totalAll', totalAll);
    c.forEach(element => {
        selHTML += selTemp
            .replace('#Total', element.total)
            .replace('#passengers', element.passengers)
            .replace('#travelID', element.travelID)
            .replace('#personalID', element.personalID)
            .replace('#name', element.name)
            .replace('#code', element.code)           
    });

    selHTML += `<tr><td>${totalAll}</td><td>Total All</td></tr>`

    selectTable.innerHTML += selHTML;
   
}






