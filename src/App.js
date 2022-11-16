import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from './component/Navbar'
import AuthorCard from './component/AuthorCard';
import Work from './component/Work';
import HobbiesCard from './component/HobbiesCard';
import EducattionCard from './component/EducationCard';



export default function App() {
  const[isActive, setIsActive] = useState({
    active: true,
    name: "education",
  });
  return (
  <>
   <Navbar />

    <div class='py-6'>
    <main>
      <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
           
      <AuthorCard {...{ isActive, setIsActive }} />

      {
        isActive.name ==="work" ?

        <Work /> : isActive.name === "education" ?  <EducattionCard />  :  <HobbiesCard />
      }

      </div>
    </main>
    </div>
</>
 )
}

