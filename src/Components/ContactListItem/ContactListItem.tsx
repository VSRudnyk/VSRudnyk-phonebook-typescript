import { useState } from 'react';
import { Dialog } from '@mui/material';
import { ContactForm } from '../ContactForm';
import { BackgroundLetterAvatars } from '../BackgroundLetterAvatars/BackgroundLetterAvatars';
import {
  Item,
  NameContainer,
  ItemContainer,
  Name,
} from './ContactListItem.styled';

interface Contact {
  _id: string;
  name: string;
  number: string;
}

export const ContactListItem = ({ _id, name, number }: Contact) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Item>
      <div onClick={handleClickOpen}>
        <ItemContainer>
          <NameContainer>
            <BackgroundLetterAvatars avatarName={name} />
            <Name>{name}</Name>
            <Name>{number}</Name>
          </NameContainer>
        </ItemContainer>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <ContactForm
          type="update"
          itemData={{ name, number }}
          id={_id}
          closeModal={handleClose}
        />
      </Dialog>
    </Item>
  );
};
