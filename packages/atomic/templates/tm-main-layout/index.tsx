import { MlHeader } from '../../molecules/ml-header'
import { MlSelect } from '../../molecules/ml-select'
import { MlSegment } from '../../molecules/ml-segment'
import { OrCardList } from '../../organisms/or-card-list'
import type { MlCardProps } from '../../molecules/ml-card'

export type TmMainLayoutProps = {
  cards: MlCardProps[]
  headerImgSrc: string
  loadingCards: boolean
  emptyCardList?: boolean
  optionSelected: string | null
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
  onChangeCategory: (info: { category: string | null }) => void
}

export function TmMainLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  emptyCardList,
  optionSelected,
  onAddFaveCard,
  onDeleteFaveCard,
  onChangeCategory
}: TmMainLayoutProps): React.JSX.Element {
  const onSelectAction = (category: string): void => {
    onChangeCategory({ category })
  }

  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className="mx-auto my-16 flex w-full max-w-container justify-center px-4">
        <MlSegment active="all" />
      </section>
      <main className="mx-auto w-full max-w-container px-4">
        <MlSelect optionSelected={optionSelected} onSelect={onSelectAction} className="mb-10" />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} loading={loadingCards} isEmpty={emptyCardList} />
      </main>
    </>
  )
}
