import '../styles/contentHtmlSwal.scss';

export const ContentHtmlSwal = () => {
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
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
            />
        </section>
        <section className='swal-content'>
            <label htmlFor="swal-input-body">
                <strong>Contenido:</strong>
            </label>
            <textarea 
                id="swal-input-body"
                placeholder="Escribe el contenido"
                
                // value={body}
                // onChange={(e) => setBody(e.target.value)}
            ></textarea>
        </section>
    </div>
  )
}
