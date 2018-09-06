 function  validate(){
        var name =document.getElementById("name").value;
        var adresse =document.getElementById("adresse").value;
        var email =document.getElementById("email").value;
        var password =document.getElementById("password").value;
        if (name=='')
        { document.getElementById("eresult").innerHTML="name is Required";
            return false ;}
        if (adresse=='')
        { document.getElementById("eresult").innerHTML="adresse is Required";
            return false ;}
        if (email=='')
            { document.getElementById("eresult").innerHTML="email is  Required";
            return false ;
        }
       else if(password.length<8){ 
        document.getElementById("eresult").innerHTML="The password has less than 8 characters ";
        return false;  
        }
       var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)==false)
        {  document.getElementById("eresult").innerHTML="email haven't email forme";
        return false ;}
        var regexp=/(\w*\d)/;
        var regexp1=/(\w*[a-z])/;
        var regexp2=/(\w*[A-Z])\w/;
        if(regexp.test(password)==false)
        {  document.getElementById("eresult").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
        return false ;}
        if(regexp1.test(password)==false)
        {  document.getElementById("eresult").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
        return false ;}
        if(regexp2.test(password)==false)
        {  document.getElementById("eresult").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
        return false ;}
        else {
            return true;
        }
            }
        
