import { AtText } from '../../atoms'
import { UFOAbductingHeartIcon } from '../../atoms/icons'

export type MlEmptyProps = {
  title: string
  subtitle: string
}

export function MlEmpty ({ title, subtitle }: MlEmptyProps): React.JSX.Element {
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
