'use client'

import { useParams } from "next/navigation";
import data from './../../data.json';

export default function Place(){

    const params = useParams<{slug: string}>();

    console.log(params.slug.replace('%20', '-')) 

    const d = data.places.find(e=>e.name == params.slug.split('-').join(' '))
    
    console.log(d)

    return('hello place')

}