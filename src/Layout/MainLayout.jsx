import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


export const valueContext = createContext()
const MainLayout = () => {
    const [userN,setUserN] = useState(null)
    const navigate = useNavigate()


// for Google login
 const provider = new GoogleAuthProvider
const googleLogin = () =>{
   signInWithPopup(auth,provider)
   .then(user => {
    Swal.fire({
                       title: 'Success!',
                       text: 'You have completed Google Login successfully.',
                       icon: 'success',
                       confirmButtonText: 'OK'
                     });
    navigate("/")                 
  })
  .catch(error => {
      alert(error);
  })
}


// for signup...........................................................
 
const handleSignup = (email,password,name,photo) => {
    createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            handleProfile({
                displayName: name,
                 photoURL: photo
            })
           Swal.fire({
            title: 'Success!',
            text: 'You have completed register successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          navigate("/")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorCode);
          });
 }


//  for Login page

const handleLogin = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       Swal.fire({
                   title: 'Success!',
                   text: 'You have completed Log in successfully.',
                   icon: 'success',
                   confirmButtonText: 'OK'
                 });
        navigate("/")         
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage);
       console.log(errorCode);
     });
}

// for save user state ................................................
useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUserN(currentUser)
            // console.log(currentUser);
            // if (currentUser) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = currentUser.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }
          });
    },[])

//   for logout ....................................................

const handleLogout = () => {
    signOut(auth).then(() => {
        Swal.fire({
                                       title: 'warning!',
                                       text: 'You have completed Log out successfully.',
                                       icon: 'warning',
                                       confirmButtonText: 'OK'
                                     });
      }).catch((error) => {
        console.log(error);
      });
      navigate("/")  
 }

    // profile update .............................................................

    const handleProfile = (profileData) => {
        updateProfile(auth.currentUser,profileData ).then(() => {
          }).catch((error) => {
            console.log(error);
          });
          
    }

    // for theme..........................................................
        const [theme , setTheme] = useState(false);
        const handleTheme = () => {
            setTheme(!theme)
        }

const contextValues = {
    googleLogin,
    handleSignup,
    handleLogin,
    userN,
    handleLogout,
    handleTheme,
    theme
}


const [menu ,setMenu] = useState(false)
      const handleMenu = () => { 
        setMenu(!menu)
      }

console.log(userN);
    return (
        <div>
            <valueContext.Provider value={contextValues}>
              <div className='fixed left-0 right-0 z-20'>
                <Navbar handleMenu={handleMenu}></Navbar>
              </div>
              <div className={ menu ? "fixed top-[70px] right-0 z-20" : "hidden"}>
               <Menu></Menu>
             </div>
              <div className='min-h-[calc(100vh-240px)]  pt-[70px] bg-[#EFEFEF]'>
                <Outlet></Outlet>
              </div>
              <div>
                <Footer></Footer>
            </div>
            </valueContext.Provider>
            
        </div>
    );
};

export default MainLayout;