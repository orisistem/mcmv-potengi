// Potengi CE — Material Design 3 Theme Tokens
// Source: https://www.potengi.ce.gov.br
// Theme based on the institutional colors of the Government of the Municipality of Potengi - Ceará

interface ColorScale {
  base: string;
  light?: string;
  lighter?: string;
  pale?: string;
  dark?: string;
}

interface SemanticColors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  shadow: string;
  scrim: string;
}

interface TypographyToken {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing?: string;
}

interface MotionTokens {
  duration: Record<string, string>;
  easing: Record<string, string>;
}

interface PropsTheme {
  source: string;
  name: string;
  version: string;
  description: string;
  primary: ColorScale;
  secondary: ColorScale;
  tertiary: ColorScale;
  error: ColorScale & { container: string; onContainer: string };
  success: {
    base: string;
    light: string;
    container: string;
    onContainer: string;
  };
  warning: {
    base: string;
    light: string;
    container: string;
    onContainer: string;
  };
  info: { base: string; light: string; container: string; onContainer: string };
  lightScheme: SemanticColors;
  darkScheme: SemanticColors;
  elevation: Record<string, string>;
  typography: {
    fontFamily: string;
    displayLarge: TypographyToken;
    displayMedium: TypographyToken;
    displaySmall: TypographyToken;
    headlineLarge: TypographyToken;
    headlineMedium: TypographyToken;
    headlineSmall: TypographyToken;
    titleLarge: TypographyToken;
    titleMedium: TypographyToken;
    titleSmall: TypographyToken;
    bodyLarge: TypographyToken;
    bodyMedium: TypographyToken;
    bodySmall: TypographyToken;
    labelLarge: TypographyToken;
    labelMedium: TypographyToken;
    labelSmall: TypographyToken;
  };
  shape: Record<string, string>;
  motion: MotionTokens;
  components: Record<string, Record<string, string | Record<string, string>>>;
}

