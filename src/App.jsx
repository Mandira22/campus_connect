

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx"; 
import HomePage from "./Components/HomePage.jsx"; 
import DiscoverPage from "./Components/Discover.jsx"
import CommunitySection from "./Components/Communty.jsx";
import ApplicationSection from "./Components/Sidebar/Application.jsx";
import ResumeSection from "./Components/Sidebar/Resume.jsx";
import WishlistSetion from "./Components/Sidebar/Wishlist.jsx";
import OfferLetterSection from "./Components/Sidebar/OfferLetter.jsx";
import PrepMaterialSection from "./Components/Sidebar/PrepMaterial.jsx";
import InterviewsSection from "./Components/Sidebar/Interviews.jsx";
import ResumeBuilderS from "./Components/Sidebar/ResumeBuilder.jsx";
import JobappliedS from "./Components/Sidebar/Jobapplied.jsx";


const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <>
        <HomePage /> 
      </>
    )
  },
  {
    path:"/application",
    element:(
      <>
      <Navbar />
      <ApplicationSection/>
      </>
    )
  },
   {
    path:"/wishlist",
    element:(
      <>
      <Navbar />
      <WishlistSetion/>
      </>
    )
  },
   {
    path:"/offerletters",
    element:(
      <>
      <Navbar />
      <OfferLetterSection/>     
      </>
    )
  },
   {
    path:"/prep-materials",
    element:(
      <>
      <Navbar />
      <PrepMaterialSection/>
      </>
    )
  },
   {
    path:"/interviews",
    element:(
      <>
      <Navbar />
      <InterviewsSection/>
      </>
    )
  },
   {
    path:"/resume-builder",
    element:(
      <>
      <Navbar />
      <ResumeBuilderS/>
      </>
    )
  },
   {
    path:"/resume",
    element:(
      <>
      <Navbar />
      <ResumeSection/>
      </>
    )
  },
   {
    path:"/jobs-applied",
    element:(
      <>
      <Navbar />
      <JobappliedS/>
      </>
    )
  },
  {
    path: "/discover", 
    element: (
      <>
        <Navbar />
        <DiscoverPage /> 
      </>
    ),
  },
   {
    path: "/community", 
    element: (
      <>
        <Navbar />
        <CommunitySection/>
      </>
    ),
  },
  
]);


function App() {
  return (
    
    <RouterProvider router={router} />
  );
}


export default App;