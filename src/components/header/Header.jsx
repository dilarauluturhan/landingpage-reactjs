import { Cat } from "lucide-react";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between py-14">
        <div>
          <Cat size={40} color="#A3B763" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-x-10 text-lg font-base">
          <div className="cursor-pointer hover:text-sideColor">About</div>
          <div className="cursor-pointer hover:text-sideColor">Blog</div>
          <div className="cursor-pointer hover:text-sideColor">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
