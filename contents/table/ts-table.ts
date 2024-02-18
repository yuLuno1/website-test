// 表の動的作成
function makeTable(tableId: string): void {
    // 表の作成開始
    var i: number, j: number;
    let clm: number = 0;
    let cell: any;
    var rows: any = []; var tbl: any = document.createElement("table");
    var room: number = 101;
    let strRoom: string;
    var testArray: (string | number)[][] = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ]
    for (i = 0; i < 4; i++) {
        rows.push(tbl.insertRow(-1));  // 行の追加
        for (j = 0; j < 3; j++) {
            cell = rows[i].insertCell(-1);
            cell.className = 'cll';
            cell.classList.add('hght');
            cell.style.backgroundColor = "#fcf";
            strRoom = String(room);
            strRoom = 'a'
            cell.appendChild(document.createTextNode(testArray[i][j].toString()));
            clm = j;
        }
    }
    // 指定したdiv要素に表を加える
    //if (tableId === null) return;
    document.getElementById(tableId)!.appendChild(tbl);
    tbl.className = 'tblbox';
}

window.onload = function (): void {
    // 表の動的作成
    makeTable("tblId");
};

