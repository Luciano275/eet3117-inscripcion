import Image from "next/image";

export default function Header () {
  return (
    <header className="py-8 px-4 flex flex-col items-center gap-4">
      <Image
        src={'/logo.png'}
        alt="EET 3117 Logo"
        width={150}
        height={150}
        style={{
          aspectRatio: '3/4',
          objectFit: 'contain',
        }}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center">Escuela de Educación Técnica N° 3117</h1>
        <h2 className="font-medium text-2xl text-center">Daniel Óscar Reyes</h2>
      </div>
    </header>
  )
}