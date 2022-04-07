import Image from 'next/image';

function Product() {
  return (
    <section>
      <div className="flex flex-col justify-center h-auto max-w-7xl mx-auto mt-40">
        <h1 className="text-center text-5xl font-bold">PILIH MOBIL IMPIANMU</h1>
        <div className="flex items-center my-10 py-16 bg-gray-200 flex-wrap justify-center mx-auto gap-5 font-medium text-lg">
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image src="/toyota-agya.png" layout="fill" objectFit="contain" />
            </div>
            <div>
              <h1 className="relative text-center">Toyota Agya</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-avanza.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="relative text-center">Toyota Avanza</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-calya.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="relative text-center">Toyota Calya</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-fortuner.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-center">Toyota Fortuner</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-innova.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-center">Toyota Innova</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-Raize.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-center">Toyota Raize</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image src="/toyota-rush.png" layout="fill" objectFit="contain" />
            </div>
            <div>
              <h1 className="text-center">Toyota Rush</h1>
            </div>
          </div>
          <div className="flex flex-col h-45 w-auto">
            <div className="relative h-32 w-64 scale-95 hover:scale-100">
              <Image
                src="/toyota-veloz.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-center">Toyota Veloz</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