export const propsTheme: PropsTheme = {
  source: 'https://www.potengi.ce.gov.br',
  name: 'PropsTheme',
  version: '1.0.0',
  description:
    'Theme Material Design 3 based on the institutional colors of the Government of the State of Ceará',
  primary: {
    base: '#003366',
    light: '#1A5CA0',
    lighter: '#4A80C4',
    pale: '#D6E6F5',
    dark: '#002244',
  },
  secondary: {
    base: '#007A4D',
    light: '#4CAF7D',
    lighter: '#80D4A6',
    pale: '#D4F0E0',
    dark: '#005534',
  },
  tertiary: {
    base: '#C8900A',
    light: '#E5AD2E',
    lighter: '#F5D06B',
    pale: '#FFF3D0',
    dark: '#8A6200',
  },
  error: {
    base: '#C62828',
    light: '#EF5350',
    lighter: '#FF8A80',
    pale: '#FFCDD2',
    dark: '#8E0000',
    container: '#FFDAD6',
    onContainer: '#410002',
  },
  success: {
    base: '#2E7D32',
    light: '#66BB6A',
    container: '#C8E6C9',
    onContainer: '#002106',
  },
  warning: {
    base: '#E65100',
    light: '#FF9800',
    container: '#FFE0B2',
    onContainer: '#4A1E00',
  },
  info: {
    base: '#0277BD',
    light: '#4FC3F7',
    container: '#B3E5FC',
    onContainer: '#002D4F',
  },
  lightScheme: {
    primary: '#003366',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D6E6F5',
    onPrimaryContainer: '#001D3A',
    secondary: '#007A4D',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#D4F0E0',
    onSecondaryContainer: '#002112',
    tertiary: '#C8900A',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFF3D0',
    onTertiaryContainer: '#3F2D00',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FAFCFF',
    onBackground: '#1A1D24',
    surface: '#FAFCFF',
    onSurface: '#1A1D24',
    surfaceVariant: '#DFE4EB',
    onSurfaceVariant: '#43484F',
    outline: '#737880',
    outlineVariant: '#C3C7CF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F4F6FA',
    surfaceContainer: '#EEF1F5',
    surfaceContainerHigh: '#E8EBF0',
    surfaceContainerHighest: '#E2E6EA',
    inverseSurface: '#2F3239',
    inverseOnSurface: '#F0F1F4',
    inversePrimary: '#A8C8F0',
    shadow: '#000000',
    scrim: '#000000',
  },
  darkScheme: {
    primary: '#A8C8F0',
    onPrimary: '#003060',
    primaryContainer: '#004788',
    onPrimaryContainer: '#D6E6F5',
    secondary: '#80D4A6',
    onSecondary: '#003920',
    secondaryContainer: '#005534',
    onSecondaryContainer: '#D4F0E0',
    tertiary: '#F5D06B',
    onTertiary: '#413600',
    tertiaryContainer: '#9C6F00',
    onTertiaryContainer: '#FFF3D0',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#121418',
    onBackground: '#E2E6EA',
    surface: '#121418',
    onSurface: '#E2E6EA',
    surfaceVariant: '#43484F',
    onSurfaceVariant: '#C3C7CF',
    outline: '#8D9199',
    outlineVariant: '#43484F',
    surfaceContainerLowest: '#0D0F13',
    surfaceContainerLow: '#1A1D24',
    surfaceContainer: '#1E2128',
    surfaceContainerHigh: '#282B33',
    surfaceContainerHighest: '#33363E',
    inverseSurface: '#E2E6EA',
    inverseOnSurface: '#2F3239',
    inversePrimary: '#003366',
    shadow: '#000000',
    scrim: '#000000',
  },
  elevation: {
    level0: 'none',
    level1: '0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)',
    level2: '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)',
    level3: '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.3)',
    level4: '0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.3)',
    level5: '0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px 0 rgba(0,0,0,0.3)',
  },
  typography: {
    fontFamily: "'DM Sans', 'Roboto', sans-serif",
    displayLarge: {
      fontSize: '57px',
      lineHeight: '64px',
      fontWeight: 400,
      letterSpacing: '-0.25px',
    },
    displayMedium: {
      fontSize: '45px',
      lineHeight: '52px',
      fontWeight: 400,
    },
    displaySmall: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 400,
    },
    headlineLarge: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 600,
    },
    headlineMedium: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 600,
    },
    headlineSmall: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    titleLarge: {
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: 600,
    },
    titleMedium: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      letterSpacing: '0.15px',
    },
    titleSmall: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 600,
      letterSpacing: '0.1px',
    },
    bodyLarge: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0.5px',
    },
    bodyMedium: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: '0.25px',
    },
    bodySmall: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
      letterSpacing: '0.4px',
    },
    labelLarge: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 600,
      letterSpacing: '0.1px',
    },
    labelMedium: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    labelSmall: {
      fontSize: '11px',
      lineHeight: '16px',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    none: '0px',
    extraSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px',
    full: '9999px',
  },
  motion: {
    duration: {
      short1: '50ms',
      short2: '100ms',
      short3: '150ms',
      short4: '200ms',
      medium1: '250ms',
      medium2: '300ms',
      medium3: '350ms',
      medium4: '400ms',
      long1: '450ms',
      long2: '500ms',
      long3: '550ms',
      long4: '600ms',
    },
    easing: {
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
      standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
      emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
      emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
      linear: 'cubic-bezier(0, 0, 1, 1)',
    },
  },
  components: {
    button: {
      filled: {
        containerColor: 'primary',
        contentColor: 'onPrimary',
        borderRadius: 'full',
        horizontalPadding: '24px',
        verticalPadding: '10px',
        height: '40px',
      },
      filledTonal: {
        containerColor: 'secondaryContainer',
        contentColor: 'onSecondaryContainer',
        borderRadius: 'full',
        horizontalPadding: '24px',
        verticalPadding: '10px',
        height: '40px',
      },
      outlined: {
        containerColor: 'transparent',
        contentColor: 'primary',
        borderColor: 'outline',
        borderRadius: 'full',
        horizontalPadding: '24px',
        verticalPadding: '10px',
        height: '40px',
      },
      text: {
        containerColor: 'transparent',
        contentColor: 'primary',
        borderRadius: 'full',
        horizontalPadding: '12px',
        verticalPadding: '10px',
        height: '40px',
      },
    },
    card: {
      filled: {
        containerColor: 'surfaceContainerLow',
        contentColor: 'onSurface',
        borderRadius: 'medium',
        elevation: 'level1',
      },
      elevated: {
        containerColor: 'surfaceContainerLow',
        contentColor: 'onSurface',
        borderRadius: 'medium',
        elevation: 'level1',
      },
      outlined: {
        containerColor: 'surface',
        contentColor: 'onSurface',
        borderColor: 'outlineVariant',
        borderRadius: 'medium',
      },
    },
    appBar: {
      containerColor: 'surface',
      contentColor: 'onSurface',
      scrolledContainerColor: 'surfaceContainer',
      height: '64px',
      elevation: 'level2',
    },
    navigationBar: {
      containerColor: 'surfaceContainer',
      contentColor: 'onSurfaceVariant',
      indicatorColor: 'secondaryContainer',
      height: '80px',
    },
    chip: {
      containerColor: 'surfaceContainerHighest',
      contentColor: 'onSurfaceVariant',
      borderRadius: 'small',
      elevation: 'level0',
    },
    fab: {
      containerColor: 'primaryContainer',
      contentColor: 'onPrimaryContainer',
      borderRadius: 'large',
      elevation: 'level3',
      size: '56px',
    },
  },
} as const;
