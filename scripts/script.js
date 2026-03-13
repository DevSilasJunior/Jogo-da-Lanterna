let lanterna = document.getElementById("overlay")



document.addEventListener("mousemove", function(e){

    const Xcursor = e.clientX
    const Ycursor = e.clientY
    lanterna.style.background = `radial-gradient(circle 150px at ${Xcursor}px ${Ycursor}px, rgba(182, 182, 180, 0), rgba(225, 235, 183, 0.1), rgba(19, 17, 17, 0)`
    console.log(lanterna)
})

document.addEventListener("click", function(e){
    
})