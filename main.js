var botonEncripta = document.getElementById('botonEncripta');
var botonDesencripta = document.getElementById('botonDesencripta');
var textArea = document.getElementById('textArea');

botonDesencripta.addEventListener('click', function() {
    desencripta(textArea.value);
});

function desencripta(s) {
    var res = "";
    for(var i = 0;i < s.length;i++) {
        switch(s[i]) {
            case 'a':
                res+="a";
                i++;
                break;
            case 'e':
                res+="e";
                i+=4;
                break;
            case 'i':
                res+="i";
                i+=3;
                break;
            case 'o':
                res+="o";
                i+=3;
                break;
            case 'u':
                res+="u";
                i+=3;
                break;
            default:
                res+=s[i];

        }
    }
    var mostrar = document.getElementById("resultado");
    var imagen = mostrar.querySelector('img');
    if(imagen) mostrar.removeChild(imagen);
    var texto = mostrar.querySelector('p');
    texto.textContent = res;
}

botonEncripta.addEventListener('click', function() {
    encripta(textArea.value);
});

function encripta(s) {
    var res = "";
    for(var i = 0;i < s.length;i++) {
        switch(s[i]) {
            case 'a':
                res+="ai";
                break;
            case 'e':
                res+="enter";
                break;
            case 'i':
                res+="imes";
                break;
            case 'o':
                res+="ober";
                break;
            case 'u':
                res+="ufat";
                break;
            default:
                res+=s[i];

        }
    }
    var mostrar = document.getElementById("resultado");
    var imagen = mostrar.querySelector('img');
    if(imagen) mostrar.removeChild(imagen);
    var texto = mostrar.querySelector('p');
    texto.textContent = res;
}