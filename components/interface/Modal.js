import {
  PlusIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import { CheckIcon, HeartIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconFilled } from "@heroicons/react/solid";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import MuiModal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieModalState, movieState } from "../../atoms/modalAtom";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../../firebase";

export default function Modal() {
  const [showModal, setShowModal] = useRecoilState(movieModalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(false);
  const { user } = useAuth();
  const [addedToWatchLater, setAddedToWatchLater] = useState(false);
  const [addedToRecommended, setAddedToRecommended] = useState(false);
  const [addedToLiked, setAddedToLiked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  const toastStyle = {
    background: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "9999px",
    maxWidth: "1000px",
  };

  // Find all the movies in the watch later list &  Check if the movie is already in the watch later list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, "customers", user.uid, "watchLater"),
        (snapshot) => setMovies(snapshot.docs)
      );
    }
  }, [db, movie?.id]);

  useEffect(
    () =>
      setAddedToWatchLater(
        movies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [movies]
  );

  // Find all the movies in the recommended list & Check if the movie is already in the recommended list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, "customers", user.uid, "recommended"),
        (snapshot) => setRecommendedMovies(snapshot.docs)
      );
    }
  }, [db, movie?.id]);

  useEffect(
    () =>
      setAddedToRecommended(
        recommendedMovies.findIndex(
          (result) => result.data().id === movie?.id
        ) !== -1
      ),
    [recommendedMovies]
  );

  // Find all the movies in the liked list & Check if the movie is already in the liked list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, "customers", user.uid, "liked"),
        (snapshot) => setLikedMovies(snapshot.docs)
      );
    }
  }, [db, movie?.id]);

  useEffect(
    () =>
      setAddedToLiked(
        likedMovies.findIndex((result) => result.data().id === movie?.id) !== -1
      ),
    [likedMovies]
  );

  // ------------------------------ Adding the movies to the appropriate list ---------------------
  const handleWatchLater = async () => {
    if (addedToWatchLater) {
      await deleteDoc(
        doc(db, "customers", user.uid, "watchLater", movie?.id.toString())
      );
      toast(
        `${
          movie?.title || movie?.original_name
        } has been removed from Watch Later list`,
        { duration: 3000, style: toastStyle }
      );
    } else {
      await setDoc(
        doc(db, "customers", user.uid, "watchLater", movie?.id.toString()),
        { ...movie }
      );
      toast(
        `${
          movie?.title || movie?.original_name
        } has been added to Watch Later list`,
        { duration: 3000, style: toastStyle }
      );
    }
  };

  const handleRecommended = async () => {
    if (addedToRecommended) {
      await deleteDoc(
        doc(db, "customers", user.uid, "recommended", movie?.id.toString())
      );
      toast(
        `${
          movie?.title || movie?.original_name
        } has been removed from Recommended list`,
        { duration: 3000, style: toastStyle }
      );
    } else {
      await setDoc(
        doc(db, "customers", user.uid, "recommended", movie?.id.toString()),
        { ...movie }
      );
      toast(
        `${
          movie?.title || movie?.original_name
        } has been added to Recommended list`,
        { duration: 3000, style: toastStyle }
      );
    }
  };

  const handleLiked = async () => {
    if (addedToLiked) {
      await deleteDoc(
        doc(db, "customers", user.uid, "liked", movie?.id.toString())
      );
      toast(
        `${
          movie?.title || movie?.original_name
        } has been removed from Liked list`,
        { duration: 3000, style: toastStyle }
      );
    } else {
      await setDoc(
        doc(db, "customers", user.uid, "liked", movie?.id.toString()),
        { ...movie }
      );
      toast(
        `${movie?.title || movie?.original_name} has been added to Liked list`,
        { duration: 3000, style: toastStyle }
      );
    }
  };

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-[8rem] left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="relative pt-[56.25%]">
          {/* mute state to turn the volume on or off */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-4 w-4 text-black" />
                Play
              </button>
              <button className="modalButton" onClick={handleWatchLater}>
                {addedToWatchLater ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
              </button>
              <button className="modalButton" onClick={handleRecommended}>
                {addedToRecommended ? (
                  <ThumbUpIconFilled className="h-7 w-7" />
                ) : (
                  <ThumbUpIcon className="h-7 w-7" />
                )}
              </button>
              <button className="modalButton" onClick={handleLiked}>
                {addedToLiked ? (
                  <HeartIconFilled className="h-7 w-7" />
                ) : (
                  <HeartIcon className="h-7 w-7" />
                )}
              </button>
            </div>
            {/* click volume button to set bool of muted on or off (true or false) */}
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-6">
          <div className="space-y-2 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-yellow-400">
                {Math.round(movie.vote_average * 10) / 10} Stars
              </p>
              <p className="font-semibold text-green-500">
                {movie?.vote_count} Likes
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>

                <div>
                  <span className="text-[gray]">Lang: </span>
                  {movie?.original_language}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
