import wishlist from "../../images/icons/Wishlist.svg";
import cart from "../../images/icons/Cart1.svg";
import {v4 as uuidv4} from "uuid";
import arrowR from "../../images/icons/arrow-right.svg";
import send from "../../images/icons/icon-send.svg";
import Quar from '../../images/icons/QrCode.svg';
import androidApp from '../../images/icons/androidApp.svg';
import iosApp from '../../images/icons/AppStore.svg';
import facebook from '../../images/icons/Icon-Facebook.svg';
import twitter from '../../images/icons/Icon-Twitter.svg';
import instagram from '../../images/icons/Icon-Instagram.svg';
import In from '../../images/icons/Icon-Linkedin.svg';
import apple from "../../images/icons/apple.svg";
import linkArrow from '../../images/icons/icon-ArrowR.svg';
import IphoneImage from '../../images/iphone.png';
import Iphone15 from '../../images/iphone15.png';
import Iphone16 from '../../images/iphone16.png';
import gamepad from "../../images/flash_sales/gamepad.png";
import keyboard from "../../images/flash_sales/keyboard.png"
import screen from "../../images/flash_sales/screen.png"
import chair from "../../images/flash_sales/chair.png"
import favorite from "../../images/icons/heart.svg";
import view from "../../images/icons/QuickView.svg";
import rating from "../../images/icons/Fivestar.svg";
import phone from "../../images/icons/phone.svg";
import comp from "../../images/icons/computer.svg";
import watch from "../../images/icons/smartWatch.svg";
import camera from "../../images/icons/camera.svg";
import headPhone from "../../images/icons/headphones.svg";
import gaming from "../../images/icons/gaming.svg";
import gpu from "../../images/flash_sales/gpu.png";
import bag from "../../images/flash_sales/bag.png";
import table from "../../images/flash_sales/table.png";
import notebook from "../../images/flash_sales/notebook.png";
import car from "../../images/flash_sales/car.png";
import sneakers from "../../images/flash_sales/sneakers.png";
import ps5 from "../../images/flash_sales/ps5.png";
import speakers from "../../images/flash_sales/speakers.png";
import woman from "../../images/flash_sales/woman.png";
import perfum from "../../images/flash_sales/perfume.png";
import deliver from "../../images/icons/icondelivery.svg";
import headphone from "../../images/icons/headphones.svg";
import guard from "../../images/icons/guard.svg"
import womans from "../../images/about/twoGirls.png";
import feature1 from "../../images/icons/huina.svg";
import feature2 from "../../images/icons/DollarIcon.svg";
import feature3 from "../../images/icons/ShoppingIcon.svg";
import feature4 from "../../images/icons/moneyIcon.svg";
import man1 from "../../images/about/man1.png";
import woman1 from "../../images/about/woman1.png";
import man2 from "../../images/about/man2.png";




export type THeader = {
    id: number,
    name: string,
    path: string,
}

export type TSupprot={
    id:string | number;
    icon:string;
    title:string;
    description:string;
}

export type TAbout={
    title:string,
    description:string[],
    img:string,
}

export type TAboutFeatures={
    id:string | number,
    icon:string,
    name:string,
    text:string,
}

export type AboustSlide={
    id:number | string;
    img:string;
    name:string;
    describe:string;
    socials:Tsocials[];
}

