import mongoose from 'mongoose';


let uri_link = process.env.MONGO

mongoose.connect(uri_link).then
(
    () => {
        console.log("Conexión exitosa");
    }
).catch
(
    (error) => {
        console.log("Error de conexión", error);
    }
);