import './globals.css'
import Image from 'next/image'
import SideBar from '../../components/SideBar/SideBar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <div className="flex flex-col sm:flex-row bg-[url('/bg/grey-horizon-4.jpg')] bg-cover">
          <div className="absolute">
            <SideBar />
            {/* <div className="absolute w-full h-full z-0">
              <Image src="/bg/greenTP.png" fill objectFit='cover' alt="bg" className="absolute" />
            </div> */}
            {/* <div className="w-62 h-62 bottom-0 right-0 absolute hidden md:block z-10">
              <Image src="/bg/leaf.png" alt="Icon" width={700} height={700} />
            </div> */}
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
