const result = document.getElementById('result')
const submit = document.getElementById('submit')

const binary = e => {
    e.preventDefault()
    const num = document.getElementById('number').value
    if(num === ''){
        alert('Please Enter a digit.')
    }
    else if(num < 0){
        alert("Please enter a positive number.")
    }
    else{
        result.style.visibility = 'visible'
    }

    // Converting
    binaryNumber = Number(num).toString(2)
    result.innerText = binaryNumber
}

submit.addEventListener("click",binary)