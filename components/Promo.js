import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Promo() {
  return (
    <section>
      <div className="flex flex-col justify-center h-auto w-full max-w-7xl mx-auto mt-24">
        <div className="flex flex-row h-auto w-auto">
          <div className="flex flex-col h-auto w-full">
            <h1 className="text-5xl font-bold">
              Promo Harga Toyota di Dealer Resmi Toyota Tangerang
            </h1>
            <hr className="my-11"></hr>
            <p>
              Promo harga Toyota di Showroom dan Dealer Resmi Toyota Tangerang.
              Perkenalkan saya Iyan, selaku tim sales marketing Toyota untuk
              wilayah Tangerang, Banten, dan Jabodetabek. Kami akan membantu
              calon customer untuk mendapatkan informasi mengenai spesifikasi
              kendaraan, test drive, promo harga, cashback dan diskon, serta
              paket kredit Toyota dengan DP murah dan cicilan teringan.
            </p>
            <p className="mt-3">
              Bagi Anda perorangan ataupun perusahaan yang ingin membeli atau
              mengajukan kredit, jangan sungkan untuk menghubungi kami. Kami
              siap memandu Anda untuk mendapatkan paket kredit terbaik dari
              setiap unit mobil Toyota melalui proses yang cepat dan mudah.
            </p>

            <div className="mt-3">
              <p>Sales Executive: Muhammad Qurniawan Djakaria</p>
              <p>Dealer Resmi Tunas Toyota Cipondoh</p>
            </div>
            <div className="flex flex-row h-auto w-full mt-9 gap-x-10 text-white">
              <Link href="https://api.whatsapp.com/send?phone=6282299021830&text=Pak%20Iyan%20ada%20yang%20ingin%20saya%20tanyakan">
                <button className="bg-red-600 h-14 px-4 hover:scale-110">
                  <span>Telepon</span>
                </button>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=6282299021830&text=Pak%20Iyan%20ada%20yang%20ingin%20saya%20tanyakan">
                <button className="bg-green-500 px-4 hover:scale-110">
                  <span>Whatsapp</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-auto w-full items-center justify-center">
            <div className="relative h-96 w-64">
              <Image src="/toyota.png" layout="fill" objectFit="contain" />
            </div>
            <div className="absolute h-96 w-64">
              <Image src="/avatar.png" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
