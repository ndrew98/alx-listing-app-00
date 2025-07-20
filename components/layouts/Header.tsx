const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">LuxStay</div>
      <nav className="space-x-4 text-sm hidden md:flex">
        <a href="#" className="hover:text-blue-500">
          Rooms
        </a>
        <a href="#" className="hover:text-blue-500">
          Mansions
        </a>
        <a href="#" className="hover:text-blue-500">
          Countryside
        </a>
      </nav>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
        />
        <button className="text-sm text-blue-600">Sign in</button>
        <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
