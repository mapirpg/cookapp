import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

import { MotiView, useAnimationState } from 'moti';

export function Toggle() {
  const [toogleIsOpen, setToogleIsOpen] = useState(false)

  const toogleAnimationState = useAnimationState({
    closed: {
      height: 70
    },
    open: {
      height: 170
    }
  })

  function handleOpenToogle() {
    toogleAnimationState.transitionTo('open')
    setToogleIsOpen(true)
  }

  function handleCloseToogle() {
    toogleAnimationState.transitionTo('closed')
    setToogleIsOpen(false)
  }

  return (
    <MotiView 
      style={styles.container}
      state={toogleAnimationState}
    >
      <Pressable  
        onPressIn={handleOpenToogle}
        onPressOut={handleCloseToogle}
      >
      { !toogleIsOpen ?
        <MotiView
          from={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [
              { value: 0, type: 'timing' },
              { value: 1.1, type: 'spring' },
              { value: 1, type: 'timing' }
            ]
          }}
          
        >
          <Feather
            name="tag"
            color={theme.colors.white}
            size={26}
          />
        </MotiView>
      :
        <MotiView
          from={{
            rotate: '0deg',
            opacity: 0
          }}
          animate={{
            rotate: '90deg',
            opacity: 1
          }}
          transition={{
            type: 'timing',
          }}
        >
          <Feather
            name="x"
            color={theme.colors.white}
            size={26}
          />
        </MotiView>
      }
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.label}>
          Calories
        </Text>

        <Text style={styles.value}>
          150
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Weight
        </Text>

        <Text style={styles.value}>
          190g
        </Text>
      </View>
    </MotiView >
  );
}