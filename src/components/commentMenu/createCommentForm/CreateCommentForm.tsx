import "../../styles/createCommentForm.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../../types";
import { useDispatch } from "react-redux";
import { setValue } from "../../../store/form/createFormSlice";
import uuid from "react-uuid";
import Swal from "sweetalert2";

export const CreateCommentForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Swal.fire({
      title: "Crear comentaro",
      text: "El comentaro ha sido creado correctamente",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 5000,
    }).then(() => {
      dispatch(
        setValue({
          title: data.title,
          content: data.content,
          id: uuid(),
        })
      );
      reset();
    });
  };

  return (
    <div className="form-container" data-testid='create-comment'>
      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">Nuevo Formulario</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content">
            <section className="form-group">
              <input
                type="text"
                id="title"
                className="form-input"
                placeholder=" "
                {...register("title", { required: true })}
              />
              <label htmlFor="title" className={`form-label float`}>
                Título
              </label>
              {errors.title && (
                <div className="error-message">
                  El campo titulo es requerido
                </div>
              )}
            </section>

            <section className="form-group">
              <textarea
                id="content"
                className="form-textarea"
                {...register("content", { required: true })}
                placeholder=" "
              />
              <label htmlFor="content" className={`form-label float`}>
                Contenido
              </label>
              {errors.content && (
                <div className="error-message">
                  El campo contenido es requerido
                </div>
              )}
            </section>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
