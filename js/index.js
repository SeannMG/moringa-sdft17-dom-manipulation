const rows = document.querySelector("#rows")
const frm = document.querySelector("#frm")

// const products = []


function removeProduct(event){
    console.log(event.target)

}

frm.addEventListener("submit", function(event){
    event.preventDefault()

    const formData = {
        product: event.target.product.value,
        price: event.target.price.value,
        qty: event.target.qty.value,
    
    }

    // products.push(formData)

        rows.innerHTML += `
        <tr>
                <td>
                    ${formData.product}
                </td>
                <td>
                    ${formData.price}
                </td>
                <td>
                   ${formData.qty}
                </td>
                <td>
                    ${Number(formData.price) * Number(formData.qty)}
                </td>
                <td>
                    <button  class="btn-remove btn btn-sm btn-danger">X</button>
                </td>
                

            </tr>
        `

    rows.addEventListener("click", function(event){
        if(event.target.classList.contains("btn-remove")){

            event.target.closest("tr").remove()
            // console.log(event.target.classList)

        }
    })

})




// /**
//  * JS Event bubbling 
//  * JS Event propagation
//  * JS Event delegation
//  */


/**
 * Separation of concern: It's a concept used to separate the business and UI logic
 */






