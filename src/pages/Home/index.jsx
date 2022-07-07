import './styles.css'

export function Home() {
  return (
    <div className='home'>
      <h1>Lista de Presenca</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Enviar</button>
    </div>
  );
}
