import Loader from "react-loader-spinner";

export default function OvalLoader() {
  return (
    <Loader
      className="flex h-screen justify-center items-center"
      type="Oval"
      color="#FF6D6D"
      height={100}
      width={100}
    />
  );
}
