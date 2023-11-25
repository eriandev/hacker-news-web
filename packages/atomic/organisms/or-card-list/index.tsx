import { clsx } from '../../utils'
import { MlCard, MlEmpty, MlLoading } from '../../molecules'
import type { OrCardListType } from 'types/atomic/organisms'

export const OrCardList: OrCardListType = ({ cards, isEmpty = false, isLoading = true, onFaveCard }) => {
  const containerClass = isEmpty ? 'justify-items-center' : 'gap-x-10 gap-y-8 lg:grid-cols-2'

  const CardList = (): React.JSX.Element[] =>
    cards.map((card, index) => <MlCard key={index} {...card} onFave={onFaveCard} />)

  return (
    <>
      <section className={clsx(['grid w-full', containerClass])}>
        {!isEmpty ? <CardList /> : <MlEmpty title="No Favourites" subtitle="You haven’t liked any items yet." />}
      </section>
      {isLoading ? <MlLoading text="Loading..." /> : null}
    </>
  )
}
