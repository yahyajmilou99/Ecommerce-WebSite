import Navbar from '@/Layouts/Navbar';
import React from 'react';
import Section1 from './Components/Section1';

export default function Home() {

    

    return (
        <>
            <Section1/>
        </>
    )

}

Home.layout = page => <Navbar children={page}/>