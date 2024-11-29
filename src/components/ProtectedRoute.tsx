
import { Navigate, Outlet} from 'react-router-dom'


type Props = {}

const ProtectedRoute = (props: Props) => {

 const token = localStorage.getItem('token')
 return token ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoute