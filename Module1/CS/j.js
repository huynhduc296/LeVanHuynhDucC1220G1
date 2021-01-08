function confirm() {
      let name = document.getElementById("name").value;

      let discount = document.getElementById("discount").value
     
      let rent_days =document.getElementById("rent_days").value
      let service =document.getElementById("service").value
     
      let tien;
      switch (service) {
        case "Villa (500$/day)":
             sv = 500;
        break;
        case "House (300$/day)":
             sv = 300;
        break;
        case "Room (100$/day)":
             sv = 100;
        break;
    }
    tien = sv * rent_days * (1 - discount/100);

    document.getElementById("tien").innerHTML = parseInt(tien) + " $";
    var inputArray = document.getElementsByClassName("tag")
    var showInformationTag = document.getElementById("showInformation")
    for (let i = 0; i < inputArray.length; i++) {
        let childrenTag = document.createElement("p");
        childrenTag.innerHTML = inputArray[i].value;
        showInformationTag.appendChild(childrenTag);
      }
     }
    