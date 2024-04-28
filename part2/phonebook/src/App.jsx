import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find(
      (person) => person.name === personObject.name
    );

    if (existingPerson) {
      const confirmUpdate = confirm(
        `${personObject.name} is already added to phonebook, replace the old number with new one?`
      );
      if (confirmUpdate) {
        const url = "http://localhost:3002/persons";
        const changedPerson = { ...existingPerson, number: newNumber };
        personService
          .updateNumber(changedPerson.id, changedPerson)
          .then((response) => {
            setPersons(
              persons.map((p) =>
                p.id !== changedPerson.id ? p : response.data
              )
            );
            setNewName("");
            setNewNumber("");
            setSuccessMessage(`number ${newNumber} updated`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          });
      } else {
        setNewName("");
        setNewNumber("");
      }
    } else {
      personService.create(personObject).then((retunredPerson) => {
        setPersons(persons.concat(retunredPerson));
        setNewName("");
        setNewNumber("");
        setSuccessMessage(`${retunredPerson.name} added`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = confirm(`delete ${person.name}?`);

    if (confirmDelete) {
      personService
        .deletePerson(id)
        .then(setPersons(persons.filter((p) => p.id !== id)))
        .catch((error) => {
          console.error("Error deleting", error);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h3>Add a new entry</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <Person
            key={person.id}
            person={person}
            deletePerson={() => deletePerson(person.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
