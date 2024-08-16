"use client"
import CountUp from 'react-countup';

import React from 'react'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp 
        decimals={4}
            decimal=","
            prefix="$"
            end={amount} />
</div>
  )
}

export default AnimatedCounter