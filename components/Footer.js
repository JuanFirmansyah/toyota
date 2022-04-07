import Image from 'next/image';

function Footer() {
  return (
    <div className="grid grid-cols-1 px-32 py-14 bg-black text-white">
      <div className="flex flex-col gap-y-2">
        <div className="relative h-20 w-32">
          <Image src="/toyota.png" layout="fill" objectFit="contain" />
        </div>
        <h1>Tunas Toyota Cipondoh</h1>
        <h2>PT. TUNAS TOYOTA CIPONDOH</h2>
        <p>
          Jl. K.H Hasyim Ashari No. 11, Kec. Pinang, Kota Tangerang, Banten
          15122
        </p>
        <p>Muhammad Qurniawan Djakaria - 087-888-690-066 (WA/TELP)</p>
        <p>iankutu@yahoo.com</p>
      </div>
    </div>
  );
}

export default Footer;
