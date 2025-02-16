import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Queries from './Pages/Queries.jsx';
import UserDashboard from './Pages/UserDashBoard.jsx';
import FileDetails from './Pages/FileDetails.jsx';
import EditProfile from './Pages/EditProfile.jsx';
import UploadPage from './Pages/UploadPAge.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from '@radix-ui/react-tooltip';
import ApiContext from './context/ApiContext.jsx';


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <h1>Error Page</h1>,
  children: [
    {
    path: "",
    element: <HomePage />
  },
    {
    path: "login",
    element: <Login />
  },
    {
    path: "signup",
    element: <Signup />
  },
    {
    path: "queries",
    element: <Queries />
  },
    {
    path: "dashboard",
    element: <UserDashboard />
  },
  {
    path: "filedetails",
    element: <FileDetails />
  },
  {
    path: "edit",
    element: <EditProfile />
  },{
    path: "uploadpage",
    element: <UploadPage />
  },
]
}])

const clientId = "488352603070-po2l46k3lh8vg35akbigojjfie5gp9lb.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <GoogleOAuthProvider clientId={clientId}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
=======
<ApiContext>
  <GoogleOAuthProvider clientId="140659399221-35qoekdg5c8m3guhglc35bvs4mja47gc.apps.googleusercontent.com">
  <RouterProvider router={router} /></GoogleOAuthProvider>

</ApiContext>
>>>>>>> ce3da2bcedafde0d47d3a07b8bf426e511871573
);
