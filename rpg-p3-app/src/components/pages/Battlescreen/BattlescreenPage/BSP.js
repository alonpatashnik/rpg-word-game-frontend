import React, { useState } from 'react';
import AttackBar from './AttackBar'
import Avatar from './Avatar'
import Enemy from './Enemy'
import ProgressBar from './ProgressBar'
import Timer from './Timer'

export default function BSP(){
    //I don't know if this needs to be "home", since we already have a homescreen? I think I will call it something else, and if we need to change it, then coooooool.
    const [currentPage, setCurrentPage] = useState('Game');
        const renderPage = () => {
            if (currentPage === 'AttackBar'){
                return <AttackBar />
            }
            if (currentPage === 'Avatar'){
                return <Avatar />
            }
            if (currentPage === 'Enemy'){
                return <Enemy />
            }
            if (currentPage === 'ProgressBar'){
                return <ProgressBar />
            }
            if (currentPage === 'Timer'){
                return <Timer />
            }

    // I don't know if I need to set the page, truthfully? so I'm just going to follow my guide, and if we need to change it later???
        const handlePageChange = (page) => setCurrentPage(page);

        
        return(
            <section>
                <BattlescreenPage currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage}
            </section>
        )}};