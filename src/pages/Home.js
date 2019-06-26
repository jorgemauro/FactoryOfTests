import React from 'react';
import TabAnimadoMUI from '../components/TabAnimadoMUI';
import {Tabs, Tab, AppBar, Grow} from '@material-ui/core';
import {Phone,Favorite, PersonPin} from '@material-ui/icons';
class Home extends React.Component {
    render() {

        return (
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw',height:'100vh' }}>
               <TabAnimadoMUI/>
            </div>
        );
    }
}

export default Home;
