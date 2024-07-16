import Footer from '@/components/footer';
import AdainNavBar from '@/components/navbar';
import ImageSlider from '@/components/slider';
import ExampleComponent from '@/components/typecompo';
import React from 'react'

const About = ()=>{

    return(
        <>
        <AdainNavBar/>
       <ExampleComponent/>
       <ImageSlider/>



        <Footer/>
        </>
    );
}

export default About;