import Navbar from '@/Layouts/Navbar';
import React from 'react';
import Section1 from './Components/Section1';
import { Head } from '@inertiajs/react';

export default function Home() {

    

    return (
        <>
        <Head title='Home'/>
            <Section1/>
        </>
    )

}

Home.layout = page => <Navbar children={page}/>