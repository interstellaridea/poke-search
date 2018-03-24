import React from 'react';
import _ from 'lodash';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarRadiusAxis, PolarAngleAxis, Legend, Tooltip } from 'recharts';


export default (pokemon) => {
  return (
    <RadarChart width={730} height={250} outerRadius={90} data={pokemon.stats} margin={{top: 5, right: 4, bottom: -10, left: 5}}>
    <Radar name={`${_.capitalize(pokemon.name)}`} dataKey="base_stat" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <PolarGrid />
    <PolarAngleAxis dataKey="spec" />
    <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
    <Tooltip />
    <Legend />
    </RadarChart>
  )
}