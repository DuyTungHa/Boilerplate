import React, { useState } from 'react';

import Dogs from './Dogs';
import DogPhoto from './DogPhoto';

const App = () => {
  const [breed, setBreed] = useState('');
  return (
    <div>
      <Dogs onDogSelected={e => setBreed(e.target.value)} />
      <DogPhoto breed={breed} />
    </div>
  );
};

export default App;
