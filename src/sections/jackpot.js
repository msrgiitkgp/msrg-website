import React from 'react';
import { Box, Container, Flex, Image, Text, Heading } from 'theme-ui';
import JackpotCard from 'components/cards/jackpot-card';
import jackpotImage from 'assets/jackpot.png';

import brain from 'assets/implant.png';
import ai from 'assets/ai.png';
import map from 'assets/prototype.png';
import design from 'assets/design.png';
import fluid from 'assets/fluid.png';

const JACKPOT_DATA_BRG = [
  {
    image: map,
    text:
      'Path Planners, Dynamic localization',
    heading: 'Planning / Controls / SLAM',
  },
  {
    image: brain,
    text:
      'Computer Vision, Perception, Obstacle avoidance, CNNs',
    heading: 'Deep Learning',
  },
  {
    image: design,
    text:
      'Soft Robotics and material designing',
    heading: 'Designing',
  },
];

const JACKPOT_DATA_IMPDG = [
  {
    image: ai,
    text:
      'Classification, Data analytics, IoT',
    heading: 'AI',
  },
];

const JACKPOT_DATA_TFSML = [
  {
    image: fluid,
    text:
      'Core Mechanical Science and its application in ML',
    heading: 'Thermodynamics / Machine Learning',
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="span">Core features</Text>
              <Heading as="h3">Bio Robotics Group</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA_BRG.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>

        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="span">Core features</Text>
              <Heading as="h3">Intelligent Manufacturing and Product Development Group</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA_IMPDG.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
        </Flex>

        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="span">Core features</Text>
              <Heading as="h3">Thermo-Fluids Science and Machine Learning group</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA_TFSML.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  image: {
    flex: ['0 0 100%', null, null, null, null, '0 0 62.5%'],
    img: {
      maxWidth: ['100%', null, null, null, null, null, 'none'],
      float: 'right',
    },
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%'],
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px',
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ['grid', null, null, null, null, 'block'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
  },
};
