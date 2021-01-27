function checkService() {
   let check=false;
    do {
        let service =prompt("Chọn Dịch vụ: Villa : House: Room");
        if(service=="Villa"||service=="House"||service=="Room"){
            check=true;
            return service;
        }

    }while (!check)
}