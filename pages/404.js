import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
    return (
        <div className="text-center text-white mt-48">
            <Head>
                <meta name="title" content="Anime Soundboard | 404"></meta>
                <meta name="description" content="Page not found"></meta>
                <meta name="theme-color" content="#FF0000"></meta>
                <title>Anime Soundboard | 404</title>
            </Head>

            <h1 className="text-9xl font-mono">404</h1>
            <p className="text-4xl text-red-400">We are lost in the void <span className="text-white">:(</span></p>
            <Link href="./">
                <button className="mt-4 px-12 py-3 hover:bg-blue-800 rounded-full border-4 border-blue-800 transition">Go back home</button>
            </Link>
        </div>
    );
};