export const AboutSlide:AboustSlide[]=[{
    id:uuidv4(),
    img:man1,
    name:'Tom Cruise',
    describe:'Founder & Chairman',
    socials:[{
        id:uuidv4(),
        icon:twitter,
        path:'https://twitter.com/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'https://www.instagram.com/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    },]
},{
    id:uuidv4(),
    img:man2,
    name:'Tom Hardey',
    describe:'Founder & Chairman',
    socials:[{
        id:uuidv4(),
        icon:twitter,
        path:'https://twitter.com/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'https://www.instagram.com/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    },]
},{
    id:uuidv4(),
    img:woman1,
    name:'Anna Clain',
    describe:'Founder & Chairman',
    socials:[{
        id:uuidv4(),
        icon:twitter,
        path:'https://twitter.com/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'https://www.instagram.com/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    },]
},{
    id:uuidv4(),
    img:man2,
    name:'Will Smith',
    describe:'Product Designer',
    socials:[{
        id:uuidv4(),
        icon:twitter,
        path:'https://twitter.com/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'https://www.instagram.com/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    },]
},{
    id:uuidv4(),
    img:woman1,
    name:'Emma Watson',
    describe:'Managing Director',
    socials:[{
        id:uuidv4(),
        icon:twitter,
        path:'https://twitter.com/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'https://www.instagram.com/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    },]
},]

export const AboutFeaturesContent:TAboutFeatures[]=[{
    id:uuidv4(),
    icon:feature1,
    name:'10.5k',
    text:'Sallers active our site',
},{
    id:uuidv4(),
    icon:feature2,
    name:'33k',
    text:'Mopnthly Produduct Sale',
},{
    id:uuidv4(),
    icon:feature3,
    name:'45.5k',
    text:'Customer active in our site',
},{
    id:uuidv4(),
    icon:feature4,
    name:'25k',
    text:'Anual gross sale in our site',
},]

export const AboutContent:TAbout={
    title:'Our Story',
    description:['Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. ', 'Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.'],
    img:womans,
}

export const SupportList:TSupprot[]=[{
    id:uuidv4(),
    icon:deliver,
    title:'FREE AND FAST DELIVERY',
    description:'Free delivery for all orders over $140'
},{
    id:uuidv4(),
    icon:headphone,
    title:'24/7 CUSTOMER SERVICE',
    description:'Friendly 24/7 customer support'
},{
    id:uuidv4(),
    icon:guard,
    title:'MONEY BACK GUARANTEE',
    description:'We reurn money within 30 dayss'
},]


type TAddData= {
    id: number | string,
    isFixed?: boolean,
    icon: string
}

export type TNewArrival={
    id:string | number,
    img:string,
    name:string,
    text:string,
    linkName:string,
    linkPath:string,
}

export const NewArrivalList: TNewArrival[] = [{
    id:uuidv4(),
    img:ps5,
    name:"PlayStation 5",
    text:'Black and White version of the PS5 coming out on sale.',
    linkName:'Shop Now',
    linkPath:'/',
},{
    id:uuidv4(),
    img:woman,
    name:"Women’s Collections",
    text:'Featured woman collections that give you another vibe.',
    linkName:'Shop Now',
    linkPath:'/',
},{
    id:uuidv4(),
    img:speakers,
    name:"Speakers",
    text:'Amazon wireless speakers',
    linkName:'Shop Now',
    linkPath:'/',
},{
    id:uuidv4(),
    img:perfum,
    name:"Perfume",
    text:'GUCCI INTENSE OUD EDP',
    linkName:'Shop Now',
    linkPath:'/',
},
]

export type Slide= {
  id: number | string;
  content?: React.ReactNode;
}

export type SwiperComponentProps= {
  slides: Slide[];
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  className?: string;
}


export type TSlide= {
  id?: string;
  icon: string;
  text: string;
  title: string;
  image: string;
  linkPath: string;
  link: string;
  linkIcon: string;
}


export const slides: TSlide[] = [{
    id:uuidv4(),
    icon: apple,
    text: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: IphoneImage,
    linkPath: "https://apple.com",
    link: "Shop Now",
    linkIcon: linkArrow,    
},
{
    id:uuidv4(),
    icon: apple,
    text: "iPhone 15 Series",
    title: "Up to 10% off Voucher",
    image: Iphone15,
    linkPath: "https://apple.com",
    link: "Shop Now",
    linkIcon: linkArrow,    
},
{
    id:uuidv4(),
    icon: apple,
    text: "iPhone 16 Series",
    title: "Up to 10% off Voucher",
    image: Iphone16,
    linkPath: "https://apple.com",
    link: "Shop Now",
    linkIcon: linkArrow,    
},
{
    id:uuidv4(),
    icon: apple,
    text: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: IphoneImage,
    linkPath: "https://apple.com",
    link: "Shop Now",
    linkIcon: linkArrow,    
},
{
    id:uuidv4(),
    icon: apple,
    text: "iPhone 16 Series",
    title: "Up to 10% off Voucher",
    image: Iphone16,
    linkPath: "https://apple.com",
    link: "Shop Now",
    linkIcon: linkArrow,    
},
]


export const HeaderOptions: TAddData[] = [{
    id: uuidv4(),
    icon: wishlist,
},{
    id:uuidv4(),
    icon: cart,
}]


export const dataHeader: THeader[] = [{
    id: 1,
    name: "Home",
    path: "/"
},{
    id: 2,
    name: "Contact",
    path: "/contact"
},{
    id: 3,
    name: "About",
    path: "/about"
},{
    id: 4,
    name:"Sign up",
    path: "/sign up",
},
]

export type TCategpry={
    id: number | string,
    name: string,
    path: string,
    icon?:string,
}


export const CategoryList:TCategpry[]=[{
    id: uuidv4(),
    name: "Woman’s Fashion",
    path: "/Woman’sFashion",
    icon:arrowR,
},
{
    id: uuidv4(),
    name: "Men’s Fashion",
    path: "/Men’sFashion",
    icon:arrowR,
},
{
    id: uuidv4(),
    name: "Electronics",
    path: "/Electronics"
},
{
    id: uuidv4(),
    name: "Home & Lifestyle",
    path: "/Home&Lifestyle"
},
{
    id: uuidv4(),
    name: "Medicine",
    path: "/Medicine"
},
{
    id: uuidv4(),
    name: "Sports & Outdoor",
    path: "/Sports&Outdoor"
},
{
    id: uuidv4(),
    name: "Baby’s & Toys",
    path: "/Baby’s&Toys"
},
{
    id: uuidv4(),
    name: "Groceries & Pets",
    path: "/Groceries&Pets"
},
{
    id: uuidv4(),
    name: "Health & Beauty",
    path: "/Health&Beauty"
},
]

export type TFooterName={
    id: number | string,
    name: string | string[],
    path?: string | string[],
}

export type Tsocials={
    id: number | string,
    icon: string,
    path: string
}

export type TPlatform={
    id: number | string,
    icon: string,
    path: string
}

export type TFooter<T, Y, N>={
    id:number | string,
    title:string,
    subtitle?:string,
    text?:T,
    icon?:string,
    Quar?:string,
    downloadText?:string,
    PlatformDownload?:N[]
    socials?:Y[]
}

export type TBrowseCategory={
    id: number | string,
    icon: string,
    name: string,
}

export const BrowseCategoryData: TBrowseCategory[] = [{
    id: uuidv4(),
    icon: phone,
    name: "Phones",
},
{
    id: uuidv4(),
    icon: comp,
    name: "Computers",
},
{
    id: uuidv4(),
    icon: watch,
    name: "SmartWatch",
},
{
    id: uuidv4(),
    icon: camera,
    name: "Camera",
},
{
    id: uuidv4(),
    icon: headPhone,
    name: "HeadPhones",
},
{
    id: uuidv4(),
    icon: gaming,
    name: "Gaming",
}]


export const SellCategory: TBrowseCategory[] = [{
    id: uuidv4(),
    icon: phone,
    name: "Phones",
},
{
    id: uuidv4(),
    icon: comp,
    name: "Computers",
},
{
    id: uuidv4(),
    icon: watch,
    name: "SmartWatch",
},
{
    id: uuidv4(),
    icon: camera,
    name: "Camera",
},
{
    id: uuidv4(),
    icon: headPhone,
    name: "HeadPhones",
},
{
    id: uuidv4(),
    icon: gaming,
    name: "Gaming",
}]


export type TProduct={
    id: number | string,
    saleImage: string,
    isSale?:boolean,
    saleText: string,
    newProduct?:string,
    isNew?:boolean,
    favoriteIcon: string,
    viewedIcon: string,
    isFavorite: boolean,
    isViewed: boolean,
    salePrice: string | number,
    salesName: string,
    saleFullPrice: string | number,
    saleRating: string,
    reviews:number | string,
    productColor:string,
    productCategory:string,
}

export type TOptionProduct=Partial<TProduct>

export const FLashSales:TOptionProduct[]=[{
    id:uuidv4(),
    saleImage:gamepad,
    saleText:'-40%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:keyboard,
    saleText:'-35%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:299,
    salesName:"AK-900 Wired Keyboard",
    saleFullPrice:1160,
    saleRating:rating,
    reviews:75
},{
    id:uuidv4(),
    saleImage:screen,
    saleText:'-30%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:339,
    salesName:"IPS LCD Gaming Monitor",
    saleFullPrice:560,
    saleRating:rating,
    reviews:123
},{
    id:uuidv4(),
    saleImage:table,
    saleText:'-25%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"Small BookSelf",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:gpu,
    saleText:'-40%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:gamepad,
    saleText:'-47%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:keyboard,
    saleText:'-15%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:299,
    salesName:"AK-900 Wired Keyboard",
    saleFullPrice:1160,
    saleRating:rating,
    reviews:75
},{
    id:uuidv4(),
    saleImage:bag,
    saleText:'-10%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:339,
    salesName:"Gucci duffle bag",
    saleFullPrice:560,
    saleRating:rating,
    reviews:123
},{
    id:uuidv4(),
    saleImage:gpu,
    saleText:'-49%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:gamepad,
    saleText:'-40%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},
{
    id:uuidv4(),
    saleImage:bag,
    saleText:'-10%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:339,
    salesName:"Gucci duffle bag",
    saleFullPrice:560,
    saleRating:rating,
    reviews:123
},{
    id:uuidv4(),
    saleImage:car,
    saleText:'-49%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:sneakers,
    saleText:'-35%',
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:car,
    saleText:'-49%',
    favoriteIcon:favorite,
    isNew:true,
    newProduct:'New',
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:notebook,
    saleText:'-35%',
    newProduct:'New',
    isNew:true,
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:car,
    isSale:false,
    favoriteIcon:favorite,
    isNew:true,
    newProduct:'New',
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:chair,
    isNew:false,
    isSale:false,
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:car,
    saleText:'-49%',
    favoriteIcon:favorite,
    isNew:true,
    newProduct:'New',
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:notebook,
    isSale:false,
    newProduct:'New',
    isNew:true,
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:160,
    saleRating:rating,
    reviews:88
},{
    id:uuidv4(),
    saleImage:camera,
    isSale:false,
    favoriteIcon:favorite,
    isNew:true,
    newProduct:'New',
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:89
},{
    id:uuidv4(),
    saleImage:table,
    isNew:false,
    isSale:false,
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:124,
    saleRating:rating,
    reviews:81
},{
    id:uuidv4(),
    saleImage:gamepad,
    isSale:false,
    favoriteIcon:favorite,
    isNew:false,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:231,
    salesName:"RGB liquid GPU Cooler",
    saleFullPrice:443,
    saleRating:rating,
    reviews:34
},{
    id:uuidv4(),
    saleImage:sneakers,
    isNew:false,
    isSale:false,
    favoriteIcon:favorite,
    viewedIcon:view,
    isFavorite: false,
    isViewed: false,
    salePrice:199,
    salesName:"HAVIT HV-G92 Gamepad",
    saleFullPrice:345,
    saleRating:rating,
    reviews:55
},]


export const FooterData:TFooter<TFooterName, Tsocials, TPlatform>[]=[{
    id:uuidv4(),
    title:'Exclusive',
    subtitle:'Subscribe',
    text:{
        id:uuidv4(),
        name:'Get 10% off your first order',
    },
    icon:send,
},{
    id:uuidv4(),
    title:'Support',
    text:{
        id:uuidv4(),
        name:['111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.','exclusive@gmail.com','+88015-88888-9999'],
    },
},{
    id:uuidv4(),
    title:'Account',
    text:{
        id:uuidv4(),
        name:['My Account','Login / Register','Cart','Wishlist','Shop'],
        path:['/my-account','/login','/cart','/wishlist','/shop'],
    },
},{
    id:uuidv4(),
    title:'Quick Link',
    text:{
        id:uuidv4(),
        name:['Privacy Policy','Terms Of Use','FAQ','Contact'],
        path:['/privacypolicy','/terms','/faq','/contact'],
    },
},{
    id:uuidv4(),
    title:'Download App',
    // name:'Save $3 with App New User Only',
    Quar:Quar,
    downloadText:'Save $3 with App New User Only',
    PlatformDownload:[{
        id:uuidv4(),
        icon:androidApp,
        path:"/",
    },
    {
        id:uuidv4(),
        icon:iosApp,
        path:"/",
    }],
    socials:[{
        id:uuidv4(),
        icon:facebook,
        path:'/',
    },{
        id:uuidv4(),
        icon:twitter,
        path:'/',
    },{
        id:uuidv4(),
        icon:instagram,
        path:'/',
    },{
        id:uuidv4(),
        icon:In,
        path:'/',
    }]
},]