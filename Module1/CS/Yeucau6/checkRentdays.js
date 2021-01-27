function checkRentdays() {
    let check=false;
    do{
        let rentDays=prompt("Nhập số ngày thuê")
        if(rentDays=="1-3"||rentDays=="3-7"||rentDays=="10"){
            check=true;
            return rentDays;
        }

    }while (!check)
}