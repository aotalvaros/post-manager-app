import '../styles/contentHtmlSwal.scss';

interface IProps{
    title: string,
    body: string
}

export const ContentHtmlSwal = ({ title, body}: IProps) => {
  return (
    <div>
        <section className='swal-content'>
            <label htmlFor="swal-input-title" >
                <strong>Título:</strong>
            </label>
            <input 
                type='text'
                id="swal-input-title"
                placeholder="Escribe el título"
                defaultValue={title}
            />
        </section>
        <section className='swal-content'>
            <label htmlFor="swal-input-body">
                <strong>Contenido:</strong>
            </label>
            <textarea 
                id="swal-input-body"
                placeholder="Escribe el contenido"
                defaultValue={body}
            ></textarea>
        </section>
    </div>
  )
}
