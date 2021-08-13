import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserManageBlock } from './styled/UserManageBlock.styled';

interface ComponentProps {
  userEmail: string
  signOut: () => void
}

const UserManage: FC<ComponentProps> = ({ userEmail, signOut }) => {
  const signOutHandler = () => {
    signOut();
  };

  return (
    <UserManageBlock>
      <IconButton
        onClick={signOutHandler}>
        <ExitToAppIcon />
      </IconButton>
      <span>{userEmail}</span>
    </UserManageBlock>
  );
};

export default UserManage;
