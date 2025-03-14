const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
// src/services/petService.js

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        return res.json();

    } catch (error) {
        console.log(error)
    }
    console.log(await index());

};
 //this function sends get req to baseURL, parses res using json()
 // and handles errors in try catch block, then returns parsed response

 const create = async (formData) => {
    try {const res = await fetch(BASE_URL, {
        // We specify that this is a 'POST' request
        method: 'POST',
        // We're sending JSON data, so we attach a Content-Type header
        // and specify that the data being sent is type 'application/json'
        headers: {
          'Content-Type': 'application/json',
        },
        // The formData, converted to JSON, is sent as the body
        // This will be received on the back-end as req.body
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };


  const update = async (formData, petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePet = async (petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };




 export {index, create, update, deletePet  };
 