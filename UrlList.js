import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function UrlList({ urls }) {
  if (urls.length === 0) return null;

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {urls.map((url, index) => (
        <Grid item xs={12} key={index}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1"><strong>Short URL:</strong> http://localhost:3000/{url.shortcode}</Typography>
              <Typography variant="body2"><strong>Original URL:</strong> {url.longUrl}</Typography>
              <Typography variant="body2"><strong>Valid for:</strong> {url.validity} minutes</Typography>
              <Typography variant="body2"><strong>Created:</strong> {new Date(url.createdAt).toLocaleString()}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UrlList;
