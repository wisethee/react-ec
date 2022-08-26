// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Utils
import classNames from '../../utils/class-names.utils';

// Component Types
type Position = 'start' | 'center' | 'end' | undefined;

type AppContainerProps = {
  children: React.ReactNode;
  fluid?: boolean;
  align?: Position;
  justify?: Position;
};

// Component Styles
const useContainerStyles = createUseStyles(({ screens, spacing }: Theme) => ({
  container: {
    display: 'flex',
    margin: '0 auto',
    position: 'relative',
    width: '100%',
    padding: [spacing[0], spacing[2]],
    [`${screens['@sm']}`]: { padding: [spacing[0], spacing[4]] },
    [`${screens['@md']}`]: { padding: [spacing[0], spacing[8]] },
    [`${screens['@lg']}`]: { padding: [spacing[0], spacing[12]] },
    [`${screens['@xl']}`]: { padding: [spacing[0], spacing[16]] },
  },
  alignStart: { alignItems: 'start' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'end' },
  justifyStart: { justifyContent: 'start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'end' },
  isFixed: {
    [`${screens['@lg']}`]: { maxWidth: '1184px' },
    [`${screens['@xl']}`]: { maxWidth: '1312px' },
  },
}));

// @Component
const AppContainer = ({
  children,
  fluid,
  align,
  justify,
}: AppContainerProps) => {
  const {
    container,
    alignStart,
    alignCenter,
    alignEnd,
    justifyStart,
    justifyCenter,
    justifyEnd,
    isFixed,
  } = useContainerStyles();

  return (
    <div
      className={classNames(
        container,
        align === 'start' && alignStart,
        align === 'center' && alignCenter,
        align === 'end' && alignEnd,
        justify === 'start' && justifyStart,
        justify === 'center' && justifyCenter,
        justify === 'end' && justifyEnd,
        !fluid && isFixed
      )}
    >
      {children}
    </div>
  );
};

// Component Default Props
AppContainer.defaultProps = {
  fluid: true,
  align: 'start',
  justify: 'start',
};

export default AppContainer;
