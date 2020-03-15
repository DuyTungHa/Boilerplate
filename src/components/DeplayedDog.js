import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_DOG_PHOTO } from '../apollo/queries';

const DelayedDog = () => {
  const [dog, setDog] = useState(null);
  const [getDog, { loading, data, error }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  if (data && data.dog) {
    setDog(data.dog);
  }

  return (
    <div>
      {dog && <img src={dog.displayImage} alt="BullDog" />}
      <button
        type="button"
        onClick={() => getDog({ variables: { breed: 'bulldog' } })}
      >
        Click Me!
      </button>
    </div>
  );
};

export default DelayedDog;
