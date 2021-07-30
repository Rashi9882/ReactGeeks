import React, { useState } from 'react';
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import MenuApi from './MenuApi';

const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu);
    return (
         <>
         <MenuCard/>
         <MenuApi/>
         </>
    )
}

export default Restaurant
