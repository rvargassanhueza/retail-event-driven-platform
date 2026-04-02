import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Configuración de Swagger (Documentación)
  const config = new DocumentBuilder()
    .setTitle('Retail Event-Driven API')
    .setDescription('API Core para recepción de órdenes de compra desacopladas')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  
  // 2. Montar Swagger en la ruta /api/docs
  SwaggerModule.setup('api/docs', app, document);

  // 3. Levantar el servidor en el puerto definido en .env (o 3000 por defecto)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 API corriendo en: http://localhost:${port}`);
  console.log(`📄 Documentación Swagger en: http://localhost:${port}/api/docs`);
}
bootstrap();