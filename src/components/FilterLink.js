/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Link from './Link';

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

const FilterLink = ({ filter, children }) => {
  const { data, client } = useQuery(GET_VISIBILITY_FILTER);
  return (
    <Link
      onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
      active={data.visibilityFilter === filter}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
