import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Card, Link, Container, Typography, Grid,} from '@mui/material';
import useResponsive from '../hooks/useResponsive';
import Page from '../components/Page';
import Logo from '../components/Logo';
import {LoginForm} from '../sections/auth/login';
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import LanguagePopover from "../layouts/dashboard/LanguagePopover"

// ----------------------------------------------------------------------

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

export default function Login() {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const {t} = useTranslation();

  const switchLanguage = () => {
    const current = i18next.language
    if (current === "zh_CN") {
      i18next.changeLanguage("en")
    } else {
      i18next.changeLanguage("zh_CN")
    }
  }

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo/>
          {smUp && (
            <Grid container spacing={1} direction="row"
                  justifyContent="end"
                  alignItems="center">
              <Grid item>
                <Typography variant="body2">
                  {t("login.noAccount")}
                  <Link variant="subtitle2" component={RouterLink} to="/register">
                    {t("login.getStart")}
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
            <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
              {t('login.slogan')}
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login"/>
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" sx={{mb: 5}} gutterBottom>
              {t('login.title')}
            </Typography>

            <LoginForm/>

            {!smUp && (
              <Typography variant="body2" align="center" sx={{mt: 3}}>
                  {t("login.noAccount")}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  {t("login.getStart")}
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
