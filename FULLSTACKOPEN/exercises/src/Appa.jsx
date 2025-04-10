
import Notes from './componenets/names'


import { useState, useEffect } from 'react'
// import axios from 'axios';
import services from './componenets/services'


const Appa = () => {



  const [persons, setPersons] = useState([]) 

  useEffect(() => {
  services.getAll().then(initialPersons => setPersons(initialPersons)).catch(error => console.error("Error fetching persons:", error));
  }, []);



  const [newName, setNewName] = useState('')
  const [newNumber, setnewnumber] = useState('')
  const [errorMessage, setErrorMessage] = useState("");

  // const[newsearch, setnewsearch] = useState('');
  const[findedperson, setfindedperson] = useState([]);

//   const handlenewsearch=(event)=>{
//     console.log(event.target.value)
//     setnewsearch(event.target.value);
    
// const persontoshow=persons.filter(persons => persons.name.toLowerCase().includes(newsearch.toLowerCase()));

// if(persontoshow){
//   const newPersonString = `${persontoshow.name} - ${persontoshow.number}`;
// if(newPersonString!==findedperson){      setfindedperson(newPersonString);}}else{if(findedperson!=="") {setfindedperson("")}}};







const handlenewsearch = (event) => {
  const searchValue = event.target.value.trim().toLowerCase();
  // setnewsearch(searchValue);

  // Find the first matching person
  const matchedPerson = persons.filter(person => 
    person.name.toLowerCase().includes(searchValue)
  );

  // Update findedperson state with the matched person object
  setfindedperson(matchedPerson.length ? matchedPerson : []);

};





const handleNumberChange=(event)=>{
    console.log(event.target.value)
    setnewnumber(event.target.value);
}

  const handleNameChange = (event) => {    console.log(event.target.value);setNewName(event.target.value) 
    console.log(newName);
   }

  //  const search=function(){
  //   setfindedperson(`${persontoshow.name} ${persontoshow.number}`)
  //  }

   

  const addPerson = (event) => {
      event.preventDefault();
      console.log('button clicked', event.target)
      const personobject={
        name: newName,
        important: Math.random() < 0.5,
        id: crypto.randomUUID() ,
        number: newNumber
      }

      const existingPerson = persons.find(person => person.name === newName);
      //    Prevent adding a duplicate person to the phonebook
    //   if (!newName.trim() || persons.some(person => person.name === personobject.name)) {
    //     alert(!newName.trim() ? "Name cannot be empty!" : `${newName} is already in the phonebook!`);
    //     return
        
    //   }

    if (existingPerson) {
      // Confirm before updating
      if (window.confirm(`${newName} is already in the phonebook. Do you want to update the number?`)) {
        services.update(existingPerson.id, personobject)
          .then(updatedPerson => {
            setPersons(persons.map(person => 
              person.id === existingPerson.id ? updatedPerson : person
            ));
            setNewName('');
            setnewnumber('');
            setErrorMessage('');
          })
          .catch(error => console.error("Error updating person:", error));
      }
    }

    else if (!newName.trim() || !newNumber.trim() || persons.some(person => person.name === personobject.name)) {
        setErrorMessage(!newName.trim() 
            ? "Name cannot be empty!" 
            : !newNumber.trim() 
            ? "Number cannot be empty!" 
            : `${newName} is already in the phonebook!`);
        return;
    }
    else{
    services.create(personobject)
    .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    .catch(error => console.error("Error adding person:", error));
   // Update state with new person from the DB
      setNewName('');
      setnewnumber('');
      setErrorMessage('');
      

}};





// const remove=(idno)=>{
//   const index = persons.filter(person=>person.id!==idno)
//   setPersons(index);
// }
const remove = (idno) => {
  if (window.confirm("Are you sure you want to delete this contact?")) {
    services.deleteperson(idno)
      .then(() => setPersons(persons.filter(person => person.id !== idno)))
      .catch(error => console.error("Error deleting person:", error));
  }
};



    const [showAll, setShowAll] = useState(true)

   

    const namestoshow=showAll?persons:persons.filter(persons=>persons.important)

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage && <p className="Error">{errorMessage}</p>}
      <div> Find the person
        <input type="text"  onChange={handlenewsearch}
        // value={newsearch}
        placeholder='search by name..'/>
        
        {findedperson.length >= 0 ? (
  <ul>
    {findedperson.map(person => (
      <li key={person.id}>
        <strong>{person.name}</strong> - {person.number}
      </li>
    ))}
  </ul>
) : (
  <p>No matching contacts</p>
)}

        {/* {findedperson && (<p>{findedperson.name }{findedperson.number}</p>)} */}
        </div>

      <form onSubmit={addPerson}>
        <div className='name'>
          name: <input 
          placeholder="Enter a name"
          value={newName}
          onChange={handleNameChange}/>
           
        <div className='name'>number: <input 
  type="text" 
  value={newNumber} 
  onChange={handleNumberChange}
  inputMode="numeric" 
  pattern="[0-9]*" 
  placeholder="Enter a number"
/>
</div>
        </div>
        <div>
          <button className='Add' type="submit"
          >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <button>Show Names</button>
      <button onClick={() => 
        setShowAll(!showAll)}>Show All Names</button>
     
      <ul>
      {namestoshow.map((persons)=>(
        <Notes name={persons.name} key={persons.id} number={persons.number} delete={()=>remove(persons.id)}/>
      ))}
      </ul>
    </div>
  )
};



export default Appa