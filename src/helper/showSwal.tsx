import Swal from 'sweetalert2';
import { ISwalOptions } from '../types';

export const showSwal = (options: ISwalOptions): Promise<any> => {
    return Swal.fire({
      title: options.title,
      text: options.text ?? '',
      icon: options.icon ?? 'info',
      confirmButtonText: options.confirmButtonText ?? 'Aceptar',
      showCancelButton: options.showCancelButton ?? false,
      cancelButtonText: options.cancelButtonText ?? 'Cancelar',
      preConfirm: options.preConfirm ?? undefined,
      html: options.html ?? undefined, 
    });
  };