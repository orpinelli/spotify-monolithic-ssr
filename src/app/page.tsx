'use client'
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { PlaylistProps, SpotifyAlbumResponse } from "./types/home.types";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [shows, setShows] = useState<PlaylistProps>();
  const [albums, setAlbums] = useState<SpotifyAlbumResponse>();
  const [meAlbums, setMeAlbums] = useState<SpotifyPlaylist>();
  const [albums2, setAlbums2] = useState<SpotifyAlbumResponse>();


  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
  
    if (accessToken && refreshToken) {
      localStorage.setItem('spotify_access_token', accessToken);
      localStorage.setItem('spotify_refresh_token', refreshToken);
      window.location.hash = '';
      setIsLoggedIn(true);
    } else {
      const storedAccessToken = localStorage.getItem('spotify_access_token');
      if (storedAccessToken) {
        setIsLoggedIn(true);
      }
    }
  }, []);


  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        try {
          const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setProfileData(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    if (isLoggedIn) {
      fetchProfileData();
    }
  }, [isLoggedIn]);


  useEffect(() => {
    const fetchPlay = async () => {
      const token = localStorage.getItem('spotify_access_token');
      const playlist_id = '3cEYpjA9oz9GiPac4AsH4n';
      if (token) {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setShows(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    if (isLoggedIn) {
      fetchPlay();
    }
  }, [isLoggedIn]);


  useEffect(() => {
    const fetchPlay = async () => {
      const token = localStorage.getItem('spotify_access_token');
      const albums = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';
      if (token) {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setAlbums(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    if (isLoggedIn) {
      fetchPlay();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchPlay = async () => {
      const token = localStorage.getItem('spotify_access_token');
     

      if (token) {
        try {
          const response = await axios.get(` https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n `, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setMeAlbums(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    if (isLoggedIn) {
      fetchPlay();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchPlay = async () => {
      const token = localStorage.getItem('spotify_access_token');
     

      if (token) {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/3OlTTYMcrKwHlDtFCwshRV?si=65101b5530004a6b`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setAlbums2(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    if (isLoggedIn) {
      fetchPlay();
    }
  }, [isLoggedIn]);




  console.log(albums, 'albums')
  console.log(albums2, 'albums2')


  return (
    <>
      {isLoggedIn ? (
        <div className="h-screen flex flex-col bg-black">
          <div className="flex items-center justify-between w-full p-4 bg-background-elevated-base">
      <button
        className="text-encore-text-bright-accent"
        data-testid="home-button"
        aria-label="Início"
      >
        <span aria-hidden="true">
          <svg
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
          </svg>
        </span>
      </button>
      <div className="flex-1 flex justify-center">
        <form role="search" className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-encore-text-subdued"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full py-2 pl-10 pr-3 text-sm text-encore-text-base bg-background-elevated-highlight rounded-full focus:outline-none focus:ring-2 focus:ring-encore-text-bright-accent"
            placeholder="O que você quer ouvir?"
            aria-label="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              className="text-encore-text-bright-accent"
              aria-label="Navegar"
            >
              <svg
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
                <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
          <div className="flex flex-1">
            <aside className="w-72 bg-zinc-950 p-6">
              <nav className="space-y-5 mt-10">
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
                >
                  <HomeIcon />
                  Home
                </a>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
                >
                  <Search />
                  Search
                </a>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
                >
                  <Library />
                  Your library
                </a>
              </nav>

              <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 ">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 1
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 2
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 3
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 4
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 5
                </a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                  Play List 6
                </a>
              </nav>
            </aside>
            <main className="flex-1 bg-gradient-to-b  from-purple-600 via-black to-black p-6 rounded-lg gap-2">
              <div className="flex flex-wrap space-x-4">
              </div>
              <div className="flex flex-row">
              {albums?.albums.map((album) => (
              <div key={album.id} className="grid grid-cols-3 gap-6 mt-4">
                <a
                  href="#"
                  className="bg-white/5 group rounded flex items-center gap-2 w-[260px] overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <Image width={48} height={48} alt={""} src={album.images[0].url} />
                  <strong className="text-sm"> {album.name}</strong>
                  <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play />
                  </button>
                </a>
              </div>
                  ))}
                  </div>

                <h2 className="font-semibold text-2xl mt-10">{shows?.name}</h2>   
                <section className="flex flex-row flex-1 min-w-full max-w-full min-h-[260px] container-size-auto" aria-label="Podcasts com vídeo">
                {shows && shows.tracks.items.map((item, index) => (
                <div className="h-[168px] w-[168px] gap-4" key={index}>
                  <a
                    href="#"
                    className="p-3 rounded-md flex flex-col gap-2 h-[250px]"
                  >
                    <Image
                      className="w-full h-auto object-cover rounded-md"
                      width={268}
                      height={168}
                      alt={""}
                      src={item.track.album.images[0].url}
                    />
                    <strong className="font-semibold">{item.track.name}</strong>
                    <span className="text-sm text-zinc-500">Nome das bandas</span>
                  </a>
                </div>
              ))}
                  </section>
            </main>
          </div>
          <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image width={56} height={56} alt={""} src="/elvis.png" />
              <div className="flex flex-col">
                <strong className="font-normal">Nome da Musica</strong>
                <span className="text-xs text-zinc-400">Nome do artista</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-6">
                <Shuffle size={20} className="text-zinc-200" />
                <SkipBack size={20} className="text-zinc-200" />
                <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                  <Play />
                </button>
                <SkipForward size={20} className="text-zinc-200" />
                <Repeat size={20} className="text-zinc-200" />
              </div>
              <div className="flex items-center gap-2 ">
                <span className="text-xs text-zinc-400">0:33</span>
                <div className="h-1 rounded-full w-96 bg-zinc-600">
                  <div className=" bg-zinc-200 w-40 h-1 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-400">3:33</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mic2 size={20} />
              <LayoutList size={20} />
              <Laptop2 size={20} />
              <div className="flex items-center gap-2">
                <Volume size={20} />
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                  <div className=" bg-zinc-200 w-10 h-1 rounded-full"></div>
                </div>
                <Maximize2 size={20} />
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center self-center justify-center">
          <a className="rounded-md bg-green-500 px-8 py-2 font-semibold" href="http://localhost:8888">
            Fazer Login
          </a>
        </div>
      )}
    </>
  );}
