import { useState, useEffect } from 'react';

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from 'react-notion';

// For styling markdown content
import 'react-notion/src/styles.css';
import './App.css';

function App({ domElement }) {
  const [data, setData] = useState({});
  const pageID = domElement.getAttribute("data-pageid")

  useEffect(() => {
    // notion-api-worker
    fetch(
      'https://notion-api.splitbee.io/v1/page/'+pageID
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>
        Notion Widget
      </h1>

      {/* Mount NotionRenderer and pass in data to render */}
      <NotionRenderer blockMap={data} />
    </div>
  );
}

export default App;