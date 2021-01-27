function checkVip(){
    let check=false;
    do {
        let Vip =prompt("Nhập Loại Víp: Diamond :Platinum : Gold :Silver : Member");
        if(Vip=="Diamond"||Vip=="Platinum"||Vip=="Gold"||Vip=="Silver"||Vip=="Member"){
            check=true;
            return Vip;
        }

    }while (!check)
}