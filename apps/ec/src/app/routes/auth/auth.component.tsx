// Components
import AppSignIn from '../../core/components/sign-in/sign-in.component';
import AppSignUp from '../../core/components/sign-up/sign-up.component';
import AppContainer from '../../core/layout/container/container.component';

// @Component
const AppAuth = () => {
  return (
    <AppContainer fluid={false}>
      <AppSignIn />
      <AppSignUp />
    </AppContainer>
  );
};

export default AppAuth;
