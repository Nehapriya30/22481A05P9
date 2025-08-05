import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { LoggerContext } from '../App';

function UrlForm({ setUrls, urls }) {
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const { logEvent } = useContext(LoggerContext);

  const handleSubmit = () => {
    if (!longUrl.startsWith('http')) {
      logEvent('error', 'Invalid URL format');
      alert('Please enter a valid URL.');
      return;
    }

    let finalValidity = parseInt(validity);
    if (isNaN(finalValidity)) finalValidity = 30;

    const newShortUrl = {
      longUrl,
      shortcode: shortcode || Math.random().toString(36).substring(2, 7),
      validity: finalValidity,
      createdAt: new Date().toISOString(),
      clicks: [],
    };

    // Check for shortcode uniqueness
    if (urls.some(url => url.shortcode === newShortUrl.shortcode)) {
      logEvent('error', 'Shortcode collision detected');
      alert('Shortcode already in use. Try another.');
      return;
    }

    setUrls([...urls, newShortUrl]);
    logEvent('info', 'Short URL created', newShortUrl);
    setLongUrl('');
    setValidity('');
    setShortcode('');
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12}><Typography variant="h6">Shorten a URL</Typography></Grid>
      <Grid item xs={12}><TextField label="Long URL" fullWidth value={longUrl} onChange={e => setLongUrl(e.target.value)} /></Grid>
      <Grid item xs={6}><TextField label="Validity (mins)" fullWidth value={validity} onChange={e => setValidity(e.target.value)} /></Grid>
      <Grid item xs={6}><TextField label="Custom Shortcode" fullWidth value={shortcode} onChange={e => setShortcode(e.target.value)} /></Grid>
      <Grid item xs={12}><Button variant="contained" onClick={handleSubmit}>Shorten</Button></Grid>
    </Grid>
  );
}

export default UrlForm;
