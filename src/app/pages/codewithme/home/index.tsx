import React from 'react';

import { useNavigation } from 'react-router-dom';

const Home = () => {
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <p>Loading before return this component</p>;

  return <div>Code with me - Home</div>;
};

export default Home;
