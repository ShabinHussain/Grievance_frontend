import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Grievance from './pages/Grievance'
import About from './pages/About'
import Header from './components/Header'
import Sample from './pages/Sample'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Sample1 from './pages/sample1'
import EditProfile from './pages/EditProfile'
import AllGrievance from './pages/AllGrievance'
import Footer from './components/Footer'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/grievance' element={<Grievance />} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/sample' element={<Sample/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/sample1' element={<Sample1/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
        <Route path='/allgrievance' element={<AllGrievance/>} />
        <Route path='/footer' element={<Footer/>} />



        





      </Routes>
      
    </>
  )
}

export default App
