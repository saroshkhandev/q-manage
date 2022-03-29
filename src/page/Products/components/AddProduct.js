import { VStack } from '@chakra-ui/react'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'


const AddProduct = () => {
  return (
    <VStack>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Required'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: 'block' }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )
        }}
      </Formik>
    </VStack>
  )
}

export default AddProduct
