import Messages from '@/components/Messages'

export default function HomePage() {
  return (
    <div className='w-full h-full'>
      <div className='w-1/5'>
      <Messages />
      </div>
      <div className='flex-1'></div>
      <div className='w-1/5'></div>
    </div>
  )
}
