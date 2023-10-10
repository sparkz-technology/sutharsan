import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    skill: Yup.string().required('Skill is required'),
    category: Yup.string().required('Category is required'),
    percentage: Yup.number().required('Percentage is required').min(0, 'Percentage must be at least 0'),
    image: Yup.mixed().required('Image is required'),
});

function AdminLayout() {
    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('skill', values.skill);
        formData.append('category', values.category);
        formData.append('percentage', values.percentage);
        formData.append('image', values.image);

        try {
            const response = await axios.post('http://localhost:8000/skill', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            console.log(response.data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h1>Admin Layout</h1>
            <Formik
                initialValues={{
                    skill: '',
                    category: '',
                    percentage: 0,
                    image: null,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="skill">Skill</label>
                        <Field type="text" id="skill" name="skill" />
                        <ErrorMessage name="skill" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="category">Category</label>
                        <Field type="text" id="category" name="category" />
                        <ErrorMessage name="category" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="percentage">Percentage</label>
                        <Field type="number" id="percentage" name="percentage" />
                        <ErrorMessage name="percentage" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="image">Image</label>
                        <Field type="file" id="image" name="image" />
                        <ErrorMessage name="image" component="div" className="error" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default AdminLayout;
