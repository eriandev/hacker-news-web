import { MlHeader } from '../../molecules/ml-header'
import { MlSelect } from '../../molecules/ml-select'
import { MlSegment } from '../../molecules/ml-segment'
import { OrCardList } from '../../organisms/or-card-list'
import type { MlCardProps } from 'types/atomic/molecules'
import type { TmFavesLayoutType } from 'types/atomic/templates'

export const TmFavesLayout: TmFavesLayoutType = ({
  cards,
  headerImgSrc,
  isLoadingCards,
  isEmptyCardList,
  onAddFaveCard,
  onDeleteFaveCard
}) => {
  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className="mx-auto my-16 flex w-full max-w-container justify-center px-4">
        <MlSegment active="faves" />
      </section>
      <main className="mx-auto w-full max-w-container px-4">
        <MlSelect className="invisible mb-10" />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} isLoading={isLoadingCards} isEmpty={isEmptyCardList} />
      </main>
    </>
  )
}
