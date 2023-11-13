'use client'
import { TmMainLayout } from 'atomic/templates'

export default function Page (): React.JSX.Element {
  const cards = [
    {
      link: '#',
      author: 'author',
      createdAt: '2 hours ago',
      storyTitle: 'From chaos to free will'
    },
    {
      link: '#',
      author: 'author',
      createdAt: '3 hours ago',
      storyTitle: 'Yes, React is taking over front-end development. The question is why.'
    },
    {
      link: '#',
      author: 'author',
      createdAt: '4 hours ago',
      storyTitle: 'All the fundamental React.js concepts, jammed into the single Medium article (updated August 2019)'
    },
    {
      link: 'sdsadasda',
      author: 'author',
      createdAt: '6 hours ago',
      storyTitle: 'Progressive Web Apps with React.js: Part I - Introduction'
    }
  ]
  const segmentOptions = [
    { text: 'All', value: 'all' },
    { text: 'My faves', value: 'faves' }
  ]

  return <TmMainLayout
    cards={cards}
    loadingCards={true}
    segmentOptions={segmentOptions}
    headerImgSrc='/images/hacker-news.png'
  />
}
