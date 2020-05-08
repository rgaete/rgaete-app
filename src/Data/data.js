/**src/Data/data.js**/
const HEADER = "rgaete.dev";

const NAVBAR_DATA = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "#blog", label: "Blog" },
    { id: 3, url: "#about", label: "About" }
];
const BANNER_DATA = {
    HEADING: "Rgaete's Home"
};
const BLOG_DATA = {
    HEADING: "Acá irá mi blog, en algún momento",
    BLOG_LIST: [
        {
            LABEL: "Desarrollador Backend",
            DESCRIPTION:
                "Muchos años desarrollando en Java con Spring, siendo el camnino que elegí por mi problema con el Diseño (Para muestra un boton, esta página).",
            URL: "images/service1.png"
        },
        {
            LABEL: "Caminando de la mano de la agilidad",
            DESCRIPTION:
                "Bastantes años siguiendo los valores ágiles del manifiesto. Por que sin duda creo que nacieron mejores formas de desarrollar software.",
            URL: "images/service2.png"
        },
        {
            LABEL: "Charlista amateur",
            DESCRIPTION:
                "Una vez que das tu primera charla cuesta mucho dar pie atrás !! Test-Driven Development, Mutation Testing, Desarrollo Ágil.",
            URL: "images/service3.png"
        }
    ]
};

const SOCIAL_DATA = {
    HEADING: "Redes sociales",
    SOCIAL_LIST: [
        {
            IMAGE_URL: "images/facebook-icon.png",
            LINK: "",
            NAME: "Facebook"

        },
        {
            IMAGE_URL: "images/instagram-icon.png",
            LINK: "",
            NAME: "Instagram"
        }, 
        {
            IMAGE_URL: "images/twitter-icon.png",
            LINK: "",
            NAME: "Twitter"
        }, 
        {
            IMAGE_URL: "images/linkedin-icon.png",
            LINK: "",
            NAME: "LinkedIn"
        }
    ]
};

const ABOUT_DATA = {
    HEADING: "Ricardo Gaete",
    TITLE: "Desarrollador",
    IMAGE_URL: "images/network.png",
    WHY_CHOOSE_US_LIST: [
        "Apasionado por la agilidad.",
        "Siempre buscando cosas nuevas para aprender y enseñar.",
        "Comenzando el camino por el lado de la Data.",
        "Padre de Maite y Fernanda.",
        "Futbolero menos que amateur, pero futbolero."
    ]
};

const FOOTER_DATA = {
    DESCRIPTION:
        "Esta página es para ir probando cosas nuevas y dejando algún tipo de respaldo de lo que voy aprendiendo.",
    CONTACT_DETAILS: {
        HEADING: "Contact me",
        EMAIL: "ricardo.gaete@gmail.com"
    },
    SUBSCRIBE_NEWSLETTER: "Subscribe newsletter (Algun día)",
    SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
    HEADER,
    NAVBAR_DATA,
    BANNER_DATA,
    BLOG_DATA,
    SOCIAL_DATA,
    ABOUT_DATA,
    FOOTER_DATA
};
export default MOCK_DATA;