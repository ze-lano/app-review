import React from "react"
import { Button, Text, TextInput, View } from "react-native"
import { globalStyles } from "../styles/global"
import { Formik } from "formik"
import * as yup from 'yup'
import FlatButton from "../shared/button"

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('isNum1-5', "You must enter a number between 1 - 5", (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6
        })
})



export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
        <Formik
            initialValues={{title: '', body: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
                addReview(values)
            }}
        >
            {(formikProps) => (
                <View>
                    <TextInput 
                    style={globalStyles.input}
                    placeholder="Review title"
                    onChangeText={formikProps.handleChange('title')}
                    value={formikProps.values.title}
                    onBlur={formikProps.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
                    
                    <TextInput 
                    style={globalStyles.input}
                    multiline
                    placeholder="Review body"
                    onChangeText={formikProps.handleChange('body')}
                    value={formikProps.values.body}
                    onBlur={formikProps.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
                    
                    <TextInput 
                    style={globalStyles.input}
                    placeholder="Rating (1-5)"
                    onChangeText={formikProps.handleChange('rating')}
                    value={formikProps.values.rating}
                    keyboardType="numeric"
                    onBlur={formikProps.handleBlur('rating')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

                    <FlatButton text={'Submit'} onPress={formikProps.handleSubmit}/>
                    {/* <Button title='Submit' color='maroon' onPress={formikProps.handleSubmit} /> */}
                </View>
    )}
        </Formik>
        </View>
    )
}