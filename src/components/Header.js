import { HiMenu } from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <div className="border-b-[1px] px-6 py-6 desktop:px-12 desktop:py-6">
        <div className="flex flex-row items-center justify-between desktop:justify-evenly">
          <div className="">
            <h1 className="cursor-pointer font-sans font-bold text-2xl desktop:text-3xl">
              Cyom
            </h1>
          </div>
          <div className="hidden desktop:flex flex-row items-center space-x-1 desktop:space-x-3">
            <a className="text-xs desktop:text-[16px] cursor-pointer underline-offset-4 hover:underline">
              Noticias
            </a>
            <a className="text-xs desktop:text-[16px] cursor-pointer underline-offset-4 hover:underline">
              Información
            </a>
            <a className="text-xs desktop:text-[16px] cursor-pointer underline-offset-4 hover:underline">
              Blog
            </a>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex desktop:hidden cursor-pointer">
              <HiMenu className="text-[#ffffff]" />
            </div>
            <a className="px-2 py-2 desktop:px-2 desktop:py-2 text-sm cursor-pointer rounded-sm font-bold bg-[#343434] text-white">
              Temas Relevantes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
