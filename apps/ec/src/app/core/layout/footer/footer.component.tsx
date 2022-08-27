// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Layout
import AppContainer from '../container/container.component';

// Component Styles
const useFooterStyles = createUseStyles(
  ({ colors, typography, spacing }: Theme) => ({
    footer: {
      display: 'flex',
      width: '100%',
      height: spacing[24],
    },
    text: {
      fontSize: typography.fontSize.bodySmall,
      color: colors.grey[500],
      letterSpacing: '1px',
    },
  })
);

// @Component
const AppFooter = () => {
  const { footer, text } = useFooterStyles();
  return (
    <footer className={footer}>
      <AppContainer align="center" justify="center">
        <span className={text}>Designed and Developed with Love.</span>
      </AppContainer>
    </footer>
  );
};

export default AppFooter;
