import GenerateGUID from "../guid";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import photo1 from "./img/1.jpg";
import photo2 from "./img/2.jpg";
import photo3 from "./img/3.jpg";
import photo4 from "./img/4.jpg";
import photo5 from "./img/5.jpg";
import photo6 from "./img/6.jpg";
import photo7 from "./img/7.jpg";
import photo8 from "./img/8.jpg";

const properties = [
    {
        "id": GenerateGUID(false),
        "title": "Adventure Camping",
        "subtitle": "Our mission is to connect people to the outdoors and each other. That’s why our 500+ campgrounds across North America make it easy to enjoy the beauty of nature and share adventures with family and friends.",
        "content": [
            {
                "id": GenerateGUID(),
                "text": "Natural Campsites",
                "img": logo1
            },
            {
                "id": GenerateGUID(),
                "text": "Beautiful Mountain Scenery",
                "img": logo2
            },
            {
                "id": GenerateGUID(),
                "text": "Naturalist Programs",
                "img": logo3
            },
            {
                "id": GenerateGUID(),
                "text": "Adventure Fishing",
                "img": logo4
            },
        ]
    },
    {
        "id": GenerateGUID(false),
        "title": "Natural Campsites",
        "content": [
            {
                "id": GenerateGUID(),
                "img": house1,
                "cost": "100",
                "title": "Hobbit house",
                "desc": "Who has not dreamed of a tree house as a child?"
            },
            {
                "img": house2,
                "cost": "120",
                "title": "Treehouse",
                "desc": "The house on the ropes will give you the sensation of levitation"
            },
            {
                "img": house3,
                "cost": "180",
                "title": "Tree cottages",
                "desc": "Whole tree cottage with great sunset views"
            },
        ]
    },
    {
        "id": GenerateGUID(false),
        "title": "Olins Explore",
        "content": [
            {
                "id": GenerateGUID(),
                "img": photo1
            },
            {
                "id": GenerateGUID(),
                "img": photo2
            },
            {
                "id": GenerateGUID(),
                "img": photo3
            },
            {
                "id": GenerateGUID(),
                "img": photo4
            },
            {
                "id": GenerateGUID(),
                "img": photo5
            },
            {
                "id": GenerateGUID(),
                "img": photo6
            },
            {
                "id": GenerateGUID(),
                "img": photo7
            },
            {
                "id": GenerateGUID(),
                "img": photo8
            },
        ]
    }
]


export default properties;