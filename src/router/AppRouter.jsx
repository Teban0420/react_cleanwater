import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Home } from '../components/home/Home';
import { Admin } from '../components/admin/Admin';
import { ApiProvider } from '../context/apiContext';


export const AppRouter = () => {

    return(
        <>
            <ApiProvider>
                <Routes>
                    <Route  path='/' element={<Home />}/>
                    <Route  path='login' element={<Login />}/>
                    <Route  path='admin' element={<Admin />}/>           
                </Routes>
            </ApiProvider>
        </>
    )
}