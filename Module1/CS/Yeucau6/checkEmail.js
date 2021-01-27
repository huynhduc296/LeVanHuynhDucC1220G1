function checkEmail() {
    check=false;
          do{
                 let countat =0;
                 let coutdoc =0;
             email =prompt("Nhập email");
                 for(let i=0;i<email.length;i++){
                     if(email.charAt(i)==="@"){
                         countat++;
                         for(let j=i+1;j<=email.length;j++){
                             if(email.charAt(j)==="."){
                                 coutdoc++
                             }
                         }
                     }
                 }
                 if(coutdoc<1||countat!=1){
                     alert("Bạn Nhập mail k đúng")
                     check=false;
                 }else {
                     check=true
                     return email;
                 }

             }while (!check)
}
