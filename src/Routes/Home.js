import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Home = () => {

  const images = [
    { url: "https://zibasham.ir/images/com_hikashop/upload/shampo-roghane-mo.jpg" },
    { url: "https://tienda.tarracoimportexport.com/img/p/2/3/9/9/2399-tm_thickbox_default.jpg" },
    { url: "https://rojestore.com/wp-content/uploads/2020/12/seliar-curl-shampooECHOSLINE.jpg" },
    { url: "https://www.firooz.com/wp-content/uploads/2013/05/shampo-narmkoonandeh1.jpg" },
    { url: "https://ctmehr.com/Content/files/mahsolat%2Farayeshi%20va%20behdashti%2Flavazeme%20behdashti%2Fshampo%20v%20moraghebat%20moo%2Fshampoo%20moo%2FAVE%2F400gr%2Fzd%20shore%2Flsza0.jpg" },
  ]


return (
<div className='bg-indigo-600 m-4 mb-0 text-center relative' >
  <h1 className='text-xl font-bold bg-indigo-400  p-1.5 '>welcome to my compeny</h1>

  <div className='w-[500px]  ' >
    <img className='m-3' src='https://api.bizmlm.ir/image/_MAINSLIDE/calanderSlide.jpg/1400' alt="img" />
    <h4 className='bg-indigo-400 ml-6 p-1'> <b>بیز مبتکر بازاریابی شبکه ای نوین</b> </h4>
  </div>
  <div className='p-3 my-4 '>
    <SimpleImageSlider
      width={500}
      height={400}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>


  
  <div className='bg-indigo-300 m-3 p-4 text-right text-sm  ' dir='rtl' >
    <h4>نشانی دفتر پشتیبانی :</h4>
    <p>ایران - تهران- سهروردی شمالی - خیابان هویزه شرقی پلاک ۵۰</p>
    <h4>نشانی دفتر مــرکـــــزی :</h4>
    <p>ایران - تهران - سهروردی شمالی - کــــوچه تـهـــمـتــن - پـلـاک 8</p>
    <h4>واحد بازرسی مرکز امور اصناف و بازرگانان :</h4>
    <b>
      ٢٦٤٢١٢٨٩
      -٠٢١ , ٢٦٤٢١١٩٦-٠٢١
    </b>

  </div>
</div>
)}
export default Home