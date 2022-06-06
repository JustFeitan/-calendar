import React, {FC} from 'react';
import {Form, Input, Layout} from "antd";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    username: yup.string().matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, 'Неверный формат').required(),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Неверный формат пороля').required()
})

const Login: FC = () => {
    const [form] = Form.useForm();
    form.validateFields(['username', 'password'])
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    console.log(errors)
    return (
        <Layout >
            {/* {errors.username && errors.username.message}*/}
            {/*<input {...register('username')}/>*/}
            {/* {errors.password && errors.password.message}*/}
            {/*<input {...register('password')}/>*/}
            <Form >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[
                        {pattern: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, message: 'Неверный формат'},
                        {required: true, message: 'Required'}
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[
                        {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: 'Неверный формат'},
                        {required: true, message: 'Required'}
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
            </Form>
        </Layout>
    );
};

export default Login;