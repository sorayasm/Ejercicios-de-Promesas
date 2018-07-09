function animateElementX(element, start, end, duration) {
    return new Promise((resolve, reject) => {
        const delta = (end - start) * 30 / duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.left = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(() => { //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.left = currentPosition;
            if (start < end && currentPosition >= end) {
                clearInterval(loop);
                resolve();
            } else if (start > end && currentPosition <= end) {
                clearInterval(loop);
                resolve();
            }

        }, 30); // ejecuta una funcion cada cierto tiempo
    });
}

function animateElementY(element, start, end, duration) {
    return new Promise((resolve, reject) => {
        const delta = (end - start) * 30 / duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.top = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(() => { //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.top = currentPosition;
            if (start < end && currentPosition >= end) {
                clearInterval(loop);
                resolve();
            } else if (start > end && currentPosition <= end) {
                clearInterval(loop);
                resolve();
            }

        }, 30); // ejecuta una funcion cada cierto tiempo
    });
}

// Somos las programadoras de la Promise
//============================================= Promise =======================
//Somos las programadoras usuarias de la promise

const allImg = document.getElementsByTagName("img");
/*console.log("Comienza Promesa")
animateElement(allImg[0], -200, 500, 3000)
    .then(() => {
        console.log("Terminó la animación de doge");
        return animateElement(allImg[1], -200, 500, 6000)
    })
    .then(() => {
        console.log("Terminó la animación de cate");
        return animateElement(allImg[0], -200, 500, 3000)
    })
    .then(() => {
        console.log("Terminó la segunda animación de cate");
    })
    .catch(() => {

    });
console.log("Holas, soy codigo despues de la promesa")*/

Promise.all([
        animateElementX(allImg[0], -200, 600, 3000), // se mueve hacia la derecha
        animateElementX(allImg[1], -200, 400, 6000) // se mueve hacia la derecha
    ]).then(() => {
        return Promise.all([
            animateElementY(allImg[0], 0, 400, 3000), // se mueve hacia abajo
            animateElementY(allImg[1], 140, 260, 6000) // se mueve hacia abajo
        ])
    }).then(() => {
        return Promise.all([
            animateElementX(allImg[0], 600, 0, 3000), // se mueve hacia la izq
            animateElementX(allImg[1], 400, 0, 6000) // se mueve hacia la izq
        ])
    })
    .then(() => {
        return Promise.all([
            animateElementY(allImg[0], 400, 0, 3000), // se mueve hacia arriba
            animateElementY(allImg[1], 260, 0, 6000) // se mueve hacia arriba
        ])
    })
    .catch(() => {

    });