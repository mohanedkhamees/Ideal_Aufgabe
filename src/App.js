import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form';
// import Stack from 'react-bootstrap/Stack';
import { Button, Form, Stack, FormSelect } from 'react-bootstrap';
import './App.css';
import ProfilCard from './components/ProfilCard';
import { Nav } from './components/Nav';
// const persons = require('./myOutputFile.json');


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState();
  const [foundPerson, setFoundPerson] = useState(null);


  useEffect(() => {

    if (!data) {
      fetch('http://localhost:4000/users')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data); // Set the data in the state
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        })

    }
  },);


  // console.log("persons", persons);
  // console.log("data", data);
  const findPersonByPlz = (inputSearch) => {
    for (const person of data) {
      const plzRanges = person.plzRange.split(';');
      for (const plzRange of plzRanges) {
        const [minPlz, maxPlz] = plzRange.split('-').map(Number);
        if (minPlz <= inputSearch && inputSearch <= maxPlz) {
          return person;
          // return [person];
        }
      }
    }
    return null;
  };

  const findPersonByName = (searchName) => {
    return data.find(person => person.name.toLowerCase() === searchName.toLowerCase() || person.vorname.toLowerCase() === searchName.toLowerCase());
  };

  // const findPersonByName3 = (searchName) => {
  //   if (searchQuery) {
  //     return data.filter(person => (person.name.toLowerCase().includes(searchName.toLowerCase()) || person.vorname.toLowerCase().includes(searchName.toLowerCase()) || person.plz.toLowerCase().includes(searchName.toLowerCase())))
  //   }

  // }

  // const findPersonByName2 = (searchName) => {
  //   if (searchQuery) {
  //     return data.find(person => (person.name.toLowerCase().includes(searchName.toLowerCase()) || person.vorname.toLowerCase().includes(searchName.toLowerCase()) || person.plz.toLowerCase().includes(searchName.toLowerCase())))
  //   }

  // }




  const handleSearchForPerson = () => {
    // Try to parse the input as a number (PLZ)
    const inputSearch = parseInt(searchQuery, 10);

    if (!isNaN(inputSearch)) {
      const person = findPersonByPlz(inputSearch);
      setFoundPerson(person);
    } else {
      // If not a number, search by name
      const person = findPersonByName(searchQuery);
      setFoundPerson(person);
    }
  };

  const handleAutoDetectLocation = () => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then((data) => {
        const postalCode = data.postal
        if (postalCode) {
          setSearchQuery(postalCode);
        }
        else {
          console.error('Error getting reverse geocoding data.')
        }
      })
  };
  return (
    <>
      <div className='app'>
        <div className="nav">
          <Nav />
        </div>
        <div className='container-app'>
          <div className='container-app1'>
            <div className='container-card'>
              <div className='card2'>
                <div>
                  <h3 id='app-title' >Suche nach Ansprechpartner/in </h3>
                </div>
                <Stack gap={3}>
                  <Form.Control className="me-auto" placeholder="Enter PLZ or Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  <p id="absatz">or</p>
                  <FormSelect class="form-select" aria-label="Default select example" onChange={(e) => setSearchQuery(e.target.value)}>
                    <option value={''}>Wählen Ihre Stadt</option>
                    {data ? data.map(person => {
                      return (
                        <option key={person.id} value={person.plz}>{person.ort}</option>
                      )
                    }) : null}
                  </FormSelect>
                  <Button className="btn-login1" type='submit' onClick={handleSearchForPerson} variant="secondary">Search</Button>
                  <Button className="btn-login1" onClick={handleAutoDetectLocation} variant="secondary">Detect PLZ</Button>
                </Stack>
              </div>
              <div>
                {foundPerson ? <ProfilCard data={foundPerson} />
                  : (
                    <h6 id="card-footer">No person found for the entered PLZ or name.</h6>
                  )}</div>

            </div>
          </div>
        </div>
      </div >

    </>

  )
}
export default App
