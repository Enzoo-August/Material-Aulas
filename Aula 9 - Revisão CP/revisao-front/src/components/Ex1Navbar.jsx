import "./Ex1Navbar.css";

export default function Ex1Navbar() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        
        {/* LOGO à esquerda */}
        <a href="#" className="text-xl font-bold tracking-wide">
          Revisão Front End - Ex1
        </a>

        {/* MENU à direita */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#sobre" className="nav-link">Sobre</a></li>
          <li><a href="#contatos" className="nav-link">Contatos</a></li>
          <li><a href="#projetos" className="nav-link">Projetos</a></li>
          <li><a href="#login" className="nav-link">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
