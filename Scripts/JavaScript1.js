let ans = confirm("Do you want to be a pilot?");
        if (ans == true) {
            alert("OK! Lets Go!");
            console.log("User agreed");
            document.getElementById("info").innerText = 'User agreed';
        }
        else {
            alert("Ah! Nevermind!");
			window.stop();
        }

function checkAge() {
    let clientAge = Number(document.getElementById("age").value);

    if (clientAge >= 18) {
        document.getElementById("info").innerText = `You are ${clientAge}. Yes You Can!.`;
    } else if (clientAge === 17) {
        document.getElementById("info").innerText = `You are ${clientAge}. 1 More Year!.`;
    } else if (clientAge === 16) {
        document.getElementById("info").innerText = `You are ${clientAge}. 2 More Years!.`;
    } else if (clientAge === 15) {
        document.getElementById("info").innerText = `You are ${clientAge}. 3 More Years!.`;
    } else if (clientAge === 14) {
        document.getElementById("info").innerText = `You are ${clientAge}. 4 More Years!.`;
    } else if (clientAge === 13) {
        document.getElementById("info").innerText = `You are ${clientAge}. 5 More Years!.`;
    } else if (clientAge === 12) {
        document.getElementById("info").innerText = `You are ${clientAge}. 6 More Years!.`;
    } else if (clientAge === 11) {
        document.getElementById("info").innerText = `You are ${clientAge}. 7 More Years!.`;
    } else if (clientAge === 10) {
        document.getElementById("info").innerText = `You are ${clientAge}. 8 More Years!.`;
    } else {
        document.getElementById("info").innerText = `You are ${clientAge}. You have a few more years yet.`;
    }
}
        
     
