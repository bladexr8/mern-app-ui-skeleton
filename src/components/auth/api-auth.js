
// set up API endpoint
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '';


// sign in a user
const signin = async (user) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/auth/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log('**ERROR Logging In User...');
    console.log(err);
  }
}


// sign out a user
const signout = async () => {
  try {
    let response = await fetch(`${API_ENDPOINT}/auth/signin`, {
      method: 'GET'
    });
    return await response.json()
  } catch (err) {
    console.log('**ERROR Logging Out User...');
    console.log(err);
  }
}


export {
  signin,
  signout
}