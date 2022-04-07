import Image from 'next/image';
import ReactPlayer from 'react-player';

function Background() {
  return (
    <section className="flex flex-col w-full h-auto z-10">
      <ReactPlayer
        url="honda.MP4"
        playing={true}
        controls={false}
        width="100%"
        height="100%"
        loop={true}
        muted={true}
        playsinline={true}
      />
      <div className="absolute text-white w-full text-center top-24"></div>
    </section>
  );
}

export default Background;
