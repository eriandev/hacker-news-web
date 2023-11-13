'use client'
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
}

export function TmMainLayout ({
  cards,
  headerImgSrc,
  loadingCards,
  segmentOptions
}: TmMainLayoutProps): React.JSX.Element {
  const onSegmentAction = (optionValue: string): void => {}

  const onSelectAction = (option: string): void => {}

  const onFavCardAction = (data: { isFav: boolean, info: MlCardProps }): void => {}

  return (
    <>
      <MlHeader imageSrc={headerImgSrc} />
      <section className='max-w-container mx-auto my-16 flex w-full justify-center'>
        <MlSegment onSelect={onSegmentAction} options={segmentOptions} />
      </section>
      <main className='max-w-container mx-auto w-full'>
        <MlSelect onSelect={onSelectAction} className='mb-10' />
        <OrCardList cards={cards} onFavCard={onFavCardAction} loading={loadingCards} />
      </main>
    </>
  )
}
