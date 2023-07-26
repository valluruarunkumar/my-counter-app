
import React from 'react';
import Card from './components/Card';
import './App.css';

const detailsList = [
  {
    heading: "The Seasons Latest",
    paragraph: "Get the seasons all latest designs in a fluck of your hand",
    buttonText: "Show More"
  },
  {
    heading: "Our New Designs",
    paragraph: "Get the designs developd by our in house team all for you",
    buttonText: "Show More"
  },
  {
    heading: "Insiders",
    paragraph: "Get the  topm class product for yourself with an extra off",
    buttonText: "Show More"
  }
];

function App() {
  return (
    <div>
        {detailsList.map((eachItem,index) => (
            <Card {...eachItem} key={index} />
        ))}
    </div>
  );
}

export default App;
