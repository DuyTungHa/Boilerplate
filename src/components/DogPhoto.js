import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import { GET_DOG_PHOTO } from '../apollo/queries';

const DogPhoto = ({ breed }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      skip: !breed,
      notifyOnNetworkStatusChange: true
    }
  );

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img
        src={data.dog.displayImage}
        style={{ height: 100, width: 100 }}
        alt={data.dog.displayImage}
      />
      <button onClick={() => refetch()} type="button">
        Refetch!
      </button>
    </div>
  );
};

DogPhoto.propTypes = {
  breed: PropTypes.string.isRequired
};

export default DogPhoto;
