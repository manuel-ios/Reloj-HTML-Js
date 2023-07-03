console.log("Estoy dentro de index ")
function reloj(){
    let date =  new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    hr =  hr <=9 ? "0"+hr : hr;
    min =  min <= 9 ? "0"+min: min;
    seg =  seg <= 9 ? "0"+ min : seg;
    let horaActual =  hr + ":" + min + ":" + seg 
    console.log (horaActual)

    setTimeout(()=>{
        reloj()
    },2000)
}
reloj()