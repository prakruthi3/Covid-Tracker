import React from 'react';
import { connect } from 'react-redux';


import Statistics from '../../statistics/statistics.component'
import GlobeView from '../GlobeViewPage';


const Home = ({ data }) => (
    <>
        <Statistics stats={{
            confirmed: data.confirmed.latest,
            deaths: data.deaths.latest,
            recovered: data.recovered.latest,
            last_updatedConfirmed: data.confirmed.last_updated,
            last_updatedDeaths: data.deaths.last_updated,
            last_updatedRecovered: data.recovered.last_updated
        }} />
        <GlobeView />
        
    </>
);

const mapStateToProps = state => ({
    data: state.country.data,
});


export default connect(mapStateToProps, null)(Home);