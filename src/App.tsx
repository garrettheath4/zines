import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    WebViewer({
        path: 'lib',
        initialDoc: 'webviewer-demo.pdf'
      }, viewerDiv.current as HTMLDivElement).then(instance => {

    })
  }, [])

  return (
    <div className="App">
      <div className='webviewer' ref={viewerDiv} />
    </div>
  );
}

export default App;
