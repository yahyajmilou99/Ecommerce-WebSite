import Navbar from '@/Layouts/Navbar';
import React from 'react';
import Section1 from './Components/Section1';
import { Head } from '@inertiajs/react';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

export default function Home() {



    return (
        <>
            <Head title='Home' />
            <Section1 />
            <Section2 />
            <Section3 />
            <div className="h-[120vh] "></div>

        </>
    )

}

Home.layout = page => <Navbar children={page} />