"use client";
import { DuaListProps } from "@/app/type";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const DuaList = ({ dua }: DuaListProps) => {
  const searchParams = useSearchParams();
  const catId = parseInt((searchParams.get("cat") || 1) as string, 10);
  const duaId = parseInt((searchParams.get("duaId") || 1) as string, 10);

  const duaListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to the DuaList component when duaId matches
    if (duaListRef.current && duaId === dua.id) {
      duaListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [duaId, dua.id]);

  const [audioStates, setAudioStates] = useState<{ [key: string]: { audio: HTMLAudioElement | null, isPlaying: boolean } }>({});

  useEffect(() => {
    // Check if audioStates has changed
    const handleAudioStateChange = (duaId: string) => {
      if (audioStates[duaId] && audioStates[duaId].isPlaying) {
        console.log("Audio is playing");
      } else {
        console.log("Audio is paused");
      }
    };

    // Loop through each duaId
    Object.keys(audioStates).forEach((duaId) => {
      handleAudioStateChange(duaId);
    });
  }, [audioStates]);


  const handlePlayPause = (audioUrl: string, duaId: string) => {
    // If an audio element is already present for the given duaId
    if (audioStates[duaId] && audioStates[duaId].audio) {
      const { audio } = audioStates[duaId];
      if (audio) {
        audio.pause();
      }
      setAudioStates({
        ...audioStates,
        [duaId]: { ...audioStates[duaId], audio: null, isPlaying: false },
      });
    } else {
      const newAudio = new Audio(audioUrl);
      newAudio
        .play()
        .then(() => {
          setAudioStates({
            ...audioStates,
            [duaId]: { audio: newAudio, isPlaying: true },
          });
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });

      newAudio.addEventListener("ended", () => {
        setAudioStates({
          ...audioStates,
          [duaId]: { ...audioStates[duaId], isPlaying: false },
        });
      });
    }
  };


  return (
    <div
      className="flex flex-col gap-4 "
      id={dua.id.toString()}
      ref={duaListRef}
    >
      {dua.dua_id === 1 ? (
        <p className="bg-white py-2 px-3 rounded-lg ">
          <span className="text-secondary_green font-semibold">Section: </span>
          {dua.dua_name_en}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 bg-white rounded-lg px-4 py-3 ">
        <div className=" flex items-center gap-2">
          <Image
            src="/assets/icons/title-logo.svg"
            width={30}
            height={30}
            alt="title-logo"
          />

          <p className="text-secondary_green font-semibold">
            <span>{dua.dua_id}. </span>
            {dua.dua_name_en}
          </p>
          
        </div>
        <div className=" flex flex-col gap-6 leading-8">
          <p className="text-lg">{dua.top_en}</p>
          <p className="w-full text-right text-xl sm:text-3xl leading-10">
            {dua.dua_arabic}
          </p>
          {dua.translation_en && (
            <p className="italic text-lg leading-8">
              <span className="italic font-medium">Transliteration:</span>
              {dua.translation_en}
            </p>
          )}
        </div>
        <div>
          <p className="text-secondary_green font-semibold">Reference:</p>
          <p className="font-medium">{dua.refference_en}</p>
        </div>




        {/* icon start */}
        <div className="mt-10 flex justify-end gap-[310px]">
          {dua.audio !== null ? (
            <button 
            onClick={() =>
              handlePlayPause(dua.audio as string, dua.dua_id as unknown as string)
            }
                          >
          <div className="bg-[#1FA45B] p-3 rounded-full">
            {audioStates[dua.dua_id] &&
              audioStates[dua.dua_id].isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-player-pause-filled text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
                  strokeWidth="0"
                  fill="currentColor"
                />
                <path
                  d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-player-play-filled text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
        </button>
                        ) : null}
        <div className="flex items-center gap-10">
          <a href="" className="">
            <Image
              src="/images/icon/copy.svg"
              alt="copy"
              title="Copy"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/bookmark.svg"
              alt="bookmark"
              title="Bookmark"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/plan.svg"
              alt="plan"
              title="Memorize"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/share.svg"
              alt="share"
              title="Share"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/report.svg"
              alt="report"
              title="Report"
              width={24}
              height={24}
            />
          </a>
        </div>
        </div>







        {/* <div className="flex items-center gap-10">
          <a href="" className="">
            <Image
              src="/images/icon/copy.svg"
              alt="copy"
              title="Copy"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/bookmark.svg"
              alt="bookmark"
              title="Bookmark"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/plan.svg"
              alt="plan"
              title="Memorize"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/share.svg"
              alt="share"
              title="Share"
              width={24}
              height={24}
            />
          </a>
          <a href="">
            <Image
              src="/images/icon/report.svg"
              alt="report"
              title="Report"
              width={24}
              height={24}
            />
          </a>
        </div> */}


      </div>
    </div>
  );
};

export default DuaList;
