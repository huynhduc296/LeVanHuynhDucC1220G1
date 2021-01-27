function checkAdults() {
    let check=false;
    do{
        let adults =prompt("số lượng Người lớn");
        if(!isNaN(adults)) {
            adults = Number.parseFloat(adults);
            if (Number.isInteger(adults)&& (adults > 0)) {
                check = true;
                return adults;
            }
        }if(!check){
            alert("Không phải số nguyên dương")
        }

    }while (!check)

}
function checkChild() {
    let check=false;
    do{
       let child =prompt("số lượng trẻ em");
        if(!isNaN(child)) {
            child = Number.parseFloat(child);
            if (Number.isInteger(child) && (child > 0)) {
                check = true;
                return child;
            }
        }if(!check){
            alert("Không phải số nguyên dương")
        }

    }while (!check)

}