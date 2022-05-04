import React, {FC} from "react";
import {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink as RouterLink, matchPath, useLocation} from 'react-router-dom';
import {alpha, useTheme, styled} from '@mui/material/styles';
import {Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, Grid} from '@mui/material';
import {useTranslation} from "react-i18next"
import Iconify from './Iconify';
import {INavItemProps, INavSectionProps} from "@/components/NavSection";


const ListItemStyle = styled<any>((props) => <ListItemButton disableGutters {...props} />)(({theme}) => ({
  ...theme.typography.body2,
  height: 40,
  lineHeight: 1,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));



const NavItem: FC<INavItemProps> = ({item, active}) => {
  // const isDesktop = useResponsive('up', 'lg');
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

  // if (children) {
  //   return (
  //     <>
  //       <ListItemStyle
  //         onClick={handleOpen}
  //         sx={{
  //           ...(isActiveRoot && activeRootStyle),
  //         }}
  //       >
  //         <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
  //         <ListItemText disableTypography primary={title} />
  //         {info && info}
  //         <Iconify
  //           icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
  //           sx={{ width: 16, height: 16, ml: 1 }}
  //         />
  //       </ListItemStyle>
  //
  //       <Collapse in={open} timeout="auto" unmountOnExit>
  //         <List component="div" disablePadding>
  //           {children.map((item) => {
  //             const { title, path } = item;
  //             const isActiveSub = active(path);
  //
  //             return (
  //               <ListItemStyle
  //                 key={title}
  //                 component={RouterLink}
  //                 to={path}
  //                 sx={{
  //                   ...(isActiveSub && activeSubStyle),
  //                 }}
  //               >
  //                 <ListItemIconStyle>
  //                   <Box
  //                     component="span"
  //                     sx={{
  //                       width: 4,
  //                       height: 4,
  //                       display: 'flex',
  //                       borderRadius: '50%',
  //                       alignItems: 'center',
  //                       justifyContent: 'center',
  //                       bgcolor: 'text.disabled',
  //                       transition: (theme) => theme.transitions.create('transform'),
  //                       ...(isActiveSub && {
  //                         transform: 'scale(2)',
  //                         bgcolor: 'primary.main',
  //                       }),
  //                     }}
  //                   />
  //                 </ListItemIconStyle>
  //                 <ListItemText disableTypography primary={title} />
  //               </ListItemStyle>
  //             );
  //           })}
  //         </List>
  //       </Collapse>
  //     </>
  //   );
  // }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
        display: {xs: 'none', md: 'block'},
        px: 2
      }}
    >
      <ListItemText disableTypography primary={t(title)} />
      {info && info}
    </ListItemStyle>
  );
}

const NavSectionHorizontal: FC<INavSectionProps> = ({navConfig, ...other}) => {
  const {pathname} = useLocation();

  const match = (path) => (path ? !!matchPath({path, end: false}, pathname) : false);

  return (
    <Box {...other}>
      <Grid container direction="row" sx={{px: {xs: 0, md: 1}}} >
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match}/>
        ))}
      </Grid>
    </Box>
  );
}

export default NavSectionHorizontal