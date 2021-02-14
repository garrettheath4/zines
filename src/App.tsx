import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'
import $ from 'jquery'

function App() {
  //TODO: Add turn.js (manually or using PDFTron's wrapper script `flipbook.js`
  //        https://www.pdftron.com/documentation/samples/js/flipbook/
  //   OR use <Turn> React component I borrowed from the below URL
  //        https://codesandbox.io/s/pmkq9zvwkx?file=/src/index.js

  const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: 'double',
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function(e, page) {
        console.log('Current view: ', $(this).turn('view'))
      }
    }
  }

  const pages = [
    //TODO
  ]

  const viewerDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Using PDFTron WebViewer for React
    // Demo: https://www.pdftron.com/webviewer/demo/online-flipbook
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
