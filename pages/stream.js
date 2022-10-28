import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import YouTube from "react-youtube";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageInputFlat,
  VirtualizedMessageList,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";
import styles from "../styles/Home.module.css";
import Header from "../components/interface/Header";

export default function Stream() {
  const [user, setUser] = useState({});
  const [client, setClient] = useState();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const videoRef = useRef();

  useEffect(() => {
    if (!user?.id) return;

    (async function run() {
      const client = StreamChat.getInstance(
        process.env.NEXT_PUBLIC_STREAM_API_KEY
      );
      setClient(client);

      const { token } = await fetch("/api/token", {
        method: "POST",
        body: JSON.stringify({
          id: user.id,
        }),
      }).then((res) => res.json());

      await client.connectUser(
        {
          id: user.id,
          name: user.id,
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        token
      );

      const channel = client.channel("livestream", "mylivestream", {
        name: "My Live Stream",
      });

      setChannel(channel);
    })();

    // return () => {
    //   client.disconnectUser();
    //   setChannel(undefined);
    // };
  }, [user.id]);

  useEffect(() => {
    if (!channel) return;
    const listener = channel.on("message.new", async (event) => {
      const player = videoRef.current.getInternalPlayer();
      const time = await player.getCurrentTime();

      setMessages((prev) => {
        return [
          ...prev,
          {
            message: event.message,
            time,
          },
        ];
      });
    });
    return () => {
      listener.unsubscribe();
    };
  }, [channel]);

  /**
   * onStartVideo
   */

  function onStartVideo() {
    const player = videoRef.current.getInternalPlayer();
    player.playVideo();
  }

  /**
   * onStopVideo
   */

  function onStopVideo() {
    const player = videoRef.current.getInternalPlayer();
    player.pauseVideo();
  }

  /**
   * onReplayVideo
   */

  function onReplayVideo() {
    const player = videoRef.current.getInternalPlayer();

    player.pauseVideo();
    player.seekTo(0);
    player.playVideo();

    const channel = client.channel(
      "livestream",
      `mylivestream-replay-${Date.now()}`,
      {
        name: "My Live Stream",
      }
    );

    setChannel(channel);

    setInterval(async () => {
      const time = await player.getCurrentTime();

      const currentMessages = messages.filter(({ time: messageTime }) => {
        const diff = time - messageTime;
        return diff <= 1 && diff > 0;
      });

      currentMessages.forEach(async ({ message }) => {
        await channel.sendMessage({
          text: message.text,
        });
      });
    }, 1000);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Stream &amp; Chat!</title>
        <meta
          name="description"
          content="Watch some youtube and chat with your friends!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!user?.id && (
          <>
            <div className="w-[500px]">
              <Image
                src="/netflixsocial.png"
                layout="responsive"
                height={250}
                width={500}
              />
            </div>

            <p className="text-xl py-10">
              To get started, enter your username or nickname below:
            </p>

            <form
              className="flex flex-col items-center space-y-5 "
              onSubmit={(e) => {
                e.preventDefault();
                const id = Array.from(e.currentTarget.elements).find(
                  ({ name }) => name === "userId"
                ).value;
                setUser({ id });
              }}
            >
              <input
                type="text"
                name="userId"
                className="bg-[#d6d6d6] rounded-sm text-xl text-black"
              />
              <button className="text-lg font-bold bg-white text-black px-10 py-1 ">
                Join
              </button>
            </form>
          </>
        )}

        {user?.id && (
          <>
            <div className={styles.stream}>
              <div className={styles.streamVideo}>
                <YouTube
                  ref={videoRef}
                  videoId="aYZRRyukuIw"
                  opts={{
                    height: "900",
                    width: "1500",
                    playerVars: {
                      controls: 0,
                    },
                  }}
                />
                <p className="space-x-2 p-5">
                  <button
                    className="bg-[white] rounded-md font-bold text-black px-5 py-1"
                    onClick={onStartVideo}
                  >
                    Start
                  </button>
                  <button
                    className="bg-[white] rounded-md font-bold text-black px-5 py-1"
                    onClick={onStopVideo}
                  >
                    Stop
                  </button>
                  <button
                    className="bg-[white] rounded-md font-bold text-black px-5 py-1"
                    onClick={onReplayVideo}
                  >
                    Replay
                  </button>
                </p>
              </div>

              <div>
                {client && channel && (
                  <Chat client={client} theme="livestream dark">
                    <Channel channel={channel}>
                      <Window>
                        <ChannelHeader live />
                        <VirtualizedMessageList />
                        {!channel.id.includes("replay") && (
                          <MessageInput Input={MessageInputFlat} focus />
                        )}
                      </Window>
                    </Channel>
                  </Chat>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
