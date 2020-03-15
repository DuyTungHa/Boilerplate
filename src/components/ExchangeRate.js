import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { EXCHANGE_RATES } from '../apollo/queries';

const ExchangeRate = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>{`${currency}: ${rate}`}</p>
    </div>
  ));
};

export default ExchangeRate;
