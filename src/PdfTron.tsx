import React, { useRef, useEffect } from 'react'
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'
import pdfs from './pdfs'

function PdfTron() {
  const viewerDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Using PDFTron WebViewer for React
    // Documentation: https://www.pdftron.com/documentation/web/get-started/react/
    // Tutorial: https://www.youtube.com/watch?v=bVhWXuLSL0k  */
    WebViewer({
      path: 'lib',
      initialDoc: `pdfs/${pdfs[0].filePath}`,
      accessibleMode: true,
      enableAnnotations: false,
      enableMeasurement: false,
      enableRedaction: false,
      isAdminUser: false,
      isReadOnly: true,
    }, viewerDiv.current as HTMLDivElement).then((instance: WebViewerInstance) => {
      instance.setToolMode('Pan')
      instance.disableTools(['AnnotationEdit'])
    })
  }, [])

  return (
    <div ref={viewerDiv} style={{ height: '100vh' }} />
  )
}

export default PdfTron
