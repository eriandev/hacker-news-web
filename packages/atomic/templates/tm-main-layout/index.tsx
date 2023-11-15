import { MlSelect } from '../../molecules/ml-select'
import { MlSegment } from '../../molecules/ml-segment'
import { OrCardList } from '../../organisms/or-card-list'
import { MlHeader, type MlHeaderProps } from '../../molecules/ml-header'
import type { MlCardProps } from '../../molecules/ml-card'

export type TmMainLayoutProps = {
  cards: MlCardProps[]
  loadingCards: boolean
  emptyCardList: boolean
  headerImgSrc: MlHeaderProps['imageSrc']
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
}

export function TmMainLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  emptyCardList,
  onAddFaveCard,
  onDeleteFaveCard
}: TmMainLayoutProps): React.JSX.Element {
  const onSelectAction = (option: string): void => {}

  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className='mx-auto my-16 flex w-full max-w-container justify-center px-4'>
        <MlSegment active='all' />
      </section>
      <main className='mx-auto w-full max-w-container px-4'>
        <MlSelect onSelect={onSelectAction} className='mb-10' />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} loading={loadingCards} isEmpty={emptyCardList} />
      </main>
    </>
  )
}
