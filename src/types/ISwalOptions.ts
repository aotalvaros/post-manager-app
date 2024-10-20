export interface ISwalOptions {
    title: string;
    text?: string;
    icon?: 'warning' | 'success' | 'info';
    confirmButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    preConfirm?: () => any;
    html?: HTMLElement | string;
}