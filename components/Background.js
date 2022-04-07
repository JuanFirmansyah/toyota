import Image from 'next/image';
import ReactPlayer from 'react-player';

function Background() {
  return (
    <section className="flex flex-col w-full h-[116vh] z-10">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=q_ZpE15892U"
        playing={true}
        controls={false}
        width="100%"
        height="100%"
        loop={true}
        muted={false}
        playsinline={true}
      />
      <div className="absolute text-white w-full text-center top-24"></div>
    </section>
  );
}

export default Background;
