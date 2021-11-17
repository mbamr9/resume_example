import { Grid } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react'
import './Portfolio.css'
const Portfolio = () => {
    const [tabValue ,setTabvalue]= useState('all')
    return (
        <Grid container className="section">
        <Grid item className="section_title mb-4">
          <span></span>
          <h3 variant="h5"> portfolio </h3>
        </Grid>

            <Grid item>
                <Tabs value={tabValue}
                 indicatorColor='white'
                 className='custom_tabs'
                 onChange={(e)=>{ setTabvalue(e.target.value)}}>
                    
                </Tabs>
            </Grid>

        </Grid>
    )
}

export default Portfolio
