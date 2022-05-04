import React, {FC} from "react";
import {useState} from 'react';
import {NavLink as RouterLink, matchPath, useLocation, LinkProps} from 'react-router-dom';
import {alpha, useTheme, styled} from '@mui/material/styles';
import {Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, ExtendButtonBase} from '@mui/material';
import Iconify from './Iconify';
import {useTranslation} from "react-i18next"
import {ListItemButtonProps, ListItemButtonTypeMap} from "@mui/material/ListItemButton/ListItemButton";
import {OverridableComponent} from "@mui/material/OverridableComponent";

const ListItemStyle = styled((props) => <ListItemButton
  disableGutters {...props} />)<ListItemButtonProps>(({theme}) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export interface INavItemProps {
  item: {
    path: string
    title: string
    icon?: string
    info?: string
    children?: Array<{
      path: string
      title: string
    }>
  }
  active: (params: any) => any,
}

const NavItem: FC<INavItemProps> = ({item, active}) => {
  const {t} = useTranslation()
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const {title, path, icon, info, children} = item;
  const [open, setOpen] = useState(isActiveRoot);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  const handle = () => {
    console.log("handle")
  }

  if (children) {
    return (
      <>
        <ListItemButton component="a" onClick={() => {
          console.log("ListItemButton Clicked")
        }} href="#simple-list">
          <ListItemText primary="Spam"/>
        </ListItemButton>
        {/*ExtendButtonBase<ListItemButtonTypeMap>*/}

        <ListItemStyle onClick={handleOpen} sx={{
          ...(isActiveRoot && activeRootStyle),
        }}>
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={t(title)}/>
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{width: 16, height: 16, ml: 1}}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const {title, path} = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={t(title)}/>
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={t(title)}/>
      {info && info}
    </ListItemStyle>
  );
}

export interface INavSectionProps {
  navConfig: Array<{
    path: string
    title: string
  }>,
}

const NavSection: FC<INavSectionProps> = ({navConfig, ...other}) => {
  const {pathname} = useLocation();

  const match = (path) => (path ? !!matchPath({path, end: false}, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{p: 1}}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match}/>
        ))}
      </List>
    </Box>
  );
}

export default NavSection
