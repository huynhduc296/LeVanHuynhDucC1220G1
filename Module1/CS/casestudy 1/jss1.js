function confirm() {
    let name = document.getElementById("name").value;
    let numberId = document.getElementById("numberId").value;
    let day_of_birth = document.getElementById("day_of_birth").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let province = document.getElementById("province").value;
    let vip = document.getElementById("vip").value;
    let discount = document.getElementById("discount").value;
    let adult = document.getElementById("adult").value;
    let child = document.getElementById("child").value;
    let rent_days = document.getElementById("rent_days").value;
    let service = document.getElementById("service").value;
    let room_type = document.getElementById("room_type").value;

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
    function checkName(name){
        let testname = [];
        name = name.trim().toLowerCase();
        testname = name.split("");
        for (let i = 0; i <name.length;i++){
            if(testname[i]===" "&& testname[i+1]===" "){
                testname.splice(i,1);
                i--;
            }
            if(i===0||testname[i-1]===" "){
                testname[i] = testname[i].toUpperCase();
            }
        }
       return  testname.join('');

    }


    document.getElementById("numberId").addEventListener("change", checkId);
        function checkId() {
            var x = document.getElementById("editId");
             cmnd =numberId;
            if(cmnd.length===8){
                if(cmnd>=0&&cmnd<=999999999){
                }else {

                }
            }

        }



    tien = sv * rent_days * (1 - discount / 100);
    document.getElementById("tien").innerHTML=parseInt(tien) + " $";
    document.getElementById("name1").value = checkName(name);
    document.getElementById("numberId1").value =checkId();
    document.getElementById("day_of_birth1").value= day_of_birth;
    document.getElementById("email1").value= email;
    document.getElementById("address1").value=address;
    document.getElementById("province1").value=province;
    document.getElementById("vip1").value=vip;
    document.getElementById("discount1").value=discount;
    document.getElementById("adult1").value=adult;
    document.getElementById("child1").value=child;
    document.getElementById("rent_days1").value=rent_days;
    document.getElementById("service1").value=service;
    document.getElementById("room_type1").value=room_type;





}