import { MlSelect } from '../../molecules/ml-select'
import { OrCardList } from '../../organisms/or-card-list'
import { MlHeader, type MlHeaderProps } from '../../molecules/ml-header'
import { MlSegment, type MlSegmentProps } from '../../molecules/ml-segment'
import type { MlCardProps } from '../../molecules/ml-card'

export type TmMainLayoutProps = {
  cards: MlCardProps[]
  loadingCards: boolean
  headerImgSrc: MlHeaderProps['imageSrc']
  segmentOptions: MlSegmentProps['options']
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
  onChangeSegment: (optionValue: string) => void
}

export function TmMainLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  segmentOptions,
  onAddFaveCard,
  onChangeSegment,
  onDeleteFaveCard
}: TmMainLayoutProps): React.JSX.Element {
  const onSelectAction = (option: string): void => {}

  const onSegmentAction = (optionValue: string): void => {
    onChangeSegment(optionValue)
  }

  const onFaveCardAction = (infoCard: MlCardProps): void => {
    if (infoCard.isFave) onAddFaveCard(infoCard)
    else onDeleteFaveCard(infoCard.id)
  }

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className='max-w-container mx-auto my-16 flex w-full justify-center'>
        <MlSegment onSelect={onSegmentAction} options={segmentOptions} />
      </section>
      <main className='max-w-container mx-auto w-full'>
        <MlSelect onSelect={onSelectAction} className='mb-10' />
        <OrCardList cards={cards} onFaveCard={onFaveCardAction} loading={loadingCards} />
      </main>
    </>
  )
}
