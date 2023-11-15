import { MlHeader } from '../../molecules/ml-header'
import { MlSelect } from '../../molecules/ml-select'
import { MlSegment } from '../../molecules/ml-segment'
import { OrCardList } from '../../organisms/or-card-list'
import type { MlCardProps } from '../../molecules/ml-card'

export type TmFavesLayoutProps = {
  cards: MlCardProps[]
  headerImgSrc: string
  loadingCards: boolean
  emptyCardList: boolean
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
}

export function TmFavesLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  emptyCardList,
  onAddFaveCard,
  onDeleteFaveCard
}: TmFavesLayoutProps): React.JSX.Element {
  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className='mx-auto my-16 flex w-full max-w-container justify-center px-4'>
        <MlSegment active='faves' />
      </section>
      <main className='mx-auto w-full max-w-container px-4'>
        <MlSelect className='mb-10 invisible' />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} loading={loadingCards} isEmpty={emptyCardList} />
      </main>
    </>
  )
}
