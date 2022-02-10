import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ErrorMess from './ErrorMess';
;



let schema = yup.object({
    Name: yup.string().required("Name required"),
    email: yup.string().required("email required").email("Enter A vaild email"),
    number: "",
    password: yup.string().matches("(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])^.{10,}$","password unick").required("password required"),
    gender: "",
    Date: "",
    Income: ""
});
function Formi() {
    console.log(yup);
    return <div className='mt-6'>
        <div className="container mx-auto row">
            <div className="mx-auto  p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <Formik
                    validationSchema={schema}
                    initialValues={{ Name: "", email: "", number: "", password: "", gender: "", Date: "", Income: "" }}
                    onSubmit={v => console.log(v)}>
                    <Form className="space-y-6"  >
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign Up to our platform
                        </h3>
                        <div>
                            <label
                                htmlFor="Name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Name
                            </label>
                            <Field
                                type="Name"
                                name="Name"
                                id="Name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Enter Your Name"
                                required=""
                            />
                            <ErrorMessage name="Name"  />
                       </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                                required=""
                            />
                            <ErrorMess name="email"  />
                        </div>
                        <div>
                            <label
                                htmlFor="number"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Mobile Number
                            </label>
                            <Field
                                type="number"
                                name="number"
                                id="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Enter Your Mobile Number"
                                required=""
                            />
                        </div>
                        <div className="">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your Gender
                            </label>
                            <div className='flex  align-middle'>
                                <label htmlFor='male'>  Male :</label>
                                <Field type="radio" name="gender" value="male" id="male" className="my-auto mx-2" />
                                <label htmlFor='femal'>  Femle :</label>
                                <Field type="radio" name="gender" value="femal" id="femal" className="my-auto mx-2" />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="Date"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Birth Date
                            </label>
                            <Field
                                type="Date"
                                name="Date"
                                id="Date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="Income"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Income
                            </label>
                            <Field
                                as="select"
                                name="Income"
                                id="Income"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required=""
                            >
                                <option value=""> Your Income</option>
                                <option value="0"> 0 Rs.</option>
                                <option value="10000"> 10000 Rs.</option>
                                <option value="50000"> 50000 Rs.</option>
                            </Field>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your password
                            </label>
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required=""

                            />
                             <ErrorMess name="password"  />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Lost Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?{" "}
                            <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                Create account
                            </a>
                        </div>
                    </Form>
                </Formik>
            </div>


        </div>
        <h1>Subham ghosh</h1>
    </div>;
}

export default Formi;
