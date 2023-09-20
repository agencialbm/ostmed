import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/Sidebar';
import { HomeContainer, HomeContext } from './styled';
import { CustomFooter } from '@/components/CustomFooter';


export function DefaultLayout() {

  return (
    <>
      <HomeContainer>
        <Sidebar />
        <HomeContext>

          <Outlet />

          <CustomFooter  />
        </HomeContext>
      </HomeContainer>
    </>
  );
}
