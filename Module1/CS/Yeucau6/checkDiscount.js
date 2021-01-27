function checkDiscount() {
    let check=false;
    do{
        let discount =prompt("số ngày thuê");
        if(!isNaN(discount)) {
            discount = Number.parseFloat(discount);
            if (Number.isInteger(discount) && (discount > 0)) {
                check=true;
                return discount;
            }
        }if(!check) {
            alert("Không phải số nguyên dương")
        }

    }while(!check)
}