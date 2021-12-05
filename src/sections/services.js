import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';

import ai from 'assets/artificial-intelligence.png';
import db from 'assets/database.png';
import drone from 'assets/drone.png';
import robot from 'assets/military.png';
import chip from 'assets/chip.png';
import code from 'assets/code.png';
import hand from 'assets/hand.png';
import drink from 'assets/drink.png';

const SERVICES_DATA = [
  {
    image: db,
    text:
      'Submodule under Bio-robotics. ',
    heading: 'Controls/Planning',
    path: '#',
  },
  {
    image: robot,
    text:
      'Submodule under Bio-robotics. ',
    heading: 'Designing/Materials',
    path: '#',
  },
  {
    image: ai,
    text:
      'Submodule under Bio-robotics. ',
    heading: 'Deep Learning',
    path: '#',
  },
  {
    image: drone,
    text:
      'Submodule under Bio-robotics. ',
    heading: 'SLAM',
    path: '#',
  },
  {
    image: hand,
    text:
      'Submodule under IMPDG. ',
    heading: 'Design',
    path: '#',
  },
  {
    image: chip,
    text:
      'Submodule under IMPDG. ',
    heading: 'Embedded',
    path: '#',
  },
  {
    image: code,
    text:
      'Submodule under IMPDG. ',
    heading: 'Software',
    path: '#',
  },
  {
    image: drink,
    text:
      'TFSML bro',
    heading: 'TFSML',
    path: '#',
  }
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Our Team"
          text="No one can whistle a symphony. It takes a whole orchestra to play it. – H.E. Luccock"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
