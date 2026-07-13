import type { ReactNode } from 'react'

const BASE_URL = 'https://narvikbrannkonsult.no'

// `answerText` lets FAQ items whose visible `answer` is JSX (e.g. containing a link)
// provide a plain-text equivalent for the schema, since schema.org text fields can't hold markup.
export function faqPageSchema(
  items: { question: string; answer: ReactNode; answerText?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer, answerText }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText ?? (typeof answer === 'string' ? answer : ''),
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(path ? { item: `${BASE_URL}${path}` } : {}),
    })),
  }
}
