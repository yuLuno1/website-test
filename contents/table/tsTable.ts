// 表の動的作成
function makeTable(tableId: string): void{
    // 表の作成開始
    var i: number, j: number;
    let clm: number = 0;
    let asc: number; // A on ASCII code
    let cell: any;
    var rows: any=[]; var tbl: any = document.createElement("table");
    var room: number = 101;
    let strRoom: string;
    for(i = 0; i < 6; i++){
        if(i%2 === 0 && i!==0){
            room = room + 100;
            room = room - clm - 1;
        }
        rows.push(tbl.insertRow(-1));  // 行の追加
        console.log(room);
        console.log(clm);
        asc = 65;
        for(j = 0; j < 5; j++){
            cell=rows[i].insertCell(-1);
            if(i%2 === 0){
                cell.className = 'cll';
                cell.style.backgroundColor = "#fff";
                strRoom = String(room);
                if(j !== 0){
                }
                strRoom = strRoom + String.fromCharCode(asc);
                cell.appendChild(document.createTextNode(strRoom));
                    room = room + 1;
                    asc = asc + 1;
            }else{
                cell.className = 'cll hghtOdd';
                cell.style.backgroundColor = "#fff";
                cell.appendChild(document.createTextNode("\u00a0"));
            }
        clm = j;
        }
    }
    // 指定したdiv要素に表を加える
    //if (tableId === null) return;
    document.getElementById(tableId)!.appendChild(tbl);
    tbl.className = 'tblbox';
}

window.onload = function(): void{
// 表の動的作成
makeTable("tblId");
};

