import { useState } from 'react';
import Card from './Card'; 

function App() {
  
  const [animalName, setAnimalName] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const handleNameChange = (e) => {
    setAnimalName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setAnimalDescription(e.target.value);
  };

  
  const validateForm = () => {
    if (animalName.trim().length < 3 || animalName.startsWith(' ')) {
      return 'Por favor chequea que el nombre del animal sea correcto';
    }
    if (animalDescription.length < 6) {
      return 'La descripción debe tener al menos 6 caracteres';
    }
    return ''; 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const validationMessage = validateForm(); 
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    
    setErrorMessage('');
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Ingresa el detalle de un Animal</h1>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre del animal:
              <input
                type="text"
                value={animalName}
                onChange={handleNameChange}
                placeholder="Ingrese el nombre del animal"
              />
            </label>
          </div>
          <div>
            <label>
              Descripción:
              <input
                type="text"
                value={animalDescription}
                onChange={handleDescriptionChange}
                placeholder="Ingrese la descripción del animal"
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <Card name={animalName} description={animalDescription} />
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
