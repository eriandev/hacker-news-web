import { AtText } from '../../atoms'
import { PackmanIcon } from '../../atoms/icons'
import type { MlLoadingType } from 'types/atomic/molecules'

export const MlLoading: MlLoadingType = ({ text }) => {
  return (
    <div className="grid h-48 w-full place-items-center text-center">
      <div>
        <PackmanIcon width={128} height={128} />
        <AtText medium tag="span" size="xl">
          {text}
        </AtText>
      </div>
    </div>
  )
}
