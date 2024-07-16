import AcademyHero1 from '@/components/academyhero1';
import AcademyTypo from '@/components/academytypo';
import Footer from '@/components/footer';
import AdainNavBar from '@/components/navbar';
import ImageSlider from '@/components/slider';
import React from 'react';


const Academy = ()=>{

    return(
        <>
        <AdainNavBar/>
        <AcademyTypo/>
        <AcademyHero1/>
        <ImageSlider/>
        <Footer/>
        </>
    );
}

export default Academy;