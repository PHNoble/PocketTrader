import React, {Component} from 'react';
import {
    View
} from 'native-base';
import {VictoryChart, VictoryAxis, VictoryCandlestick, VictoryTheme, VictoryZoomContainer} from 'victory-native';

const Candlestick = ({data}) => (
    <VictoryChart theme={VictoryTheme.material}
        scale={{x: 'time'}}
        containerComponent={
            <VictoryZoomContainer />
        }
    >
        
        <VictoryCandlestick
            candleColors={{ positive: "#2CA58D", negative: "#c43a31" }}
            data={data}
        />
    </VictoryChart>
)

export default Candlestick