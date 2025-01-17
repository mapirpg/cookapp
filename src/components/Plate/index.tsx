import React from 'react';

import { styles } from './styles';
import plateImg from '../../assets/plate.png';

import { MotiImage } from 'moti';

export function Plate() {

  const animation = {
    
  }
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        rotate: '200deg',
        // opacity: 0
      }}
      animate={{
        rotate: '0deg',
        // opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        // repeat: 3
        // loop: true,
        // repeatReverse: false
      }}
    />
  );
}