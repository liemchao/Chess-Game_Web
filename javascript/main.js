const chessboard = document.getElementById("chessboard");

function createChessboard() {
    const pieces = [
        "&#9820;",
        "&#9822;",
        "&#9821;",
        "&#9819;",
        "&#9818;",
        "&#9821;",
        "&#9822;",
        "&#9820;", // Hàng trên
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;",
        "&#9823;", // Hàng giữa
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", // Hàng trống
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", // Hàng trống
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "", // Hàng trống
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "&#9817;", // Hàng gần cuối
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9817;",
        "&#9820;",
        "&#9822;",
        "&#9821;",
        "&#9819;",
        "&#9818;",
        "&#9821;",
        "&#9822;",
        "&#9820;", // Hàng cuối cùng
    ];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add(i % 2 === j % 2 ? "white" : "black");

            const index = i * 8 + j;
            if (pieces[index]) {
                const piece = document.createElement("div");
                piece.classList.add("piece");
                piece.innerHTML = pieces[index];
                square.appendChild(piece);
            }

            chessboard.appendChild(square);
        }
    }
}
createChessboard();