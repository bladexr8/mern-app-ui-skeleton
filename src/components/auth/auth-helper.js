// auth helper functions

import { signout } from "./api-auth";

const auth = {

  /**
  * save JWT on a successful sign in
  * Alternatively, you can use localStorage instead 
  * of sessionStorage to store the JWT credentials. 
  * With sessionStorage, the user auth state will 
  * only be remembered in the current window tab. 
  * With localStorage, the user auth state 
  * will be remembered across tabs in a browser.
  */
  authenticate(jwt, cb) {
    // ensure code is running in a browser
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    }
    cb();
  },

  // retrieve credentials to check if user
  // is signed in
  isAuthenticated() {
    if (typeof window == 'undefined') {
      return false
    }

    if (sessionStorage.getItem('jwt')) {
      return JSON.parse(sessionStorage.getItem('jwt'))
    } else {
      return false
    }
  },

  // clear credentials
  clearJWT(cb) {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('jwt')
      cb()
      signout().then((data) => {
        // clear cookie if used
        document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      })
    }
  }


  
}

export default auth;

