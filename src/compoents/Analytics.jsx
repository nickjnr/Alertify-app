import analyticsImg from '../assets/analytics-img.svg'
import analyticIcon1 from '../assets/analyticIcon1.svg'
import analyticIcon2 from '../assets/analyticIcon2.svg'

export default function Analytics() {
  return (
    <div className="flex flex-row py-11 px-16 bg-white">
    <div className=" w-full lg:w-1/2 px-10">
        <p className=" font-normal text-lg">Powerful Analytics</p>
        <h1 className=" font-bold text-4xl py-3">Effortlessly to Track all as User Analytics</h1>
        <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

        <div className="flex flex-row pt-10 border-t-2">
        <div className="">
        <img src={analyticIcon1} alt="analyticIcon"/>
            <h1 className=" font-medium text-2xl">Powerful Dashboard</h1>
            <p className=" font-normal text-lg"> It is a long established fact as by the readable content.</p>
        </div>
        <div className="">
        <img src={analyticIcon2} alt="analyticIcon"/>
        <h1 className=" font-medium text-2xl">Always in Sync</h1>
        <p className=" font-normal text-lg">It is a long established fact as by the readable content.</p>
    </div>
        </div>
    </div>

    <div className="w-0 lg:w-1/2 hidden lg:flex">
    <img src={analyticsImg} alt="analyticsImage"/>
    </div>
    </div>
  )
}
