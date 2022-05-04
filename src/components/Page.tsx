import React, {ExoticComponent} from 'react';
import {Helmet} from 'react-helmet-async';
import {Component, forwardRef} from 'react';
import {Box} from '@mui/material';

interface IPageProps {
  title: string
  meta?: Component
  children?: React.ReactNode
}

const Page = forwardRef<ExoticComponent, IPageProps>(({children, title = '', meta, ...other}, ref) => (
  <>
    <Helmet>
      <title>{`${title} | THEONE`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
))


export default Page;
