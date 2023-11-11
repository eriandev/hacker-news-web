export type MlHeaderProps = {
  imageSrc: string
}

export function MlHeader ({ imageSrc }: MlHeaderProps): React.JSX.Element {
  return (
    <header className='bg-header py-11 shadow-md'>
      <div className='mx-auto w-full max-w-header px-4'>
        <img alt='Header image' src={imageSrc} />
      </div>
    </header>
  )
}
