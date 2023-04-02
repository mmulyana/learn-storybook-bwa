import { ReactNode } from 'react'

type Tfeature = {
  key: string
  title: string
  paragraph: string
  icon: ReactNode
}

type Props = {
  features: Tfeature[]
}

export default function FeaturedItem({ features }: Props) {
  return (
    <div className='grid grid-row-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:px-32 gap-8 place-content-center'>
      {features.map(({ key, title, paragraph, icon }) => (
        <div className='group' key={key}>
          <div className='flex flex-col gap-y-3 items-center md:items-start'>
            <span className='w-14 h-14 flex items-center justify-center rounded-full group-odd:bg-green group-even:bg-purple'>
              {icon}
            </span>
            <h6 className='text-navy font-modium text-xl'>{title}</h6>
            <p className='text-grey'>{paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
