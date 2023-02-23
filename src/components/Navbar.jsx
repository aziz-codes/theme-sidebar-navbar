import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full flex h-14">
      <div className="px-6 sm:px-2 w-full flex justify-between items-center relative dark:bg-slate-800 dark:text-white">
        <Bars3Icon className="icons" />

        <div className="flex items-center gap-2 border rounded-lg max-w-sm w-96 p-1">
          <MagnifyingGlassIcon className="icons cursor-default" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-80 rounded-md "
          />
        </div>
        <div className="relative sm:flex gap-2 hidden">
          <div className="h-8 w-8 rounded-full bg-sky-300"></div>
          <div className="h-8 w-8 rounded-full bg-sky-300"></div>
          <div className="h-8 w-8 rounded-full bg-sky-300"></div>
        </div>
      </div>
    </div>
  );
};
// test commit

export default Navbar;
