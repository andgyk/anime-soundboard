import SoundBoxComponent from "/components/soundbox-component";
import AudioComponent from "/components/audio-component";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <meta name="title" content="Anime Soundboard - Instant one Button"></meta>
      <meta name="description" content="Play anime sounds and effects on your web browser."></meta>
      <meta name="theme-color" content="#f258ff"></meta>
      <meta name="keywords" content="anime, soundboard, anime soundboard, instant button, anime sounds and effects"></meta>
      <meta name="author" content="Andgyk"></meta>
      <meta name="robots" content="noindex"></meta>
      <title>Anime Soundboard | Andgyk</title>
    </Head>
    
      <div className="text-center text-white mt-52">
        <div>
          <h1 className="text-4xl font-bold">
            Anime <span className="text-pink-400">Soundboard</span>
          </h1>
          <p className="text-base font-semibold">Play anime sounds and effects</p>
          <p>by
            <a href="https://github.com/andgyk" rel="noreferrer" target="_blank" alt="Angyk GitHub" className="text-blue-300"> Andgyk</a>
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center">
          <SoundBoxComponent text="Ara Ara" id="ara-ara-audio" />
          <SoundBoxComponent text="Konichiwa (Hashira)" id="hasira-konichiwa-audio" />
          <SoundBoxComponent text="Yemete Kudasai" id="yemete-audio" />
          <SoundBoxComponent text="Yemete Kudasai Ah" id="yemete2-audio" />
        </div>
      </div>
      
      <AudioComponent></AudioComponent>
    </>
  );
};