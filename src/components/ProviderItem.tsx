import { FC, memo } from 'react'
import { images } from '../assets'

interface ProviderItem {
  id: number
  icon: string
  title: string
  subTitle: string
}

interface ProviderItemProps {
  provider: ProviderItem
}

const ProviderItem: FC<ProviderItemProps> = memo(({ provider }) => {
  return (
    <div className='flex items-center justify-between bg-white/[.75] backdrop-blur-[80px] shadow-s-1 p-2 pr-5 rounded-xl'>
      <div className='flex items-center gap-3'>
        <img src={provider.icon} alt={provider.title} className='size-12 flex-shrink-0' />
        <div>
          <p className='text-[15px]/[20px] font-bold text-[#3C3C43]'>{provider.title}</p>
          <p className='text-[13px]/[18px] font-normal text-[#3C3C43]/[.64]'>{provider.subTitle}</p>
        </div>
      </div>

      <img src={images.icons.arrow_right} alt='arrow-right' className='size-6 flex-shrink-0' />
    </div>
  )
})

export default ProviderItem
