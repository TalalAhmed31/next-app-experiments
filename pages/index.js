import React from 'react'
import Greet from '@/components/greet'
import Button from '@/components/Button'
import List from '@/components/List'

const index = () => {
  const arr = ["This is an item", "This is an item 2", "This is an item 3"]
  return (
    <div>
      <Greet/>

      <List arr={arr}/>
      <Button text="Add"/>
    </div>
  )
}

export default index
