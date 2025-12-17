var aantal = 0;

document.getElementById("Knop").addEventListener("click", function() {
            aantal++;
            
            
            if (aantal > 3 && aantal <= 5) {
                document.getElementById("text").innerHTML = "Dat zijn er best veel...";
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "orange";
            } 
            
            else if (aantal > 5) {
                document.getElementById("text").innerHTML = "Pauze? Water is ook lekker";
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "red";
            }

            else {
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "green";
                document.getElementById("text").innerHTML = "";
            }

            if (aantal === 0) {
                document.getElementById("aantal").innerHTML = "0 Red Bull";
                document.getElementById("aantal").style.color = "black";
                document.getElementById("text").innerHTML = "";
            }       
        });



document.getElementById("Knop2").addEventListener("click", function() {
    if (aantal > 0) {
        aantal--;
    }

    if (aantal > 3 && aantal <= 5) {
                document.getElementById("text").innerHTML = "Dat zijn er best veel...";
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "orange";
            } 
            
            else if (aantal > 5) {
                document.getElementById("text").innerHTML = "Pauze? Water is ook lekker";
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "red";
            }

            else {
                document.getElementById("aantal").innerHTML = aantal + " Red Bull";
                document.getElementById("aantal").style.color = "green";
                document.getElementById("text").innerHTML = "";
            }


            if (aantal === 0) {
                document.getElementById("aantal").innerHTML = "0 Red Bull";
                document.getElementById("aantal").style.color = "black";
                document.getElementById("text").innerHTML = "";
            }
        });


if (aantal === 0) {
                document.getElementById("aantal").innerHTML = "0 Red Bull";
                document.getElementById("aantal").style.color = "black";
                document.getElementById("text").innerHTML = "";
            } 

document.getElementById("Reset").addEventListener("click", function() {
    aantal = 0;
    document.getElementById("aantal").innerHTML = "0 Red Bull";
    document.getElementById("text").innerHTML = "";
    document.getElementById("aantal").style.color = "black";
});