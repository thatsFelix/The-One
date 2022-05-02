import React, {FC} from "react";
import {Icon, IconifyIcon} from '@iconify/react';
import {Box, Theme} from '@mui/material';
import {SxProps} from "@mui/system";

// ----------------------------------------------------------------------

interface IIconify {
  icon: IconifyIcon | string,
  sx?: SxProps<Theme>,
  color?: string
  height?: number
  width?: number
}

const Iconify: FC<IIconify> = ({icon, sx, ...other}) => {
  return <Box component={Icon} icon={icon} sx={{...sx}} {...other} />;
}

export default Iconify