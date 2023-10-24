import {FaMapMarkerAlt} from "react-icons/fa";


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
        id: 'map',
        title: 'map',
        messageId: 'sidebar.sample.map',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/map',
      },
      {
        id: 'service',
        title: 'service',
        messageId: 'sidebar.sample.service',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/service',
      },
      {
        id: 'social',
        title: 'social',
        messageId: 'sidebar.sample.social',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/social',
      },
      {
        id: 'partner',
        title: 'partner',
        messageId: 'sidebar.sample.partner',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/partner',
      },
      {
        id: 'bannerFirst',
        title: 'bannerFirst',
        messageId: 'sidebar.sample.bannerFirst',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/banner-first',
      },
      {
        id: 'bannerSecond',
        title: 'bannerSecond',
        messageId: 'sidebar.sample.bannerSecond',
        type: 'item',
        icon: <FaMapMarkerAlt />,
        path: '/banner-second',
      },
      {
        id: 'product',
        title: 'product',
        messageId: 'sidebar.product',
        icon: <FaMapMarkerAlt />,
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
      }
    ],
  },
];
export default routesConfig;
