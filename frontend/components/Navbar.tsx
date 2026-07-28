import Brand from "./brand";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Brand />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Features</li>
          <li className="cursor-pointer hover:text-blue-600">Roadmap</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

        {/* Profile Icon */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg hover:bg-gray-200">
          👤
        </button>
      </div>
    </nav>
  );
}