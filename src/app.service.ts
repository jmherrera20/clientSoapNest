import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class AppService {
  constructor(
    @Inject('MY_SOAP_CLIENT') private readonly mySoapClient: Client,
  ) {}

  async consultarInstrucciones() {
    const xml =
      '<?xml version="1.0"?><consultaInstruccionesPago xmlns="http://www.bcr.gob.sv" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.bcr.gob.sv consultaInstruccionesPago.xsd" subsistema="ABCD" usuario="Sistema"> <fechaInicialOperacion>2021-10-05</fechaInicialOperacion>  <fechaFinalOperacion>2021-10-05</fechaFinalOperacion>  <estado>07</estado> </consultaInstruccionesPago>';
    return await this.mySoapClient.consultarInstrucciones(xml);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
