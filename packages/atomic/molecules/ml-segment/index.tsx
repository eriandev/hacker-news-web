import Link from 'next/link'

import { clsx } from '../../utils'
import { AtText } from '../../atoms'
import type { MlSegmentType } from 'types/atomic/molecules'

export const MlSegment: MlSegmentType = ({ active }) => {
  const activeClass = 'border-blue text-blue'
  const inactiveClass = 'border-y-gray-400 text-gray-800 first:border-l-gray-400 last:border-r-gray-400'
  const baseClass =
    'min-w-96 cursor-pointer select-none border py-0.5 first:rounded-bl first:rounded-tl last:rounded-br last:rounded-tr'

  return (
    <div className="flex justify-items-center text-center">
      <Link href="/" className={clsx([baseClass, active === 'all' ? activeClass : inactiveClass])}>
        <AtText medium tag="span" size="lg">
          All
        </AtText>
      </Link>
      <Link href="/faves" className={clsx([baseClass, active === 'faves' ? activeClass : inactiveClass])}>
        <AtText medium tag="span" size="lg">
          My faves
        </AtText>
      </Link>
    </div>
  )
}
