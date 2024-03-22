import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '40px 0',
    backgroundColor: '#f8f9fa',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  subTitle: {
    color: '#f90',
    marginBottom: '15px',
    textTransform: 'uppercase',
    fontSize: '1.4rem',
    fontWeight: 600,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '15px',
    marginTop: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
  },
}));

const CustomersSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <Typography  sx={{ fontFamily: 'Montserrat',color: '#f90', marginBottom: '15px', textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 600 }}>
          Our customers
        </Typography>
        <Typography  sx={{fontFamily: 'Montserrat', color: '#27254d', marginBottom: '20px', fontSize: '2.7rem', fontWeight: 600 }}>
          Trusted by thousands of happy customers
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center" style={{ padding: '0 15px' }}>
        {[
          { name: 'Amazon', src: 'https://db-ip.com/img/customers/amazon.png' },
          { name: 'Fujitsu', src: 'https://db-ip.com/img/customers/fujitsu.png' },
          { name: 'Microsoft', src: 'https://db-ip.com/img/customers/microsoft.png' },
          { name: 'Samsung', src: 'https://db-ip.com/img/customers/samsung.png' },
          { name: 'EA', src: 'https://db-ip.com/img/customers/ea.png' },
          { name: 'Telstra', src: 'https://db-ip.com/img/customers/telstra.png' },
        ].map((customer, index) => (
          <Grid item lg={2} md={6} key={index}>
            <img src={customer.src} alt={customer.name} className={classes.image} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default CustomersSection;
