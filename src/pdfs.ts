interface PdfMetadata {
  filePath: string,
  sourceUrl: string,
  publishDate?: {
    decade?: number,
    year?: number,
    month?: number,
    day?: number,
  },
  publishLocation?: {
    country?: string,
    state?: string,
    city?: string,
  },
}

const pdfs: PdfMetadata[] = [
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gayliberator.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    publishDate: {
      decade: 1970,
      year: 1971,
      month: 9,
    },
    publishLocation: {
      country: 'USA',
      state: 'MI',
      city: 'Detroit',
    },
  },
]



export default pdfs