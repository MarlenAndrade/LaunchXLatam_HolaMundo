window.onclick = function(){
    //Me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi morrito?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}