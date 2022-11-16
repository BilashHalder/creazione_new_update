import { Button } from '@mui/material'
import React from 'react'
import Link from './Link'

export default function index() {
  return (
    <div>
       <Button sx={{textDecoration:"none"}}>
       <Link href="/test" >Hello</Link>
       </Button>
      
      
      </div>
  )
}
