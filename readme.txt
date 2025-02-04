1 . First create a database , example create a database in MongoDB Atlas , then link DB with the backend using .env file.

2. Create a new file in the root of the project , name it .env , then add the following code with your DB link :

        "  
            MONGO_URI = {Your DB link}
            PORT = {Port number}    
                                         "



2.type "npm run build" to build and install the necessary modules required.
3.Then type "npm start" to run the application in port u need.