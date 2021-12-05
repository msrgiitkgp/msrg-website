import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import priceIcon1 from 'assets/price-user-1-1.svg';
import priceIcon2 from 'assets/price-user-1-2.svg';

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: 'December 2021',
    icon: priceIcon1,
    options: [
      {
        status: true,
        label: 'Complete major relevant courses on related submodules',
      },
      {
        status: true,
        label: 'Start implementaion of algorithms and code for quadruped',
      },
      {
        status: false,
        label: 'Complete all major submodule targets relating to simulation of robot',
      },
      {
        status: false,
        label: 'Work on bridging all work and presenting on paper',
      },
    ],
  },
  {
    recommended: null,
    title: 'January 2022',
    icon: priceIcon1,
    options: [
      {
        status: false,
        label: 'Work on realizing a rough offline model for the same',
      },
      {
        status: false,
        label:
          'Garner up resources and tools required for developing the full model',
      },
    ],
  },
  
  
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: '2022',
    icon: priceIcon2,
    options: [
      {
        status: false,
        label: 'Complete the MIT cheetah model',
      },
      {
        status: false,
        label:
          'Register as an official research group',
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'Short term goal',
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (plan) => {
    if (plan === 'Short term goal') {
      setPlan({
        ...plan,
        active: 'Short term goal',
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (plan === 'Long term goal') {
      setPlan({
        ...plan,
        active: 'Long term goal',
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="Aim and motivation"
          text="To work on the intersection of Mechanical Sciences and Artificial Intelligence"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan('Short term goal')}
            className={`${plan.active === 'Short term goal' ? 'active' : ''}`}
          >
            Short term
          </Button>
          <Button
            onClick={() => handlePlan('Long term goal')}
            className={`${plan.active === 'Long term goal' ? 'active' : ''}`}
          >
            Long term
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff',
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
      },
    },
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
