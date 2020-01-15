import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { addLost } from '../../redux/actions/lostForm';

const LostForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.lostForm.loading)
    const result = useSelector(state => state.lostForm.result);
    console.log("Probando", result);
    if (loading) {
        return (<div> loading ... </div>)
    }
    return (
        <div className="row">
            <div className="offset-sm-3 col-sm-8">
                <h2>Formulario para animales perdidos</h2>
            </div>

            <div className="offset-sm-3 col-sm-4">
                <Formik
                    initialValues={{ race: '', characteristic: '', animalType: "" }}
                    onSubmit={(values) => {
                        dispatch(addLost({ result: "duda" }))
                        alert(JSON.stringify(values))
                    }}
                >
                    {(props) => (
                        <Form>

                            <div className="form-group">
                                <label htmlFor="race">Tipo de animal</label>
                                <Field as="select" className="form-control" name="animalType">
                                    <option value=""> Seleccione tipo de animal </option>
                                    <option value="dog"> Perro</option>
                                    <option value="cat"> Gato</option>
                                    <option value="bird"> Pajaro</option>
                                </Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="race">Raza</label>
                                <Field className="form-control" name="race"></Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="characteristic">Caracteristicas</label>
                                <Field className="form-control" component="textarea" rows="3" name="characteristic"></Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactName">Nombre contacto</label>
                                <Field className="form-control" name="contactName"></Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactEmail">Email contacto</label>
                                <Field className="form-control" name="contactEmail"></Field>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactPhone">Teléfono contacto</label>
                                <Field className="form-control" name="contactPhone"></Field>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>

                        </Form>
                    )

                    }
                </Formik>
            </div>
        </div>
    )
}

export default LostForm