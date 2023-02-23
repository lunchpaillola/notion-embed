import { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import './App.css';

function App({ domElement }) {
  const [data, setData] = useState({});
  const pageID = domElement.getAttribute("data-pageid")

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${pageID}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [pageID]);

  return (
    <div className="App">
      <h1>Notion Widget</h1>
      <NotionRenderer blockMap={data} />
    </div>
  );
}

export default App;
