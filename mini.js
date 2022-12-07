//obtaining entered value in inputfield


function calculate() {
    var book1 = parseInt(document.getElementById("bookOne").value);
    var book2 = parseInt(document.getElementById("bookTwo").value);
    var book3 = parseInt(document.getElementById("bookThree").value);
    var book4 = parseInt(document.getElementById("bookFour").value);
    var book5 = parseInt(document.getElementById("bookFive").value);
    var book6 = parseInt(document.getElementById("bookSix").value);
    var book7 = parseInt(document.getElementById("bookSeven").value);



//conditon for valid marks

    if (book1 > 100 || book2 > 100 || book2 > 100 || book3 > 100 || book4 > 100 || book5 > 100 || book6 > 100 || book7 > 100) {
        alert(" please enter the valid subject marks");

    }
    // obtaining percentage using marks of each subject
    else {
        var obtain = book1 + book2 + book3 + book4 + book5 + book6 + book7;
        document.getElementById("obtain").innerHTML = obtain;
        var per = obtain / 700 * 100;
        document.getElementById("per").innerHTML = per;


// Giving remarks

        if (book1 > 40 && book2 > 40 && book2 > 40 && book3 > 40 && book4 > 40 && book5 > 40 && book6 > 40 && book7 > 40) {
            document.getElementById("remarks").innerHTML = " <span style='color:green'>Pass</span>";
        }
        else {
            document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail</span>";
        }




// checking grade
        if (per >= 80) {
            document.getElementById("grade").textContent = "A";

        }
       else if (per >= 70) {
            document.getElementById("grade").textContent = "B";
 
        }
        else if (per >= 60) {
            document.getElementById("grade").textContent = "C";

        }
       else if (per >= 50) {
            document.getElementById("grade").textContent = "D";

        }
        else if (per >= 40) {
            document.getElementById("grade").textContent = "E";

        }
        else {
            document.getElementById("grade").textContent = " You are not eligible"
        }






    }


}

