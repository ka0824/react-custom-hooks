import React, { useState } from 'react';

const useTab = (initialIdx, allTab) => {
    // if (!allTab || !Array.isArray(allTab)) {
    //     return;
    // }
    const [currentIdx, setCurrentIdx] = useState(initialIdx);
    
    return {
        currentItem: allTab[currentIdx],
        changeItem: setCurrentIdx
    };
}

export default useTab;