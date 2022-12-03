DESPLIEGUE
ATLAS MONGO - SERVICIO EN LA NUBE DE ALJAMIENTO DE BASES DE DATOS MONGODB
Registrarnos en Atlas https://www.mongodb.com/es/cloud/atlas/signup
Crear el cluster. Un cluster es un servidor que alojará nuestras bases de datos
Crear usuario que accederá al cluster y generar password de acceso (u6Mm35C1CrnnJL3X)
Elegir la politica de red, permitimos acceso a todas las ips con (0.0.0.0/0)
Modificar los privilegios(MongoDB Roles) por defecto del usuario para que le permita Administrar Atlas
Crear la Base de datos y colección (manual o automaticamente)
Obtener la URI del cluster para connectar desde servicios externos como Compass o Node mongodb+srv://api-movies:@cluster0.kk0ou2i.mongodb.net/test
Sustituyo en la URI DE MONGO OBTENIDA con los signos <> incluidos por la password creada mongodb+srv://api-movies:u6Mm35C1CrnnJL3X@cluster0.kk0ou2i.mongodb.net/test
Sustituyo el /test por /Database mongodb+srv://api-movies:u6Mm35C1CrnnJL3X@cluster0.kk0ou2i.mongodb.net/movies
Probar en compass y en node la conexión
RAILWAY - PLATAFORMA COMO SERVICIO (PaaS) para desplegar una app node.js https://railway.app/
Login con nuestra cuenta de github
Aceptar los terminos del servicio (Terms of Service.)
Tener el proyecto a desplegar en un repositorio puseado en una rama de github
Crear un nuevo proyecto para desplegar desde un repositorio en Github
Damos permisos para la rama y repo donde esté la aplicación a desplegar
Añadimos las variables de entorno (MONGO_URI=MONGO_URI_VALUE)
Configuramos Comandos de START, POLITICA DE REINICIO CUANDO SE CAIGA, ENDPOINT HEALCHECK (/PING)
Exponer el servicio en un dominio generado por la plataforma movies.up.railway.app↗
Comprobar logs
Comprobar que el servicio está funcionando en la url pública https://movies.up.railway.app/genres
