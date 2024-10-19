import React, { Fragment, useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import { IPost } from '../../types';
import Swal from 'sweetalert2';
import { ContentHtmlSwal } from '../swal';
import { createRoot } from 'react-dom/client';

type propMenuActions = {
  data: IPost
}

export const MenuActions = ({ data }: propMenuActions) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const onShowModal = (event: string,) => {
    handleClose()
    // Creamos un div que contendrá el componente de React
    const swalContainer = document.createElement('div');
     
    createRoot(swalContainer).render(<ContentHtmlSwal />);
    Swal.fire({
      title: "Editar Comentario",
      icon: "info",
      html: swalContainer,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `Guardar`,
      cancelButtonText: `Cancelar`,
      preConfirm: () => {
        const title = (document.getElementById('swal-input-title') as HTMLInputElement).value;
        const body = (document.getElementById('swal-input-body') as HTMLTextAreaElement).value;
    
        if (!title || !body) {
          Swal.showValidationMessage('Por favor, rellena ambos campos');
          return false;
        }
    
        return { title, body };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, body } = result.value;
        console.log('Título:', title);
        console.log('Contenido:', body);
      }
    });
  }

  return (
    <Fragment>
      <IconButton 
        aria-label="delete"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AdsClickOutlinedIcon />
      </IconButton>
      <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => onShowModal('edit')}>Editar</MenuItem>
          <MenuItem onClick={() => onShowModal('delete')}>Eliminar</MenuItem>
      </Menu>
    </Fragment>
  )
}
