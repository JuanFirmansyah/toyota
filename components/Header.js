import React from 'react';
import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  // const { ref, inView } = useInView({ threshold: 0.3 });
  // const animation = useAnimation();
  // const animation2 = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         type: 'spring',
  //         duration: 7,
  //       },
  //     }),
  //       animation2.start({
  //         y: 0,
  //         opacity: 1,
  //         transition: {
  //           type: 'spring',
  //           duration: 4,
  //         },
  //       });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: '-200px',
  //       opacity: 0,
  //     }),
  //       animation2.start({
  //         y: '200px',
  //         opacity: 0,
  //       });
  //   }
  // }, []);

  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 20 - backgroundTransparacyVar * 80;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header
      className="fixed w-full h-auto top-0 z-50 font-body1 bg-black"
      style={{
        background: `rgba(254, 230, 242, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-auto">
        <div className="flex items-center justify-between flex-wrap content-center h-full w-full z-50 px-4 md:px-10 text-sm">
          <div className="relative h-14 w-16 md:h-[70px] md:w-20 md:mt-0">
            <div className="relative h-20 w-32">
              <Image src="/toyota.png" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? '-translate-y-0 h-16'
              : '-translate-y-2 opacity-0 md:-translate-x-0 md:opacity-100 h-4'
          } md:flex flex-col md:flex-row justify-end w-full container transition-all duration-500 ease-in pr-0 md:pr-24`}
        >
          <ul className="flex flex-row text-sm md:text-2xl w-full text-red-600 font-normal justify-center items-center gap-x-7 md:gap-x-14 pt-2">
            <li className="block py-5">
              <Link href="#promo">
                <a className="tracking-wider">Promo</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#benefits">
                <a>Benefits</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#dream">
                <a>Dream Car</a>
              </Link>
            </li>
            <li className="block py-5 bg-red-600 text-white hover:text-[#4F1965] hover:bg-white transition-all delay-100 p-4">
              <Link href="#paket">
                <a>Order</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
