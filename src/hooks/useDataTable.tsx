
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IFormState } from '../types'
import Swal from 'sweetalert2';
import { createRoot } from 'react-dom/client';
import { ContentHtmlSwal } from '../components/swal'
import { deleteData, putData } from '../api';
import { showSwal } from '../helper/showSwal';

export const useDataTable = () => {
    const contentForm = useSelector((state: RootState) => state.form);
    const [rows, setRows] = useState<IFormState[]>([]);
  
    useEffect(() => {
      if (contentForm.title !== '' && contentForm.content !== '') {
        setRows((prevRows) => [...prevRows, contentForm]);
      }
    }, [contentForm]);
  
    const handleDelete = async (index: string) => {
      const result = await showSwal({
        title: 'Eliminar',
        text: 'Esta seguro que quiere eliminar el comentario',
        icon: 'warning',
        showCancelButton: true,
      });
  
      if (result.isConfirmed) {
        await deleteData(`/posts/1`);
        showSwal({
          title: 'Eliminado',
          text: 'El comentario ha sido eliminado',
          icon: 'success',
        });
        setRows((prevRows) => prevRows.filter((row) => row.id !== index));
      }
    };
  
    const handleEdit = (index: IFormState) => {
      onShowModal(index);
    };
  
    const handlePublish = async () => {
      const result = await showSwal({
        title: 'Publicar',
        text: 'Esta seguro que quiere publicar el comentario',
        icon: 'warning',
        showCancelButton: true,
      });
  
      if (result.isConfirmed) {
        await putData('/posts/1', rows[0]);
        showSwal({
          title: 'Publicado',
          text: 'El comentario ha sido publicado con éxito',
          icon: 'success',
        });
      }
    };
  
    const onShowModal = (dataInput: IFormState) => {
      const swalContainer = document.createElement('div');
      createRoot(swalContainer).render(<ContentHtmlSwal body={dataInput.content} title={dataInput.title} />);
  
      showSwal({
        title: 'Editar Comentario',
        icon: 'info',
        html: swalContainer,
        preConfirm: () => {
          const title = (document.getElementById('swal-input-title') as HTMLInputElement).value;
          const body = (document.getElementById('swal-input-body') as HTMLTextAreaElement).value;
  
          if (!title || !body) {
            Swal.showValidationMessage('Por favor, rellena ambos campos');
            return false;
          }
  
          return { title, body };
        },
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const { title, body } = result.value;

          showSwal({
            title: 'Editado',
            text: 'El comentario ha sido editado con éxito',
            icon: 'success',
          });

          setRows((prevRows) =>
            prevRows.map((row) => (row.id === dataInput.id ? { ...row, title, content: body } : row))
          );
        }
      });
    };
  
    return {
      rows,
      handleDelete,
      handleEdit,
      handlePublish,
    }
}
