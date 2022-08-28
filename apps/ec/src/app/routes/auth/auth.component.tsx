// Layout
// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../core/types/theme.type';

// Layout
import AppContainer from '../../core/layout/container/container.component';

// Components
import AppSignIn from '../../core/components/sign-in/sign-in.component';
import AppSignUp from '../../core/components/sign-up/sign-up.component';

// Component Styles
const useAuthStyles = createUseStyles(({ spacing, screens }: Theme) => ({
  inner: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: spacing[24],
    padding: [spacing[24], spacing[0]],
    // [`${screens['@sm']}`]: { padding: [spacing[0], spacing[4]] },
    // [`${screens['@md']}`]: { padding: [spacing[0], spacing[8]] },
    [`${screens['@lg']}`]: { flexDirection: 'row' },
    // [`${screens['@xl']}`]: { padding: [spacing[0], spacing[16]] },
  },
}));

// @Component
const AppAuth = () => {
  const { inner } = useAuthStyles();

  return (
    <AppContainer fluid={false}>
      <div className={inner}>
        <AppSignIn />
        <AppSignUp />
      </div>
    </AppContainer>
  );
};

export default AppAuth;
