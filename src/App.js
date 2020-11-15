import React from 'react';
import jumboData from './fixtures/jumbo.json'
import Jumbotron from './components/jumbotron'

function App() {
  return (
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>  
            <Jumbotron>
              <Jumbotron.Image src={item.image} alt={item.alt}/>
            </Jumbotron>
          </Jumbotron> 
        ))}
      </Jumbotron.Container>
    );
}
 
export default App;
