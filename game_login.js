function addUser() {
    player1 = document.getElementById("user_id").value;
    player2 = document.getElementById("user_id2").value;

    localStorage.setItem("player_1_name", player1);
    localStorage.setItem("player_2_name", player2);

    window.location="game_page.html";
}