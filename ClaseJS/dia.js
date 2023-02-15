export class Dia {
    constructor(diaSemana, temp, hum, estadoCielo) {
    this.diaSemana = diaSemana;
    this.temperatura = temp;
    this.humedad = hum;
    this.estadoCielo = estadoCielo;
  }


getHumedadStr(){
  let tipoHumedad = ""
  if( this.humedad < 30) {
  tipoHumedad = "humedad baja"
  } else if ( this.humedad >= 30 && this.humedad < 60){
    tipoHumedad = "humedad media"
  } else if ( this.humedad >= 60){
    tipoHumedad = "mucha humedad"
  } else {
    tipoHumedad = "valor incorrecto"
  }
  return tipoHumedad
}
}