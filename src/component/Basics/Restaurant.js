import React, { useState } from 'react';
import Menu from "./MenuApi";
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu);
    return (
         <>
         <MenuCard/>
         </>
    )
}

export default Restaurant
