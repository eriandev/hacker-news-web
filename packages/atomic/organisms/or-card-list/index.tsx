import { AtText } from '../../atoms'
import { MlCard } from '../../molecules'
import { PackmanIcon } from '../../atoms/icons'
import type { MlCardProps } from '../../molecules/ml-card'

export type OrCardListProps = {
  loading?: boolean
  cards: MlCardProps[]
  onFavCard: (data: { isFav: boolean, info: MlCardProps }) => void
}

export function OrCardList ({ cards, loading = false, onFavCard }: OrCardListProps): React.JSX.Element {
  return (
    <>
      <section className='mx-auto grid w-full max-w-header gap-x-10 gap-y-8 lg:grid-cols-2'>
        {
          cards.map((card, index) => (
            <MlCard key={index} {...card} onFav={onFavCard} />
          ))
        }
      </section>
      {
        loading
          ? <aside className='grid w-full justify-items-center py-6 text-center'>
              <PackmanIcon width={64} height={64} />
              <AtText medium tag='span'>Loading...</AtText>
            </aside>
          : null
      }
    </>
  )
}
