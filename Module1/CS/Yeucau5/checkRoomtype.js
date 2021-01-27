function checkRoomtype() {
    let check=false;
    do {
        let roomtype =prompt("Loại Phòng thuê :Vip:Bussiness:Normal")
        if(roomtype=="Vip"||roomtype=="Bussiness"||roomtype=="Normal"){
            check=true;
            return roomtype;
        }
    }while (!check)
}