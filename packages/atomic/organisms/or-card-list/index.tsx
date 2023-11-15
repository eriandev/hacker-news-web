import { AtText } from '../../atoms'
import { MlCard } from '../../molecules'
import { PackmanIcon } from '../../atoms/icons'
import type { MlCardProps } from '../../molecules/ml-card'

export type OrCardListProps = {
  loading?: boolean
  cards: MlCardProps[]
  onFaveCard: (data: MlCardProps) => void
}

export function OrCardList ({ cards, loading = false, onFaveCard }: OrCardListProps): React.JSX.Element {
  return (
    <>
      <section className='mx-auto grid w-full max-w-container gap-x-10 gap-y-8 lg:grid-cols-2'>
        {
          cards.map((card, index) => (
            <MlCard key={index} {...card} onFave={onFaveCard} />
          ))
        }
      </section>
      <aside className='grid h-36 w-full place-items-center text-center'>
        {
          loading
            ? <div>
                <PackmanIcon width={64} height={64} />
                <AtText medium tag='span' size='lg'>Loading...</AtText>
              </div>
            : null
        }
      </aside>
    </>
  )
}
