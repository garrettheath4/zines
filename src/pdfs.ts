interface PdfMetadata {
  filePath: string,
  sourceUrl: string,
  categories?: string[],
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
    categories: ['LGBT/Gay'],
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
  {
    filePath: 'QAW_Download_Library_Jan26_2021/whiteness.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/white'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/500years.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Indigenous'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/90-newsletter.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Poetry'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/adamsword.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Trans'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/AmazonQuarterlyVol3No2.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/an_aromantic_manifesto.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Queer'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/an_herbal_medicine_making_primer.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Health'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/caos.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Social/Antifa'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/computerlib.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Tech'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/cybernation.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Black'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/diytent.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Homelessness'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/dykesgorgons_v1.1.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/echo_of_sappho_1.1.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/fagrag_june1971.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Gay'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gayflames1.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gayflames2.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gayflames7.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gendertrash1.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Trans'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/gidra_feb1971.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Asian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/interrupt-14.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Tech'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/lavendervision.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/lesbiantide.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/mieli.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/morrison.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Black'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/narragansett_dawn.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Indigenous'],
    publishDate: {
      decade: 1930,
      year: 1935,
      month: 5,
    },
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/palante_nov1970.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Latine'],
    publishDate: {
      decade: 1970,
      year: 1970,
      month: 11,
      day: 20,
    },
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/PoliceAbolition101.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Social/PoliceBrutality'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/radicalesbians.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/Stonewall_Romances_1979.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Gay'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/towards-anarchist-ecology.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Social/Anarchy'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/twodykes.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['LGBT/Lesbian'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/uprootingcolonialism.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Indigenous'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/wantingtobeindian.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Indigenous'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/warrior.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Indigenous'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/whitepeoplehateprotests.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Black'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/why-riot-chinese-8-5x11.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Race & Ethnicity/Chinese'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/YOUWILLNOTWIN.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Social/Antifa'],
  },
  {
    filePath: 'QAW_Download_Library_Jan26_2021/Zillah_Eisenstein.pdf',
    sourceUrl: 'https://queer.archive.work/library/download/index.html',
    categories: ['Social/Socialism'],
  },
]

export default pdfs