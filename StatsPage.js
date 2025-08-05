import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

function StatsPage({ urls }) {
  if (urls.length === 0) return <Typography sx={{ mt: 3 }}>No shortened URLs yet.</Typography>;

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {urls.map((url, index) => (
        <Grid item xs={12} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Stats for: /{url.shortcode}</Typography>
              <Typography variant="body2"><strong>Created:</strong> {new Date(url.createdAt).toLocaleString()}</Typography>
              <Typography variant="body2"><strong>Expires in:</strong> {url.validity} minutes</Typography>
              <Typography variant="body2"><strong>Total Clicks:</strong> {url.clicks.length}</Typography>
              {url.clicks.length > 0 && (
                <>
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>Click Details:</Typography>
                  {url.clicks.map((click, i) => (
                    <Typography key={i} variant="body2">
                      #{i + 1}: {new Date(click.timestamp).toLocaleString()} — {click.userAgent || 'Unknown Agent'} ({click.city || 'N/A'})
                    </Typography>
                  ))}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsPage;
