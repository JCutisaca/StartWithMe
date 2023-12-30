import Card from '@/components/Card/Card'

export default function Home() {

  const cards = [
    {
      title: "Dragon Ball Z",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/dragonBall_ln8vfg.png",
      link: "https://start-with-me.vercel.app/dragonBall"
    },
    {
      title: "Piratas Del Caribe",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/piratasDelCaribe_qrk7yu.png",
      link: "https://start-with-me.vercel.app/piratasDelCaribe"
    },
    {
      title: "Super Mario",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/superMario_wej8vn.png",
      link: "https://start-with-me.vercel.app/superMario"
    },
    {
      title: "Shrek",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/shrek_pkmeei.png",
      link: "https://start-with-me.vercel.app/shrek"
    },
    {
      title: "toyStory",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/toyStory_gd7o06.png",
      link: "https://start-with-me.vercel.app/toyStory"
    },
    {
      title: "Harry Potter",
      imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703915739/harryPotter_xlyxie.png",
      link: "https://start-with-me.vercel.app/harryPotter"
    }
  ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center text-blue-500 py-4">¡Haz de tu declaración de amor un momento épico y único!</h1>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {cards.map(({ title, imageUrl, link }) => {
            return <Card
              key={title}
              title={title}
              imageUrl={imageUrl}
              link={link}
            />
          })}
        </div>
      </div>
    </div>
  )
}
