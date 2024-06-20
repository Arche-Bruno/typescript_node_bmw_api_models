# Utilizar una imagen base de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo de la aplicación
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Compilar TypeScript (si es necesario)
RUN npm run build

# Exponer el puerto que utiliza la aplicación (ajusta esto según sea necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
