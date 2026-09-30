const gameboard = document.querySelector("#gameboard");
const positionText = document.querySelector("#position-text");
const tiles = document.querySelectorAll(".tile"); 

let frogPosition = 0;
function updateFrog(){
    tiles.forEach(function(tile){

        tile.classList.remove("frog");
    });

    tiles[frogPosition].classList.add("frog");
    positionText.textContent = "Frog position: " + frogPosition;
}

    document.addEventListener("keydown", function(event) {

         if (event.key === "ArrowRight") {
            if (frogPosition %2 !== 1) {

                frogPosition += 1;

                updateFrog();
            }
         }
         if (event.key === "ArrowLeft") {
            if(frogPosition %2 !== 0){
                frogPosition -= 1;
                updateFrog();
            }
         }
         if (event.key === "ArrowDown") {
            if (frogPosition < 2) {
                frogPosition += 2;
                updateFrog();
            }
         }
            if (event.key ==="ArrowUp"){
                if (frogPosition >= 2){
                    frogPosition -= 2;
                    updateFrog();
                }

            }

    });
    updateFrog();
