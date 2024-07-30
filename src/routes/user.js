import TnC from "../components/Layout/TnC";
import Admin from "../pages/admin";
import Badges from "../pages/badges";
import Certi from "../pages/certificates";
import CourseOverview from "../pages/course-overview";
import LearningPath from "../pages/learning-path";
import Home from "../pages/Home";
import ViewAllCatalogs from "../pages/Home/catalog/ViewAll";
import ViewAllRecommendedLearnings from "../pages/Home/recommendedTraining/ViewAll";
import ViewAllLearnings from "../pages/Home/view-all/ViewAll";
import Payment from "../pages/payment";
import Order from "../pages/payment/order";
import ShareCart from "../pages/payment/sharecart";
import Resource from "../pages/resources/Resource";
import SignIn from "../pages/Signin";
import Solar from "../pages/solar";
import License from "../pages/license";
import TrainingAllocation from "../pages/trainingAllocation";
import CouponList from "../pages/couponList";
import Knowledge from "../pages/knowledge";
import LeaderPage from "../pages/LeaderPage"
import Api from "../pages/apitest";
import CatalogueSubscription from "../pages/catalogue-subscription";
import CatalogueCourse from "../pages/catalogue-subscription/CatalogueCourse";
import Social from "../pages/social"
import Test from "../pages/test"

const UserRoutes = [
  { path: "/", element: <SignIn />, isProtected: false },
  { path: "/dashboard", element: <Home />, isProtected: true },
  { path: "/solar", element: <Solar />, isProtected: true },
  { path: "/license/:id", element: <License />, isProtected: true },
  { path: "/courses", element: <Home />, isProtected: true },
  { path: "/resources", element: <Resource />, isProtected: true },
  { path: "/badges", element: <Badges />, isProtected: true },
  { path: "/terms", element: <TnC />, isProtected: true },
  { path: "/certificates", element: <Certi />, isProtected: true },
  { path: "/admin", element: <Admin />, isProtected: false },
  { path: "/all-learnings", element: <ViewAllLearnings />, isProtected: true },
  { path: "/knowledge", element: <Knowledge />, isProtected: true },
  { path: "/social", element: <Social />, isProtected: true },
  {
    path: "/subscription/:id",
    element: <CatalogueSubscription />,
    isProtected: true,
  },
  {
    path: "/subscription/:id/:courseId",
    element: <CatalogueCourse />,
    isProtected: true,
  },

  {
    path: "/admin-trainings",
    element: <TrainingAllocation />,
    isProtected: true,
  },
  { path: "/admin-coupons", element: <CouponList />, isProtected: true },
  {
    path: "/all-recommended-trainings",
    element: <ViewAllRecommendedLearnings />,
    isProtected: true,
  },
  {
    path: "/all-catalogs/:id",
    element: <ViewAllCatalogs />,
    isProtected: true,
  },
  {
    path: "/course-overview/:id",
    element: <CourseOverview />,
    isProtected: true,
  },
  {
    path: "/learning-path/:id",
    element: <LearningPath />,
    isProtected: true,
  },
  {
    path: "/share-cart/:id",
    element: <ShareCart />,
    isProtected: true,
  },
  {
    path: "/payment",
    element: <Payment />,
    isProtected: true,
  },
  {
    path: "/orders",
    element: <Order />,
    isProtected: true,
  },
  {
    path: "/apitest",
    element: <Api />,
    isProtected: false,
  },
  {
    path: "/leaderboard",
    element: <LeaderPage />,
    isProtected: true,
  },
  { path: "/test-page", element: <Test />, isProtected: false },
];

export default UserRoutes;
