'use client'

import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange defaultTheme="light" {...props} />
  )
}

export function useColorMode() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme('light')
  }, [setTheme])

  const toggleColorMode = () => {
  
  }

  return {
    colorMode: 'light',
    setColorMode: setTheme,
    toggleColorMode, 
  }
}

export function useColorModeValue(light, dark) {
  return light
}

export function ColorModeIcon() {
  return <LuSun /> 
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize='8' />}>
        <IconButton
          onClick={toggleColorMode} 
          variant='ghost'
          aria-label='Toggle color mode'
          size='sm'
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  },
)
