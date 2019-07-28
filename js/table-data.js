


function validateForm()

{
    // var a = document.forms["myForm"]["fname"].value;

   
    var name = document.myForm.fname.value;
   
    var email = document.myForm.email.value;
    
    
    var nationality = document.myForm.nationality.value;
    
    
    // alert(nationality);
    var city = document.myForm.city.value;
 
    // var lname = document.myForm.value;
    

    var lname = document.myForm.lname.value;
    var phone = document.myForm.phone.value;
    
    
    // alert(phone);
    var state = document.myForm.state.value;

    
    var pincode = document.myForm.pincode.value;
 


    var addresss = document.myForm.addresss.value;
 
    // alert(addresss);
    // alert(addresss);   
   
    // alert(name+''+lname+''+email+''+nationality+''+city+''+phone+''+pincode+''+addresss+''+state)

    if (name == null || name == "" || name.length < 6) {

        document.getElementById("pname").innerHTML =
            name.validationMessage = "Please Fill More than 6 Characters";

        return false;
    } else if (lname == null || lname == "" || lname < 6) {

        document.getElementById("plast").innerHTML =
            lname.validationMessage = "Please Fill More than 6 Characters";
        return false;
    } else if (email == null || email == "") {
        //  alert("Please fill the Email Id");
        document.getElementById("pemail").innerHTML =
            email.validationMessage = "Please Fill Currect Mail";
        return false;
    } else if (nationality == null || nationality == "") {
        document.getElementById("pdes").innerHTML =
            dec.validationMessage = "Please Fill  Characters Between 6 To 50";
        return false;
    }

    myFunction();
    return false;
    // return alert("Thank You for Fill The Complete Form");
}


function myFunction() {
    var table = document.getElementById('customers');

    
    
   

    var   newRow = table.insertRow(table.length);

  
    alert(newRow);

     var  cell1 = newRow.insertCell(0);

     
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);


     var name = document.myForm.fname.value;
   
     var email = document.myForm.email.value;
     
     
     var nationality = document.myForm.nationality.value;
     
     
     // alert(nationality);
     var city = document.myForm.city.value;
  
     // var lname = document.myForm.value;
     
 
     var lname = document.myForm.lname.value;
     var phone = document.myForm.phone.value;
     
     
     // alert(phone);
     var state = document.myForm.state.value;
 
     
     var pincode = document.myForm.pincode.value;
  
 
 
     var addresss = document.myForm.addresss.value;


     alert('Okay');
   
}


  function allOperation()

  {
      return  validateForm();

     return myFunction();
  }