
function checkProvince() {
    let check=false;
   let province =prompt("Nhập Tỉnh");
    do {
        province=prompt("Nhâp Tỉnh Đà Nẵng:Huế:Quảng Nam");
        if(province=="Đà Nẵng"||province=="Huế"||province=="Quảng Nam"){
           check=true;
            return province;
        }

    }while (!check)

}
