const number = document.getElementById("number");

const operator = document.querySelectorAll(".operator");
/*
//large code 
operator[0].addEventListener("click", function(){
    
})
operator[1].addEventListener("click", function(){

})
operator[2].addEventListener("click", function(){

})
*/
const result = document.querySelector(".result");

function operation(operator){
    const number_val = number.value;
    const val_array = number_val.split(operator);
    // console.log(val_array);
    let factor_add = 0;
    let factor_mult = 1;
    val_array.forEach(function(e){
        //additiona_factor = additiona_factor + parseFloat(e);
        switch(operator){
            case "+":
                //10+2+3+4
                factor_add = factor_add + parseFloat(e);
                console.log("hello", factor_add);
                result.innerHTML = `Toal sum: ${factor_add}`;
                break;
            case "*":
                //10*2*3*4
                factor_mult = factor_mult * parseFloat(e);
                result.innerHTML = `Toal sum: ${factor_mult}`;
                break;
            case "-":
                //10-2-3-4
                factor_add = parseFloat(e);
                break;
        }
        
    })
}

operator.forEach(function(e){
    e.addEventListener('click', function(element){
        // console.log(element);
        // console.log(element.target.id);
        let operator = element.target.id;
        // console.log(typeof(operator));
        switch(operator){
            case "add":
                number.addEventListener('change', function(){
                    operation("+");
                })
                break;
            case "sub":
                operation("-");
                break;
            case "mult":
                operation("*");
                break;
            case "div":
                operation("/");
                break;
            case "rem":
                operation("%");
                break;
        }
        // alert("hello")
    })
})
/*
number.addEventListener('change', function(){
    const number_val = number.value;
    const val_array = number_val.split('+');
    console.log(val_array);
    let additiona_factor = 0;
    val_array.forEach(function(e){
        //additiona_factor = additiona_factor + parseFloat(e);
        additiona_factor += parseFloat(e);
    })

    //for multiplication
    let multipal_factor = 1;
    val_array.forEach(function(e){
        multipal_factor = multipal_factor * parseFloat(e);
    })
    console.log(typeof(val_array[0]));//string data type
    num_val = parseFloat(number_val);
    console.log(additiona_factor);//number data type
})
*/