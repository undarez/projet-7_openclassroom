import React from 'react'
import '../../scss/utils/ImageBanner.scss';
// import bakgroundbanniere from '../../asset/banniereAcceuil.png'

const ImageBanner = (props) => {
    return (
        <main >
            <div className='container-bg'>

                <section className='container-bg'>
                    <div className='overlay-banniere'></div>
                    <img className='bg-Banniere' src={props.src} alt={props.alt} />
                    {/* <img className='bg-Banniere' src={bakgroundbanniere} alt="logo de banniere" /> */}
                    <div className='text-banniere'>Chez vous, partout et ailleur</div>
                </section>
            </div>
        </main>
    )
}
export default ImageBanner



