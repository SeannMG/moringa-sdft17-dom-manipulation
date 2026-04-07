document.querySelector("#grand-parent").addEventListener("click", function(event){
      if(event.target.id === "grand-parent"){
    console.log("grand-parent")

    }

    if(event.target.id === "parent"){
        console.log("Parent")
    }

    if(event.target.id === "child"){
        console.log("Child")
    }
})

// document.querySelector("#parent").addEventListener("click", function(event){
//     console.log(event.target.id)
//     // console.log("parent")
//     //   if(event.target.id === "parent"){
//     // console.log("parent")

//     // }
    
// })

// document.querySelector("#child").addEventListener("click", function(event){
//     console.log(event.target.id)

//     // if(event.target.id === "child"){
//     // console.log("child")

//     // }
// })


/**
 * Event bubbling and Propagation
 */

