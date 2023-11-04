// Tema elegido: Calcular pagos en cuotas sobre un monto determinado.

function television() {
    let tvElegida = prompt("¡Te damos la bienvenida a RAMIREZ TVs!\nPor favor, selecciona la Televisión de tu preferencia:\n\n1. TV Plasma 32 pulgadas: $30.000\n2. TV LCD 32 pulgadas: $60.000\n3. TV LED 55 pulgadas: $140.000");

    let precio = 0;

    switch (parseInt(tvElegida)) {
        case 1:
            precio = 30000;
            break;
        case 2:
            precio = 60000;
            break;
        case 3:
            precio = 140000;
            break;
        default:
            alert("Opción Incorrecta. Recarga la página para intentarlo nuevamente.");
            return;
    }

    let cuotaSeleccionada = prompt(`Has seleccionado una TV. Precio: $${precio}\nElegir un método de pago:\n1. 1 Pago\n2. 6 Cuotas\n3. 12 Cuotas`);

    switch (parseInt(cuotaSeleccionada)) {
        case 1:
            alert(`Usted deberá de pagar el total de $${Math.round(precio)} en un solo pago.`);
            break;
        case 2:
            alert(`Usted deberá de pagar el total de $${Math.round(precio / 6)} en 6 cuotas.`);
            break;
        case 3:
            alert(`Usted deberá de pagar el total de $${Math.round(precio / 12)} en 12 cuotas.`);
            break;
        default:
            alert("Opción Incorrecta. Recarga la página para intentarlo nuevamente.");
    }
}

television();

// NOTA: Ocupé la función "Math.round()" en los precios totales porque en el caso de la televisión LED las cuotas me daban numeros decimales muy largos.