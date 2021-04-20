//Variables

function excuses() {

    let a = ["Mi" , "El"];
    let b = ["perro", "ordenador", "telefono"];
    let c = ["comio", "se rompio"];
    let d = ["la pierna", "galletas", "cuando estaba corriendo", "en el parque"];

    let a1 = Math.floor(Math.random() * a.length);
    let b2 = Math.floor(Math.random() * b.length);
    let c3 = Math.floor(Math.random() * c.length);
    let d4 = Math.floor(Math.random() * d.length);

    let sentences ="<b>"+a[a1] + " " + b[b2] + " " + c[c3] + " " + d[d4] + "."+"</b>";

    return(sentences); 
}

 function callFunctionGenerator(){
     document.getElementById("algo").innerHTML=excuses();
 }

console.log(excuses());