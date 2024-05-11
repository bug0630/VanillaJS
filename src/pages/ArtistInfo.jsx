import Header from '../components/header/Header'
import ArtistBanner from '../components/Artist/ArtistBanner'
import ArtistDetails from '../components/Artist/ArtistDetails';
import Artwork from '../components/Artist/Artwork';
import Recommend from '../components/Artist/Recommend';
import Footer from '../components/footer/Footer'



export default function Artist() {
    const modifiedH1=(props)=>{
        return <h1>{props.children}</h1> 
    }
     
  return (
    <div>
      <Header />
      <ArtistBanner h1Text="아티스트 소개" /> 
      {modifiedH1({ children: "" })}
      <ArtistDetails/>
      <Artwork/>
      <Recommend/>
      <Footer />
    </div>
  );
}
