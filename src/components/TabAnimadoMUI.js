import React from 'react';
import {Tab, Tabs} from "@material-ui/core";
import {Favorite, PersonPin, Phone} from "@material-ui/icons";

export default function TabAnimadoMUI (props){
        const [value, setValue] = React.useState(0);
        function handleChange(event, newValue) {
            setValue(newValue);
        }

    return(
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
            <Tab icon={<Phone className={value===0?'tabAnimation':''} />} aria-label="Phone" label={value===0?'Phone':''} />
            <Tab icon={<Favorite className={value===1?'tabAnimation':''} />} aria-label="Favorite" label={value===1?'Favorite':''} />
            <Tab icon={<PersonPin className={value===2?'tabAnimation':''} />} aria-label="Person" label={value===2?'Person':''} />
        </Tabs>);

}