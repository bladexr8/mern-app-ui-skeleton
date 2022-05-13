
// set up API endpoint
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '';

// create a user
const create = async (user) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log('**ERROR Creating User...');
    console.log(err);
  }
}


// list users
const list = async (signal) => {
  try {
    console.log('***Requesting User List from API...');
    console.log(`${API_ENDPOINT}/api/users`);
    console.log(signal);
    let response = await fetch(`${API_ENDPOINT}/api/users`, {
      method: 'GET',
      //signal: signal
    });
    return await response.json();
  } catch (err) {
    console.log('**ERROR Listing Users...');
    console.log(err);
  }
}


// read a user profile
const read = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/api/users/${params.userId}`, {
      method: 'GET',
      //signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials.t}`
      }
    });
    return await response.json();
  } catch (err) {
    console.log('**ERROR Reading User Profile...');
    console.log(err);
  }  
}


// update a user profile
const update = async (params, credentials, user) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/api/users/${params.userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials.t}`
      },
      body: JSON.stringify(user)
    });
    return await response.json()
  } catch (err) {
    console.log('**ERROR Updating User Profile...');
    console.log(err);
  }
}


// delete a user
const remove = async (params, credentials) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/api/users/${params.userId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials.t}`
      },
    });
    return await response.json()
  } catch (err) {
    console.log('**ERROR Deleting User Profile...');
    console.log(err);
  }
}


export {
  create,
  list,
  read,
  update,
  remove
}