import { Outlet } from 'react-router-dom';

const AppMain = () => {
  return (
    <main id="app-main" role="main">
      <Outlet />
    </main>
  );
};

export default AppMain;
