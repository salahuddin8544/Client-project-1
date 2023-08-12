import React from 'react';
import AnimationItem from './AnimationItem';

const Animation = () => {
    const knowledges = [
      
        {
            title:'JAVASCRIPT',
            description1:'Can solve problems',
            description2:'Good at DOM',
            description3:'Know Core Functions',
            update:'Last updated 3 mins ago',
        },
        {
            title:'REACT',
            description1:'Core things and components',
            description2:'Good at Redux',
            description3:'NPM GIT JSX and More',
            update:'Last updated 3 mins ago',
        },
        {
            title:'NODE JS',
            description1:'Package Management',
            description2:'Databases and Node JS NPM',
            description3:'Source & Security',
            update:'Last updated 3 mins ago',
        },
        {
            title:'MongoDB',
            description1:'MongoDb Essential',
            description2:'Performance',
            description3:'Data Security',
            update:'Last updated 3 mins ago',
        },
        {
           
            title:'EXPRESS JS',
            description1:'Done Concept',
            description2:'Good at Express',
            description3:'Good at Express',
            update:'Last updated 3 mins ago',
        },
        {
            title:'MERN STACK',
            description1:'Whole things',
            description2:'Best in MERN',
            description3:'Projects',
            update:'Last updated 3 mins ago',
        },
        
    ]
    return (
        <div>
            <section>
                
                <iframe className='w-full' height="315" src="https://www.youtube.com/embed/S_REUE9Mow0?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section>
                <div className='w-11/12 mx-auto py-16'>
                    <h3 className='text-3xl mb-4'>3D Animation</h3>
                    <p>Computer animation can be very detailed 3D animation, while 2D computer animation (which may have the look of traditional animation) can be used for stylistic reasons, low bandwidth, or faster real-time renderings. Other common animation methods apply a stop motion technique to two- and three-dimensional objects like paper cutouts, puppets, or clay figures. A cartoon is an animated film, usually a short film, featuring an exaggerated visual style. The style takes inspiration from comic strips, often featuring anthropomorphic animals, superheroes, or the adventures of human protagonists. Especially with animals that form a natural predator/prey relationship (e.g. cats and mice, coyotes and birds), the action often centers on violent pratfalls such as falls, collisions, and explosions that would be lethal in real life. The illusion of animation—as in motion pictures in general—has traditionally been attributed to the persistence of vision and later to the phi phenomenon and beta movement, but the exact neurological causes are still uncertain. The illusion of motion caused by a rapid succession of images that minimally differ from each other, with unnoticeable interruptions, is a stroboscopic effect. While animators traditionally used to draw each part of the movements and changes of figures on transparent cels that could be moved over a separate background, computer animation is usually based on programming paths between key frames to maneuver digitally created figures throughout a digitally created environment.</p>
                </div>
            </section>
            <section>
            <div className='bg-yellow  w-full border-t-4 border-b-4 border-b-black border-t-yellow'>
        <div className='w-5/6 mx-auto py-20 text-white'>
        <h2 className='text-4xl mb-6'>KNOWLEDGE</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            knowledges.map((knowledge, i)=>
                <AnimationItem
                key={i}
                knowledge ={knowledge}
                ></AnimationItem>)
        }
        </div>
        </div>
        </div>
            </section>
        </div>
    );
};

export default Animation;