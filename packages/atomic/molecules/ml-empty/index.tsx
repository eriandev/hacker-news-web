import { AtText } from '../../atoms'
import { UFOAbductingHeartIcon } from '../../atoms/icons'
import type { MlEmptyType } from 'types/atomic/molecules'

export const MlEmpty: MlEmptyType = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <UFOAbductingHeartIcon width={256} height={256} />
      <AtText medium size="xl" className="mt-4">
        {title}
      </AtText>
      <AtText className="text-gray-600">{subtitle}</AtText>
    </div>
  )
}
