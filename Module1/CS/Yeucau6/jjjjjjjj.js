function checkday(date_birth) {
    let check=false;
    do{
        let date_birth=prompt("Nhập ngày sinh");
        if(date_birth.charAt(2)==="/"&&date_birth.charAt(5)==="/"){
            let day =date_birth.substring(0,2);
            let month =date_birth.substring(3,5);
            let year =date_birth.substring(6,10);
            if(!isNaN(day)&&!isNaN(month)&&!isNaN(year)){
                day=Number.parseFloat(day);
                month=Number.parseFloat(month);
                year=Number.parseFloat(year);
                if (Number.isInteger(day)&&Number.isInteger(month)&&Number.isInteger(year)){
                    if(day<32&&month<13&&year>1950){
                        check=true;
                        return date_birth
                    }
                }
            }
        }
        if(!check){
            alert("Ngày Sinh không đúng đinh dang")
        }

    }while(!check)
}