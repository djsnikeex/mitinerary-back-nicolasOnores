import "dotenv/config.js";
import "../../config/database.js";
import City from "../city.js";

let cities = [
  {
    city: "Nueva York",
    country: "Estados Unidos",
    image:
      "https://images.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg",
    
    
  },
  {
    city: "París",
    country: "Francia",
    image:
      "https://cronicasfreelancer.com/wp-content/uploads/2019/06/paris-francia-1024x683.jpg",
    
    
  },
  {
      city: "Tokio",
      country: "Japón",
      image:
      "https://i.pinimg.com/originals/f6/40/9b/f6409bd16c40e2af3d6b0480350bb096.jpg",
    
    
  },
  {
    city: "Roma",
    country: "Italia",
    image:
      "https://siparliamoinitaliano.com/wp-content/uploads/2022/02/coliseo-roma_2924b6ae_1280x720-1024x576.jpeg",
    
  },
  {
    city: "Sídney",
    country: "Australia",
    image:
      "https://a.cdn-hotels.com/gdcs/production192/d307/5fe14a1a-edf9-4773-89fe-3455afa9d0dd.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    
  },
  {
    city: "Río de Janeiro",
    country: "Brasil",
    image:
      "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
    
  },
  {
    city: "Ámsterdam",
    country: "Países Bajos",
    image:
      "https://media.staticontent.com/media/pictures/42741baf-09de-4d95-96d6-e99cf236cf62",
    
  },
  {
    city: "Hong Kong",
    country: "China",
    image:
      "https://f01d385290.clvaw-cdnwnd.com/1414255a4b90c3cc11a1090d582ee729/200000726-cc8aacc8ac/hong%20kong%20skyscrapers-carloyuen.jpg?ph=f01d385290",
    
  },
  {
    city: "Moscú",
    country: "Rusia",
    image:
      "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
    
  },
  {
    city: "El Cairo",
    country: "Egipto",
    image: "https://www.eltiempo.com/uploads/2018/01/17/5a5fcce13deb6.jpeg",
    
  },
  {
    city: "Ciudad del Cabo",
    country: "Sudáfrica",
    image:
      "https://resources.formula-e.pulselive.com/photo-resources/2023/02/20/042dd057-7157-4069-beb8-2aa3af8b21ba/Cape-Town.jpg?width=1440&height=810",
    
  },
  {
    city: "Kioto",
    country: "Japón",
    image:
      "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/japon_kioto_fushimiinaritaisha_shutterstockrf_733630336_takashi_images_shutterstock_1.jpg?itok=QG5n-zbj",
    
  },
];

City.insertMany(cities).then(() => {
        console.log("Ciudades insertadas");
    })
    .catch((error) => {
        console.log(error);
    }
);

