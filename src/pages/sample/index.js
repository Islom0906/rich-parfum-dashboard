import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Dashboard = React.lazy(() => import('./Dashboard'));
const Map = React.lazy(() => import('./Map'));
const MapPostEdit = React.lazy(() => import('./Map/MapPostEdit'));
const Service = React.lazy(() => import('./About-service'));
const ServicePostEdit = React.lazy(() => import('./About-service/ServicePostEdit'));
const Social = React.lazy(() => import('./Social-media'));
const SocialPostEdit = React.lazy(() => import('./Social-media/SocialPostEdit'));
const Partner = React.lazy(() => import('./Partner'));
const PartnerPostEdit = React.lazy(() => import('./Partner/PartnerPostEdit'));
const Brand = React.lazy(() => import('./Brand'));
const BrandPostEdit = React.lazy(() => import('./Brand/BrandPostEdit'));
const IndexCategory = React.lazy(() => import('./Index-Category'));
const IndexCategoryPostEdit = React.lazy(() => import('./Index-Category/IndexCategoryPostEdit'));
const Smell = React.lazy(() => import('./Smell'));
const SmellPostEdit = React.lazy(() => import('./Smell/SmellPostEdit'));
const Product = React.lazy(() => import('./Product'));
const ProductPostEdit = React.lazy(() => import('./Product/PostEditProduct'));
const BannerFirst = React.lazy(() => import('./Banner-First'));
const BannerFirstPostEdit = React.lazy(() => import('./Banner-First/BannerFirstPostEdit'));
const BannerSecond = React.lazy(() => import('./Banner-Second'));
const BannerSecondPostEdit = React.lazy(() => import('./Banner-Second/BannerSecondPostEdit'));
export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/map',
    element: <Map/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/map/add',
    element: <MapPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service',
    element: <Service/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/map/add',
    element: <ServicePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/social',
    element: <Social/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/social/add',
    element: <SocialPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partner',
    element: <Partner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partner/add',
    element: <PartnerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/brand',
    element: <Brand/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/brand/add',
    element: <BrandPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/index-category',
    element: <IndexCategory/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/index-category/add',
    element: <IndexCategoryPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/smell',
    element: <Smell/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/smell/add',
    element: <SmellPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/product',
    element: <Product/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/product/add',
    element: <ProductPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner-first',
    element: <BannerFirst/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner-first/add',
    element: <BannerFirstPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner-second',
    element: <BannerSecond/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner-second/add',
    element: <BannerSecondPostEdit/>,
  },

];
