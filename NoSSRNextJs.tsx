import dynamic from 'next/dynamic'
const NoSSRCurrentSensorTitle = dynamic(() => 
  import('@/app/components/current-sensor-title/current-sensor-title')
    .then((module) => ({ default: module.CurrentSensorTitle })),
  { ssr: false }
)
// OR this if 'YourComponent' has exported default
const NoSSRCurrentSensorTitle = dynamic(
  () => import('@/app/components/current-sensor-title/current-sensor-title'),
  { ssr: false }
)
