import { useContext } from "react"
import { Context } from "./App"
import { addtodo } from "./Counterslice"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Add() {
    const { add, Cat, Catt, dispatch, setCat } = useContext(Context)
    return (
        <>
            <Formik
                initialValues={{
                    todo: "",
                    category: "Game"
                }}

                validationSchema={Yup.object({

                    todo: Yup.string()
                        .required("Write something")

                })}

                onSubmit={(values, { resetForm }) => {

                    dispatch(addtodo({

                        id: add.length + 1,

                        name: values.todo,

                        category: values.category

                    }));

                    resetForm();

                }}
            >
                <Form className="div-black">
                    <div className="div-in">
                        <div className="div-inn">
                            <Field
                                name="todo"
                                placeholder="add"
                                className="input" />
                            <button
                                type="submit"
                                className="btn1">
                                Add
                            </button>
                            <Field
                                name="category"
                                as="select" >
                                {Catt.map((item, index) => (
                                    <option value={item.name} key={index}>
                                        {item.name}
                                    </option>
                                ))}
                            </Field>
                            <select
                                value={Cat}
                                onChange={(e) => setCat(e.target.value)}
                            >
                                {Catt.map((item, index) => (
                                    <option value={item.name} key={index}>
                                        {item.name}
                                    </option>
                                ))}
                                <option value="none">All</option>
                            </select>
                        </div>
                    </div>
                    <ErrorMessage
                        name="todo"
                        component="h4"
                        className="h4"
                    />
                </Form>
            </Formik>

        </>
    )
}
export default Add