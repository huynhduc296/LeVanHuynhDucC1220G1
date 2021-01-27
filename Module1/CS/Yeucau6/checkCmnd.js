let check=false
function checkCM() {
    do{
        let cmnd =prompt("Nhập số CMND");
        check=false;
        if(cmnd.length===8){
            if(cmnd>=0&&cmnd<=99999999){
                check=true
                return cmnd;
            }else {
                alert("Ký tự phải là số");
            }
        }else {
            alert("Nhập không đúng ký tự");
        }
    }while (!check)

}
