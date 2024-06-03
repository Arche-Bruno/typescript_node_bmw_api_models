# THE BMW CAR MODELS API

***I BUILT AN API BMW CAR MODELS WITH TECHNOLOGIES SUCH AS TYPESCRIPT, NODE.JS, MONGODB, AND DOCKER AS A CONTAINERIZED

## how to use it?
1. you must clone`git clone https://github.com/Arche-Bruno/typescript_node_bmw_api_models
2. you must open your code editor and write in your terminal `npm install or npm i`
3. **Set up environment variables**
     - Create a `.env` file in the root directory of the project.
     - Use the following template for you `.env`file
     ```plaintext
     #Environment Variables
     PORT=300
    MONGO_URL="mongodb://your_username:your_password@localhost:27017"
    DB_NAME="BMW_car_models" 
    ROOT_USERNAME="your_root_username" 
    ROOT_PASSWORD="your_root_password"
    ```
       
    Replace with your datas.

4. **Run the project** 
   Once your enviroment variables are set up, you can start the project by runing: `npm start` || `npm run dev`.
5. **Docker (Opcional)**
   if you prefer to run the app within a Docker container, you can use Docker Compose. Make sure have Docker installed on your system.
   ```plaintext 
   services:
           mongo:
             image:mongo
             restart:always
             evironment:
                MONGO_INITDB_ROOT_USERNAME: ${ROOT_USERNAME}
                MONGO_INITDB_ROOT_PASSWORD:${ROOT_PASSWORD}
                volumes:
                    -./mongo:/data/db
                 ports:
                     - 27017:27017
 ```
 
 -Run the following command in the project directory to start the containers:  **docker-compose up**
