import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from '@/components/Header'
import Footer from './components/Footer'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'
import Blog from './Views/BlogPage'

import ContactPage from './Views/ContactPage'
import DonatePage from './Views/DonatePage'
import EventosPage from './Views/EventosPage'
import EventoDetails from './Views/EventoDetails'
import AboutPage from './Views/AboutPage'
import PostDetails from './Views/PostDetails'
import ProtectedRoute from './components/ProtectedRoute'


function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        
        <Route element={<ProtectedRoute/>}>
             <Route path='/profile' element={< Profile />} ></Route>
        </Route>
          <Route path='/' element={<Home/>} ></Route>

          <Route path='/doar' element={< DonatePage />} ></Route>
          <Route path='/sobre' element={< AboutPage />} ></Route>
          <Route path='/contato' element={< ContactPage />} ></Route>

          <Route path='/eventos' element={< EventosPage />} ></Route>
          <Route path='/eventos/:eventoId' element={< EventoDetails />} ></Route>

          <Route path='/blog' element={< Blog />} ></Route>
          <Route path='/blog/posts/:postId' element={< PostDetails />} ></Route>

          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/registrar' element={< Registration/>} ></Route>

          
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
