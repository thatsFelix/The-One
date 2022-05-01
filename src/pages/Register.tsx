import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Card, Link, Container, Typography, Grid} from '@mui/material';
import useResponsive from '../hooks/useResponsive';
import Page from '../components/Page';
import Logo from '../components/Logo';
import {RegisterForm} from '../sections/auth/register';
import {useTranslation} from "react-i18next"
import LanguagePopover from "../layouts/dashboard/LanguagePopover"

const RootStyle = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({theme}) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({theme}) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const {t} = useTranslation()
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo/>
          {smUp && (
            // <Typography variant="body2">
            //   {t('register.haveAccount')}
            //   <Link variant="subtitle2" component={RouterLink} to="/login">
            //     {t('register.goLogin')}
            //   </Link>
            // </Typography>
            <Grid container spacing={1} direction="row"
                  justifyContent="end"
                  alignItems="center">
              <Grid item>
                <Typography variant="body2">
                  {t('register.haveAccount')}
                  <Link variant="subtitle2" component={RouterLink} to="/login">
                    {t('register.goLogin')}
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <LanguagePopover />
              </Grid>
            </Grid>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h4" sx={{px: 5, mt: 10, mb: 5}}>
              {t('register.slogan')}
            </Typography>
            <img alt="register" src="/static/illustrations/illustration_register.png"/>
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography variant="h4" sx={{mb: 5}} gutterBottom>
              {t('register.title')}
            </Typography>

            <RegisterForm/>

            <Typography variant="body2" align="center" sx={{color: 'text.secondary', mt: 3}}>
              {t('register.agreePolicy')}
              <Link underline="always" color="text.primary" href="#">
                {t('common.termsOfService')}
              </Link>
              {t('common.and')}
              <Link underline="always" color="text.primary" href="#">
                {t('common.privacyPolicy')}
              </Link>
              .
            </Typography>

            {!smUp && (
              <Typography variant="body2" sx={{mt: 3, textAlign: 'center'}}>
                {t('register.haveAccount')}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  {t('register.goLogin')}
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}

