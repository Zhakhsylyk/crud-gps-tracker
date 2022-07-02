import { Backdrop, CircularProgress } from '@mui/material'
import React, { Fragment } from 'react'

export const Loading = () => {
  return (
    <Fragment>
        <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </Fragment>
  )
}
