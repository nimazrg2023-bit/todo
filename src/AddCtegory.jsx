import { useContext } from "react"
import { Context } from "./App"
import { addCat } from "./Counterslice"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function AddCategory() {
    const { dispatch } = useContext(Context)
    return (
        <>
            <Formik
                initialValues={{
                    category: ""
                }}
                validationSchema={Yup.object({

                    category: Yup.string()
                        .required("Write something")

                })}
                onSubmit={(values, { resetForm }) => {

                    dispatch(addCat({


                        name: values.category


                    }));

                    resetForm();

                }}

            >
                <Form className="div-out">
                    <div>
                        <Field
                            name="category"
                            placeholder="addCategory"
                        />
                        <button type="submit">
                            Add
                        </button>
                    </div>
                    <ErrorMessage
                        name="category"
                        component="h4"
                        className="h4"
                    />
                </Form>
            </Formik>
        </>
    )
}
export default AddCategory