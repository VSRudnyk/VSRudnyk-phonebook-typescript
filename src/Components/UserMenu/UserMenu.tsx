import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import authSelectors from '../../redux/authSelectors';
import { useLogoutMutation } from '../../redux/authAPI';
import { Container, Avatar, Name } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const [logOut] = useLogoutMutation();
  const name = useSelector(authSelectors.getUsername);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <Container>
      <Name>{name}</Name>
      <Avatar src={avatar} alt="avatar" />
      <Button
        type="button"
        variant="text"
        color="primary"
        size="small"
        onClick={logOut}
      >
        <LogoutIcon />
      </Button>
    </Container>
  );
}
