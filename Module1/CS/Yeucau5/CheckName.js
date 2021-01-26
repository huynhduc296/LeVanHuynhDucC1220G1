
    function checkName(name){

        let testname = [];
        name=prompt("Họ Và Tên")
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
      return name = testname.join('');
}
