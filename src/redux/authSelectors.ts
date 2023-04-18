import { RootState } from './store';

const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const getUsername = (state: RootState) => state.auth.user.name;
const getToken = (state: RootState) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
};
export default authSelectors;
