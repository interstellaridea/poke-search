import React, { Component } from 'react';

const PokeRender = ({data}) => {
  return (
    <ul key={data.id}>
    <img height='50%' width='50%' alt={data.name} src={data.pic} />
    <li>name: {data.name}</li>
    <li>type: {data.types.map( ({type}) => `${type.name} ` )}</li>
    <li>weight: {data.weight}</li>
    <li>height: {data.height}</li>
    <li>base exp: {data.base_experience}</li>
    </ul>
  )
}

export default PokeRender;