import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import {useDispatch, useSelector} from "react-redux"
import { auth } from './components/firebase';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { login,logout, selectUser } from './redux/userSlice';
import Login from './components/Login';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email : userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl : userAuth.photoURL,
        }))
      }else{
         dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />
       
       {!user ? ( <Login /> ) : (
          <div className='app__body'>
          <SideBar />
          <Feed />
          <Widgets />
        </div>
         
          
       )}
 
      {/* App Body */}
      
    </div>
  );
}

export default App;
