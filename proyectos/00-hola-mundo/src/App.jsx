import './App.css'
import TwiterFollowCard from './components/TwiterFollowCard'
function App() {
  const formatUserName = (userName)=>`@${userName}`;
  
  return (
    <section className='contenedorTarjetasDeUsuarios'>
      <TwiterFollowCard  formatUserName={formatUserName} userName={"holamundo"} name={"Hola Mundo"} isFollowing youFolowing></TwiterFollowCard>
      <TwiterFollowCard  formatUserName={formatUserName} userName={"midudev"} name={"Jose Angel Duran"} isFollowing youFollowing></TwiterFollowCard>
      <TwiterFollowCard  formatUserName={formatUserName} userName={"elonmusk"} name={"Elon Musk"} isFollowing={false} youFollowing={false}></TwiterFollowCard>
      <TwiterFollowCard  formatUserName={formatUserName} userName={"messias"} name={"Leo Messi"} isFollowing youFollowing></TwiterFollowCard>
      <TwiterFollowCard formatUserName={formatUserName} />
    </section>

  )

}

export default App
