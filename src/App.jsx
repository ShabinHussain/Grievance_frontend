import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Grievance from './pages/Grievance'
import About from './pages/About'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
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
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
        <Route path='/allgrievance' element={<AllGrievance/>} />
        <Route path='/footer' element={<Footer/>} />



        





      </Routes>
      
    </>
  )
}

export default App
