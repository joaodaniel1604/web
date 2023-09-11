function mostraDados(){

    var form = document.getElementById("formulario");
    
    for (var i=0; i<form.length; i++){
    document.write(form.elements[i].value);
    document.write("<br>");
    
    }
    
    }