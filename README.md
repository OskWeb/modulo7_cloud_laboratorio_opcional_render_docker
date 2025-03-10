# Despliegue con docker y render

Pasos a seguir:

1. Crear un archivo Dockerfile en la raiz de nuestro proyecto
   
2. Dentro del archivo le damos las intrucciones necesarias para crear la imagen que queremos:
   - En primer lugar le decimos que parta de una imagen de node:22-alpine
   - Le decimos que cree la carpeta /usr/app y le indicamos que sea nuestro directorio de trabajo
   - Copia todo el contenido del proyecto dentro de /usr/app salvo lo que se le indique que descarte dentro del archivo .dockerignore
   - Se le pide que instale la dependencias de node y que acto seguido haga una build
   - Una vez realizada la build le indicamos que copie el contenido de /dist dentro de /server/public
   - Le indicamos que instale tambien las dependencias de node dentro de /server
   - El puerto de uso será el 3000
   - Por ultimo le decimos que inicialice el servidor con un comando CMD

   ![imagen](https://github.com/user-attachments/assets/d5596821-57a7-4b25-839e-08f0183ec6df)

3. Subir el proyecto a github
4. En render seguimos los siguientes pasos:
   - Pulsamos en web service
   - Elegimos el repo a desplegar
   - En la ventana de configuración seleccionamos:
     . Language: Docker
     . Region: EU Central
     . Instance Type: Free
     . DockerFile Path: ./Dockerfile
     . Docker Build Context Directory: '.'
   El resto lo podemos dejar por defecto

5. Una vez desplegado el resultado sería el siguiente:

![imagen](https://github.com/user-attachments/assets/2a24fbbc-651d-4a13-906c-75f85b49f97e)

url: https://modulo7-cloud-laboratorio-opcional-tt91.onrender.com/#/characters
