import { AtText } from '../../atoms'
import { PackmanIcon } from '../../atoms/icons'

export type MlLoadingProps = {
  text: string
}

export function MlLoading ({ text }: MlLoadingProps): React.JSX.Element {
  return (
    <div className='grid h-48 w-full place-items-center text-center'>
      <div>
        <PackmanIcon width={128} height={128} />
        <AtText medium tag='span' size='xl'>{text}</AtText>
      </div>
    </div>
  )
}
