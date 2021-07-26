let copieInput = document.getElementById("copie")

document.getElementById("result").addEventListener("click", function () {
    let result = document.createElement('p')
    result.id = "change"
    let copie = copieInput.value
    let change = document.getElementById("change")
    result.classList.add("resultat")
    
    if (copie <= 10) {
        result.innerHTML = copie * 0.1;
    } else if (copie <= 30) {
        result.innerHTML = copie * 0.1 + (copie - 10) * 0.09;
    }
    else {
        result.innerHTML = copie * 0.1 + 20 * 0.09 + (copie - 30) * 0.08;
    } 
    document.body.append(result)
    console.log(change);
    if (change != null) {
        change.remove()
    }
})
