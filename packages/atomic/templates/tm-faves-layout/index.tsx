import { MlSelect } from '../../molecules/ml-select'
import { OrCardList } from '../../organisms/or-card-list'
import { MlHeader, type MlHeaderProps } from '../../molecules/ml-header'
import { MlSegment, type MlSegmentProps } from '../../molecules/ml-segment'
import type { MlCardProps } from '../../molecules/ml-card'

export type TmFavesLayoutProps = {
  cards: MlCardProps[]
  loadingCards: boolean
  emptyCardList: boolean
  headerImgSrc: MlHeaderProps['imageSrc']
  segmentOptions: MlSegmentProps['options']
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
}

export function TmFavesLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  emptyCardList,
  segmentOptions,
  onAddFaveCard,
  onDeleteFaveCard
}: TmFavesLayoutProps): React.JSX.Element {
  const onSelectAction = (option: string): void => {}

  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className='mx-auto my-16 flex w-full max-w-container justify-center px-4'>
        <MlSegment options={segmentOptions} />
      </section>
      <main className='mx-auto w-full max-w-container px-4'>
        <MlSelect onSelect={onSelectAction} className='mb-10 invisible' />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} loading={loadingCards} isEmpty={emptyCardList} />
      </main>
    </>
  )
}