import Image from 'next/image'
import Logo from '../assets/logo.svg'

export default function Home() {

  return (
    <div className="bg-gray-900 h-screen flex justify-around items-center">
      <div className="flex ">
        <div>
          <Image
            src={Logo}
            alt='twitter logo'
            className="h-20" />
        </div>
        <div className="font-roboto text-lg text-white">
          Todos sabem que
        </div>
        <div className="font-roboto text-lg text-white">
          é totalmente incompatível com
        </div>
        <div className="font-roboto text-lg text-white">
          Mas vocês não estão preparados pra isso.
        </div>
      </div>
    </div>
  )
}