import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar'
import AuthorCard from './component/AuthorCard';
import Work from './component/Work';
import HobbiesCard from './component/HobbiesCard';
import EducattionCard from './component/EducationCard';


export default function App() {
  return (
  <>
   <Navbar />
   <AuthorCard />
   <Work />
   <EducattionCard />
   <HobbiesCard />
</>
 )
}

