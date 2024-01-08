import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import file from './Ascii.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



const MyPdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    return (
      <div>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          renderMode="svg"
        >
          <Page pageNumber={1} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              customTextRenderer={false}
              />
        </Document>
      </div>
    );
  };

export default MyPdfViewer;