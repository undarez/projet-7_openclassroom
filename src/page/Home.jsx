import React from 'react';
import ImageBanner from '../components/Body/ImageBanner'
// import ContainerCard from '../components/card/Card';
import ListeAppart from '../components/ListeAppart/ListeAppart';
// import de l'image de la banniere
import bakgroundbanniere from '../asset/banniereAcceuil.png'
const home = () => {
  return (
    <div>
      <ImageBanner src={bakgroundbanniere} alt="logo de banniere" />
      {/* <ContainerCard/> */}
      <ListeAppart/>
      </div>
  )
}

export default home
