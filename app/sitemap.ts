import { MetadataRoute } from 'next'

const BASE_URL = 'https://narvikbrannkonsult.no'

// lastModified values are set by hand when a page's content actually changes —
// intentionally not `new Date()`, which would falsely claim every page changed on every build.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/brannkonsept`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/brannprosjektering`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/branninspeksjon`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/uavhengig-kontroll`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/kontakt-oss`, lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/artikler/pipebrann`, lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/brannslokker`, lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/roykvarsler`, lastModified: '2026-07-11', changeFrequency: 'yearly', priority: 0.6 },
  ]
}
