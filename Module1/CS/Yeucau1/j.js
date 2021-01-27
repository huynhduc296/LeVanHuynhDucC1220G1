function confirm() {
      let name = document.getElementById("name").value;
      let numberId =document.getElementById("numberId").value;
      let day_of_birth =document.getElementById("day_of_birth").value;
      let email =document.getElementById("email").value;
      let address =document.getElementById("address").value;
      let province= document.getElementById("province").value;
      let vip=document.getElementById("vip").value;
      let discount = document.getElementById("discount").value;
      let adult=document.getElementById("adult").value;
      let child=document.getElementById("child").value;
      let rent_days =document.getElementById("rent_days").value;
      let service =document.getElementById("service").value;
      let room_type=document.getElementById("room_type").value;

      // let tien;
      // switch (service) {
      //   case "Villa (500$/day)":
      //        sv = 500;
      //   break;
      //   case "House (300$/day)":
      //        sv = 300;
      //   break;
      //   case "Room (100$/day)":
      //        sv = 100;
      //   break;
    }
    tien = sv * rent_days * (1 - discount/100);
    document.getElementById("tien").innerHTML = parseInt(tien)+" $";
    document.getElementById("name1").innerHTML=name;

