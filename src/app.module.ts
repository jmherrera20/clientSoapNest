/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SoapModule.forRootAsync({
      clientName: 'MY_SOAP_CLIENT',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<SoapModuleOptions> => ({
        uri: 'http://lbtrdes.bcr.gob.sv/lbtr-ws/InstruccionServiceSoapHttpPort?wsdl',
        clientName: 'MY_SOAP_CLIENT',
        auth: {
          username: 'lbtrcliente',
          password: 'lbtrcliente',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
