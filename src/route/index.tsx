import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages/Main';
import { LoginPage } from '../pages/Login';
import { ListPage } from '../pages/List';
import { HistoryPage } from '../pages/History';
import { JoinPage } from '../pages/Join';
import { InvitePage } from '../pages/Invite';
import { GuestLoginPage } from '../pages/GuestLogin';

/**
 * 어느 url에 어떤 페이지를 보여줄지 정해주는 컴포넌트입니다.
 * Routes 안에 Route 컴포넌트를 넣어서 사용합니다.
 */
export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list/:age" element={<ListPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/guest/login/:url" element={<GuestLoginPage />} />
      <Route path="/invite/:url" element={<InvitePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}
