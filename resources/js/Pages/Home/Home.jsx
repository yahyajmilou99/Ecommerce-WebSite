import Navbar from '@/Layouts/Navbar';
import React from 'react';
import { Head } from '@inertiajs/react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Footer from '@/Layouts/Footer';

export default function Home() {



    return (
        <>
            <Head title='Home' />
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />

        </>
    )

}
