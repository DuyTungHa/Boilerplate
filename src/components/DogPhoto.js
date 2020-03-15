import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import { GET_DOG_PHOTO } from '../apollo/queries';

const DogPhoto = ({ breed }) => {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img
      src={data.dog.displayImage}
      style={{ height: 100, width: 100 }}
      alt={data.dog.displayImage}
    />
  );
};

DogPhoto.propTypes = {
  breed: PropTypes.string.isRequired
};

export default DogPhoto;
