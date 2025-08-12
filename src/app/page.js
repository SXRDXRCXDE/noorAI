import Landing from "@/pages/landing/landing";
import AOSWrapper from "@/app/context/AOSWrapper";


export default function Home() {
  return (
      <div className={'w-full h-auto overflow-x-hidden'}>
          <AOSWrapper><Landing/></AOSWrapper>
      </div>
  );
}
