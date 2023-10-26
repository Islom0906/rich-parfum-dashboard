import {FaMapMarkerAlt} from "react-icons/fa";
import {HiOutlineInbox} from "react-icons/hi";
import {BsFillImageFill} from "react-icons/bs";
import {FiInfo} from "react-icons/fi";
import {VscFeedback} from "react-icons/vsc";
import {IoShareSocialSharp} from "react-icons/io5";
import {TiContacts} from "react-icons/ti";


const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      // {
      //   id: 'dashboard',
      //   title: 'Dashboard',
      //   messageId: 'sidebar.sample.dashboard',
      //   type: 'item',
      //   icon: <IoIosStats />,
      //   path: '/dashboard',
      // },
      {
        id: 'product',
        title: 'product',
        messageId: 'sidebar.product',
        icon: <HiOutlineInbox />,
        type: 'collapse',
        children:[
          {
            id: 'product',
            title: 'product',
            messageId: 'sidebar.sample.product',
            path: '/product',
          },
          {
            id: 'brand',
            title: 'brand',
            messageId: 'sidebar.sample.brand',
            path: '/brand',
          },
          {
            id: 'index-category',
            title: 'index-category',
            messageId: 'sidebar.sample.index-category',
            path: '/index-category',
          },
          {
            id: 'smell',
            title: 'smell',
            messageId: 'sidebar.sample.smell',
            path: '/smell',
          },
        ]
      },
      {
        id: 'bannerFirst',
        title: 'bannerFirst',
        messageId: 'sidebar.sample.bannerFirst',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/banner-first',
      },
      {
        id: 'bannerSecond',
        title: 'bannerSecond',
        messageId: 'sidebar.sample.bannerSecond',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/banner-second',
      },
      {
        id: 'map',
        title: 'map',
        messageId: 'sidebar.sample.map',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/map',
      },
      {
        id: 'about',
        title: 'about',
        messageId: 'sidebar.sample.about',
        type: 'item',
        icon: <FiInfo />,
        path: '/about',
      },
      {
        id: 'partner',
        title: 'partner',
        messageId: 'sidebar.sample.userComment',
        type: 'item',
        icon: <VscFeedback />,
        path: '/partner',
      },
      {
        id: 'social',
        title: 'social',
        messageId: 'sidebar.sample.social',
        type: 'item',
        icon: <IoShareSocialSharp />,
        path: '/social',
      },
      {
        id: 'contact',
        title: 'contact',
        messageId: 'sidebar.sample.contact',
        type: 'item',
        icon: <TiContacts />,
        path: '/contact',
      },
    ],
  },
];
export default routesConfig;
