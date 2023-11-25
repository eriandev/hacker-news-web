import { clsx } from '../../utils'
import { MlCard, MlEmpty, MlLoading } from '../../molecules'
import type { MlCardProps } from '../../molecules/ml-card'

export type OrCardListProps = {
  isEmpty?: boolean
  loading?: boolean
  cards: MlCardProps[]
  onFaveCard: (data: MlCardProps) => void
}

export function OrCardList ({ cards, loading = true, isEmpty = false, onFaveCard }: OrCardListProps): React.JSX.Element {
  const containerClass = isEmpty ? 'justify-items-center' : 'gap-x-10 gap-y-8 lg:grid-cols-2'

  const CardList = (): React.JSX.Element[] =>
    cards.map((card, index) => <MlCard key={index} {...card} onFave={onFaveCard} />)

  return (
    <>
      <section className={clsx(['grid w-full', containerClass])}>
        {!isEmpty ? <CardList /> : <MlEmpty title="No Favourites" subtitle="You haven’t liked any items yet." />}
      </section>
      {loading ? <MlLoading text="Loading..." /> : null}
    </>
  )
}
