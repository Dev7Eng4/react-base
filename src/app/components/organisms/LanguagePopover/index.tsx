import React, { useMemo, useState } from 'react';

import { Avatar, ListItemIcon, ListItemText, MenuItem, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';

import english from 'assets/lang/english.svg';
import vietnamese from 'assets/lang/vietnamese.svg';

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  padding: '4px 8px',

  ':hover': {
    borderRadius: '4px',
  },
}));

const LanguagePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const { t, i18n } = useTranslation();

  const langs = useMemo(
    () => [
      {
        value: 'en',
        label: t(translations.common.lang.en),
        icon: english,
      },
      {
        value: 'vi',
        label: t(translations.common.lang.vi),
        icon: vietnamese,
      },
    ],
    [t],
  );

  const open = Boolean(anchorEl);

  const currentLang = useMemo(() => {
    return langs.find(lang => i18n.language === lang.value) || langs[0];
  }, [i18n, langs]);

  const onPopoverOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onPopoverClose = () => {
    setAnchorEl(null);
  };

  const onChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    onPopoverClose();
  };

  return (
    <>
      <Avatar
        onClick={onPopoverOpen}
        onMouseEnter={onPopoverOpen}
        alt="Language"
        src={currentLang.icon}
        sx={{
          cursor: 'pointer',
          zIndex: '1000',
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableRestoreFocus
        onClose={onPopoverClose}
        PaperProps={{
          sx: {
            top: '65px !important',
            width: 200,
            p: '5px',
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          },
        }}
      >
        {langs.map(lang => (
          <MenuItemStyle
            key={lang.value}
            selected={lang.value === currentLang.value}
            onClick={() => onChangeLang(lang.value)}
          >
            <ListItemIcon
              sx={{
                width: '20px',
                mr: 1,
              }}
            >
              <img src={lang.icon} alt={lang.value} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: 'body1' }} data-language={lang.value}>
              {lang.label}
            </ListItemText>
          </MenuItemStyle>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
