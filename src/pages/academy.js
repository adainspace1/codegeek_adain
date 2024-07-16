import AcademyHero1 from '@/components/academyhero1';
import AcademyTypo from '@/components/academytypo';
import AdainNavBar from '@/components/navbar';
import React from 'react';


const Academy = ()=>{

    return(
        <>
        <AdainNavBar/>
        <AcademyTypo/>
        <AcademyHero1/>
        </>
    );
}

export default Academy;