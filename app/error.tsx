"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  //   console.log("Error", error);

  return (
    <div className="flex flex-col items-center justify-center v-screen h-screen">
      <div className="mb-3">An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};
export default ErrorPage;
