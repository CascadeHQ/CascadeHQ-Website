import Google from './images/google-1-1.svg';
import CocaCola from './images/coca-cola-2021.svg';
import JPMorgan from './images/jp-morgan.svg';
import Microsoft from './images/microsoft-6.svg';
import Nike from './images/nike-11.svg';
import Nvidia from './images/nvidia.svg';


const Marquee = () => {
  return (
    <>
    
      <section className={`relative flex items-center justify-center overflow-x-hidden`}>
        <div className={`grid grid-cols-6 items-center justify-center gap-4 md:gap-14  animate-marquee whitespace-nowrap`}>
          <img src={Google} alt="Google Logo" className={`mix-blend-color-burn		`}/>
          <img src={CocaCola} alt="CocaCola Logo" className={`mix-blend-color-burn		`}/>
          <img src={JPMorgan} alt="JPMorgan Logo" className={`mix-blend-color-burn		`}/>
          <img src={Microsoft} alt="Microsoft Logo" className={`mix-blend-color-burn		`}/>
          <img src={Nike} alt="Nike Logo" className={`mix-blend-color-burn		`}/>
          <img src={Nvidia} alt="Nvidia Logo" className={`mix-blend-color-burn		`}/>
        </div>

        <div className={`grid grid-cols-6 items-center justify-center gap-4 pl-4 animate-marqueeSec whitespace-nowrap absolute md:gap-14`}>
          <img src={Google} alt="Google Logo" className={`mix-blend-color-burn		`}/>
          <img src={CocaCola} alt="CocaCola Logo" className={`mix-blend-color-burn		`}/>
          <img src={JPMorgan} alt="JPMorgan Logo" className={`mix-blend-color-burn		`}/>
          <img src={Microsoft} alt="Microsoft Logo" className={`mix-blend-color-burn		`}/>
          <img src={Nike} alt="Nike Logo" className={`mix-blend-color-burn		`}/>
          <img src={Nvidia} alt="Nvidia Logo" className={`mix-blend-color-burn		`}/>
        </div>
      </section>
    </>
  )
}

export default Marquee