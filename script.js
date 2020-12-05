function randomderg(){
var r = String(rand(1,65566801));
console.log(r);
var rs = r.slice(0,-3)
var rl = r.length - 3;
var re = Number(r[rl]) + 1;
var rc = rs + re;
console.log(rc);
console.log(re);
console.log(rs);



console.log(rc);
var d = document.createElement('div');
d.innerText = r;
document.body.appendChild(d);

var dl = document.getElementsByTagName('div') - 1;

var i = document.createElement('img');
i.src = "https://www1.flightrising.com/rendern/350/" + rc;
i.src = i.src + "/" + r;
i.src = i.src + "_350.png"
console.log(i.src);
d.appendChild(i);
}


function rand(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}