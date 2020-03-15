import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import { GET_DOGS } from '../apollo/queries';

const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select
      name="dog"
      onChange={onDogSelected}
      defaultValue={data.dogs[0].breed}
    >
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};

Dogs.propTypes = {
  onDogSelected: PropTypes.func.isRequired
};

export default Dogs;
