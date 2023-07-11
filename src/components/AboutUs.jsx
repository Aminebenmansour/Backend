import { ABOUT  } from "../assets";
import styles, { layout } from "../style";

const AboutUs = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={ABOUT} alt="AboutUs" className="w-[100%] h-[100%] relative z-[5] object-contain img-luxurious" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      A propos de nous<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Clevory Training est un centre de formation et de coaching agréé par le MFPE offrant les formations accréditées les plus prisées sur le marché.
Avec une large offre dans le domaine des TIC, du management et des soft skills. Clevory Training se positionne en tant que partenaire des entreprises pour les accompagner leur transformation digitale en relevant les nouveaux défis technologiques et managériaux.
      </p>
{/* 
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */} 
    </div>
  </section>
);
export default AboutUs ; 
