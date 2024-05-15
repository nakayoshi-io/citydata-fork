import React from 'react';

import Container from 'react-bootstrap/Container';

import ListTokyoCities from './components/ListTokyoCities';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          City Data
        </h1>
      </Container>
      <h2>Tokyo</h2>
      <ListTokyoCities />
    </Container>
  );
};

export default App;
