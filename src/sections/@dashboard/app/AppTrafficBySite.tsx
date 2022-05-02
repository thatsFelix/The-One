import React, {FC} from "react";
import { Box, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
import { fShortenNumber } from '../../../utils/formatNumber';

interface IAppTrafficBySite {
  title: string
  subheader?: string
  list: Array<any>
}

const AppTrafficBySite: FC<IAppTrafficBySite> = ({ title, subheader, list, ...other }) => {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {list.map((site) => (
            <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

              <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default AppTrafficBySite