import Image from 'next/image'

export type MlHeaderProps = {
  imageSrc: string
}

export function MlHeader ({ imageSrc }: MlHeaderProps): React.JSX.Element {
  return (
    <header className='bg-header py-11 shadow-md'>
      <div className='mx-auto w-full max-w-header px-4'>
        <Image
          unoptimized
          alt='Header image'
          width={208}
          height={28}
          src={imageSrc}
        />
      </div>
    </header>
  )
}
