export default function Ex1Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      {/* Exercício 1: Navbar responsiva com links animados */}
      <nav className="flex flex-col md:flex-row items-center justify-between gap-4 ">
        <h1 className="text-xl font-bold">Revisão Front End - Ex1</h1>
          <ul className="flex flex-col md:flex-row items-center gap-4 text-lg"> 
            <li><a href="#"></a>Home</li>
           <li><a href="#"></a>Sobre</li> 
           <li><a href="#"></a>Contatos</li>
            <li><a href="#"></a>Projetos</li> 
            <li><a href="#"></a>Login</li> 
            </ul>
        
      </nav>
    </header>
  );
}
