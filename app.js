function even() {

    var tagSelector = document.getElementsByTagName('p');

    for (i = 0; i < tagSelector.length; i++) {

        if (i % 2 == 0) {
            tagSelector[i].textContent = i;
        }


    }


}


function odd() {

    var tagSelector = document.getElementsByTagName('p');

    for (i = 0; i < tagSelector.length; i++) {

        if (i % 2 !== 0) {
            tagSelector[i].textContent = i;
        }


    }


}
