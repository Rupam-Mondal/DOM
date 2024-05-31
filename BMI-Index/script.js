const form = document.querySelector('form')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    const age = parseInt(document.querySelector("#age").value)
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector(".results") 

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight.";
    } else if (isNaN(age) || age <= 0) {
        result.innerHTML = "Please enter a valid age.";
    }
    else{
        const ans = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `BMI index is = ${ans}`
    }
})