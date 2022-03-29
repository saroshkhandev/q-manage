import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const AddProduct = () => {
  return (
    <VStack h="full" w="full" p={10} align="center">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={Yup.object().shape({
          productName: Yup.string().required('Required'),
          productPrice: Yup.number().required('Required'),
          imageUrl: Yup.string().required('Required')
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
            <FormControl onSubmit={handleSubmit}>
              <VStack w="400px">
                <FormLabel htmlFor="name" style={{ display: 'block' }}>
                  Product Name
                </FormLabel>
                <Input
                  id="name"
                  placeholder="Enter Product Name"
                  type="text"
                  value={values.productName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.productName && touched.productName
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.productName && touched.productName && (
                  <div className="input-feedback">{errors.productName}</div>
                )}

                <FormLabel htmlFor="price" style={{ display: 'block' }}>
                  Product Price
                </FormLabel>
                <Input
                  id="name"
                  placeholder="Enter Product Name"
                  type="text"
                  value={values.productPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.productPrice && touched.productPrice
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.productPrice && touched.productPrice && (
                  <div className="input-feedback">{errors.productPrice}</div>
                )}

                <FormLabel htmlFor="price" style={{ display: 'block' }}>
                  Image Url
                </FormLabel>
                <Input
                  id="name"
                  placeholder="Enter Product Name"
                  type="text"
                  value={values.imageUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.imageUrl && touched.imageUrl
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.imageUrl && touched.imageUrl && (
                  <div className="input-feedback">{errors.imageUrl}</div>
                )}

                <HStack gap={2}>
                  <Button
                    colorScheme="teal"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </HStack>
              </VStack>
            </FormControl>
          )
        }}
      </Formik>
    </VStack>
  )
}

export default AddProduct
