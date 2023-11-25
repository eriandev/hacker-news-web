import type { MlHeaderType } from 'types/atomic/molecules'

export const MlHeader: MlHeaderType = ({ imageSrc }) => {
  return (
    <header className="bg-header py-11 shadow-md">
      <div className="mx-auto w-full max-w-container px-4">
        <img alt="Header image" width={208} height={28} src={imageSrc} />
      </div>
    </header>
  )
}
