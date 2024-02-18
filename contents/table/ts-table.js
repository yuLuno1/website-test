// 表の動的作成
function makeTable(tableId) {
    // 表の作成開始
    var i, j;
    var clm = 0;
    var cell;
    var rows = [];
    var tbl = document.createElement("table");
    var room = 101;
    var strRoom;
    var testArray = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ];
    for (i = 0; i < 4; i++) {
        rows.push(tbl.insertRow(-1)); // 行の追加
        for (j = 0; j < 3; j++) {
            cell = rows[i].insertCell(-1);
            cell.className = 'cll';
            cell.classList.add('hght');
            cell.style.backgroundColor = "#fcf";
            strRoom = String(room);
            strRoom = 'a';
            cell.appendChild(document.createTextNode(testArray[i][j].toString()));
            clm = j;
        }
    }
    // 指定したdiv要素に表を加える
    //if (tableId === null) return;
    document.getElementById(tableId).appendChild(tbl);
    tbl.className = 'tblbox';
}
window.onload = function () {
    // 表の動的作成
    makeTable("tblId");
};
