var o={}
var a=function(){
    document.getElementById('x').innerHTML="<div>Name</div><input type=text><div>E-Mail</div><input type=text><div>Password</div><input type=text><br><button onclick=b()>Next</button>"
}

var b=function(){
    var x=document.getElementById('x')
    o["name"]=x.childNodes[1].value
    o["email"]=x.childNodes[3].value
    o["password"]=x.childNodes[5].value
    x.innerHTML="<div>Line 1</div><input type=text><div>Line 2</div><input type=text><div>City</div><input type=text><div>State</div><input type=text><div>Zip Code</div><input type=Number><div>Phone</div><input type=Number><br><button onclick=c()>Next</button>"
}

var c=function(){
    var x=document.getElementById('x')
    o["line1"]=x.childNodes[1].value
    o["line2"]=x.childNodes[3].value
    o["city"]=x.childNodes[5].value
    o["state"]=x.childNodes[7].value
    o["zipcode"]=x.childNodes[9].value
    o["phone"]=x.childNodes[11].value

    x.innerHTML="<div>Credit Card</div><input type=Number><div>Expiry</div><input type=text><div>CVV</div><input type=Number><div>Zip Code</div><input type=Number><br><button onclick=d()>Next</button>"
}

var d=function(){
    var x=document.getElementById('x')
    o["creditcard"]=x.childNodes[1].value
    o["expiry"]=x.childNodes[3].value
    o["cvv"]=x.childNodes[5].value
    o["zipcodecc"]=x.childNodes[7].value
    x.innerHTML="<br><button onclick=e(o)>Purchase</button>"
}

var e=function(o){
    $.ajax({
    url:'http://127.0.0.1:3000/db',
    method:'post',
    data:JSON.stringify(o),
    success:(result)=>{document.getElementById('x').innerHTML=result}
    })
}