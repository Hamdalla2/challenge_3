var a=function(){
    document.getElementById('x').innerHTML="<div>Name</div><input type=text><div>E-Mail</div><input type=text><div>Password</div><input type=text><br><button onclick=b()>Next</button>"
}

var b=function(){
    document.getElementById('x').innerHTML="<div>Line 1</div><input type=text><div>Line 2</div><input type=text><div>City</div><input type=text><div>State</div><input type=text><div>Zip Code</div><input type=text><div>Phone</div><input type=text><br><button onclick=c()>Next</button>"
}

var c=function(){
    document.getElementById('x').innerHTML="<div>Credit Card</div><input type=text><div>Expiry</div><input type=text><div>CVV</div><input type=text><div>Zip Code</div><input type=text><br><button onclick=d()>Next</button>"
}

var d=function(){
    document.getElementById('x').innerHTML="<br><button onclick=e()>Purchase</button>"
}