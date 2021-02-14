import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Using PDFTron WebViewer for React
    // Documentation: https://www.pdftron.com/documentation/web/get-started/react/
    // Tutorial: https://www.youtube.com/watch?v=bVhWXuLSL0k  */
    WebViewer({
      path: 'lib',
      initialDoc: 'webviewer-demo.pdf',
      accessibleMode: true,
      enableAnnotations: false,
      enableMeasurement: false,
      enableRedaction: false,
      isAdminUser: false,
      isReadOnly: true,
      //disabledElements: [
      //  'viewControlsButton'
      //],
    }, viewerDiv.current as HTMLDivElement).then(instance => {

    })
  }, [])

  return (
    <div className="App">
      <div className='webviewer' ref={viewerDiv} />
    </div>
  )
}

export default App
