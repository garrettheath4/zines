import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import { CoreControls } from '@pdftron/webviewer'
import 'turn.js'
import './App.css'

function App() {
  //TODO: Add turn.js (manually or using PDFTron's wrapper script `flipbook.js`
  //        https://www.pdftron.com/documentation/samples/js/flipbook/
  //   OR use <Turn> React component I borrowed from the below URL
  //        https://codesandbox.io/s/pmkq9zvwkx?file=/src/index.js

  //CoreControls.setWorkerPath('lib/core')

  const source = 'webviewer-demo.pdf'

  const flipbookElement = useRef<HTMLDivElement>(null)
  const loadingMessageElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Using PDFTron WebViewer for React
    // Demo: https://www.pdftron.com/webviewer/demo/online-flipbook
    // Documentation: https://www.pdftron.com/documentation/web/get-started/react/
    // Tutorial: https://www.youtube.com/watch?v=bVhWXuLSL0k  */
    const documentPromise: Promise<CoreControls.Document> = CoreControls.createDocument(source)

    documentPromise.then(doc => {
      const info = doc.getPageInfo(1);
      const width = info.width;
      const height = info.height;
      const pageCount = doc.getPageCount();
      const promises = [];
      const canvases: { pageNum: number, canvas: HTMLCanvasElement }[] = [];

      // @ts-ignore
      const boundingRect = flipbookElement.current.getBoundingClientRect();
      let flipbookHeight = boundingRect.height;
      let flipbookWidth = boundingRect.width;
      if (((flipbookHeight * width) / height) * 2 < flipbookWidth) {
        flipbookWidth = ((flipbookHeight * width) / height) * 2;
      } else {
        flipbookHeight = ((flipbookWidth / width) * height) / 2;
      }

      for (let i = 0; i < pageCount; i++) {
        promises.push(
          /* eslint-disable-next-line no-loop-func */
          new Promise(resolve => {
            // Load page canvas
            const pageNumber = i + 1;
            return doc.requirePage(pageNumber).then(() => {
              return doc.loadCanvasAsync({
                pageNumber,
                drawComplete: (canvas, pageNum) => {
                  canvases.push({ pageNum, canvas });

                  // @ts-ignore
                  loadingMessageElement.current.innerHTML = `Loading page canvas... (${canvases.length}/${pageCount})`;
                  resolve(null);
                },
                // @ts-ignore
                isInternalRender: true,
              });
            });
          })
        );
      }

      Promise.all(promises).then(() => {
        // @ts-ignore
        flipbookElement.current.removeChild(loadingMessageElement.current);
        // @ts-ignore
        flipbookElement.current.style.margin = '60px 0px 0px auto';

        // @ts-ignore
        canvases.sort((a, b) => a.pageNum - b.pageNum).forEach(o => flipbookElement.current.appendChild(o.canvas));

        // @ts-ignore
        $('#flipbook').turn({
          width: flipbookWidth,
          height: flipbookHeight,
        });

        /*
        setTimeout(() => {
          $('#flipbook').turn('next');
        }, 500);

        document.getElementById('previous').onclick = () => {
          $('#flipbook').turn('previous');
        };

        document.getElementById('next').onclick = () => {
          $('#flipbook').turn('next');
        };
         */
      });
    })
  }, [])

  return (
    <div className="App">
      <div id='flipbook' ref={flipbookElement}>
        <div id='loading-message' ref={loadingMessageElement} />
      </div>
    </div>
  )
}

export default App
