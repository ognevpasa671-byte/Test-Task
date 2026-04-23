export const theme = {
  colors: {
    bg: '#F4F5F7',
    surface: '#FFFFFF',
    border: '#DFE1E6',
    text: '#172B4D',
    textSecondary: '#5E6C84',
    primary: '#0052CC',
    danger: '#DE350B',
    priorityLow: '#36B37E',
    priorityMedium: '#FF991F',
    priorityHigh: '#DE350B',
    columnColors: [
      '#0052CC', 
      '#FF991F', 
      '#36B37E', 
      '#6554C0', 
      '#00B8D9', 
      '#FF5630', 
    ],
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  shadows: {
    card: '0 1px 3px rgba(0,0,0,0.12)',
    modal: '0 8px 32px rgba(0,0,0,0.18)',
  },
  fontSizes: {
    xs: '11px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '20px',
  },
};

export type Theme = typeof theme;
