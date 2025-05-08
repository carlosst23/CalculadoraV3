const pantalla = document.querySelector(".pantalla");
const pantalla2 = document.querySelector(".pantalla2");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            try {
                pantalla2.textContent = eval(pantalla.textContent);
            } catch {
                pantalla2.textContent = "...";
            }
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax ERROR") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                try {
                    pantalla2.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla2.textContent = "...";
                }
                return;
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Syntax ERROR";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax ERROR") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
            try {
                pantalla2.textContent = eval(pantalla.textContent);
            } catch {
                pantalla2.textContent = "...";
            }
            return;
        }
    })
})


document.addEventListener("keyup", soltoTecla)

function soltoTecla(event){
    const soltoTecla = event.key;
    
    if(event.keyCode >= 96 && event.keyCode <= 110 || event.keyCode == 56 || event.keyCode == 57){
        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax ERROR") {
            pantalla.textContent = soltoTecla;
        } else {
            pantalla.textContent += soltoTecla;
            try {
                pantalla2.textContent = eval(pantalla.textContent);
            } catch {
                pantalla2.textContent = "...";
            }
            return;
        }
    }
    if (event.keyCode == 8) {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax ERROR") {
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            try {
                pantalla2.textContent = eval(pantalla.textContent);
            } catch {
                pantalla2.textContent = "...";
            }
            return;
        }
        return;
    }
    if (event.keyCode == 13) {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Syntax ERROR";
        }
        return;
    }
    
}