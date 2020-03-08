
import React from 'react';
import {Card} from './card';

export function Carousel(props)
{
    var scope = {
        
            height: 500
        
   };
return (
<div className="position-fixed bg-info w-100" style={scope}>
<Card/>
</div>

)
}

