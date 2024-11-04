'use client';

import Signin from "./(pages)/auth/signIn/page";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
   <>
     <div>
      <Signin/>
    </div>
    <ToastContainer />
   </>
  )
}

export default Main
