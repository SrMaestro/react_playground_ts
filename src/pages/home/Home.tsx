interface HomeProps {
  titulo: string
  texto : string
}

function Home({titulo, texto}: HomeProps) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  )
}

export default Home