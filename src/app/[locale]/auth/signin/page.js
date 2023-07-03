'use client'

import React, { useState } from 'react'
import Input from '@/Components/input'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from '@/Components/button';
import facebookIcon from '@iconify/icons-logos/facebook'
import googleIcon from '@iconify/icons-logos/google-icon';
import forIcon from '@iconify/icons-mdi/play-arrow';
import backIcon from '@iconify/icons-mdi/play-arrow';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { AvatarCol } from '@/Components/SelectAvatar';
import teacher from '@/assets/img/teacher.png';
import logo from '@/assets/img/logo/logoColor.svg';
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react";


const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            email: 'admin@admin.com',
            password: '123456',
        },

        validationSchema: LoginSchema,

        onSubmit: async (values) => {
            setIsLoading(true);
            const { email, password } = values;
            await signIn(
                "credentials",
                {
                    email,
                    password,
                    redirect: true,
                    callbackUrl:"/dashboard"
                }

            );
            setIsLoading(false);
        },
    });

    return (
        <div className="flex flex-col h-full justify-center items-center gap-10">
            <Image
                priority
                src={logo}
                height={80}
                width={200}
                alt="Follow us on Twitter"
            />
            <div className="flex flex-col justify-start items-center w-full relative gap-4 px-8">
                <div className="flex gap-4">
                    <Icon icon={forIcon} rotate={2} className="text-light-primary cursor-pointer text-lg" />
                    <AvatarCol srcImg={teacher} />
                    <Icon icon={backIcon} className="text-light-primary cursor-pointer text-lg" />
                </div>

                <h1 className="text-light-primary font-bold text-xl">Welcome Back</h1>

                <Input
                    variant='default'
                    className="w-full h-11"
                    type="text"
                    value={formik.values.email}
                    placeholder='Email'
                    label='Email'
                    icon="bx:user"
                    onChange={formik.handleChange("email")}
                    error={formik.errors.username} />

                <Input
                    variant='default'
                    className="w-full h-11"
                    type="password"
                    value={formik.values.password}
                    placeholder='Password'
                    label='Password'
                    icon="ri:lock-password-line"
                    onChange={formik.handleChange("password")}
                    error={formik.errors.password} />

                <div className="flex justify-between w-full">
                    <p className="text-sm font-semibold text-left text-light-primary">
                        Remember password
                    </p>
                    <p className="text-sm font-semibold text-right text-orange-normal">
                        Forget your password?
                    </p>
                </div>

                <div className="flex w-full flex-col justify-start items-center relative gap-5">
                    <div className="flex flex-col w-full justify-start gap-4">

                        <Button className="rounded-7xl w-full h-11" onClick={formik.handleSubmit}>
                            {isLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : (<></>)}
                            LOGIN
                        </Button>

                        <Button className="rounded-7xl h-11 w-full bg-white justify-start gap-2 hover:bg-gray-200" >
                            <Icon icon={googleIcon} width={18} />
                            <span className="text-light-primary ">Sign in with Google</span>
                        </Button>

                        <Button className="rounded-7xl h-11 w-full bg-white justify-start gap-2 hover:bg-gray-200" >
                            <Icon icon={facebookIcon} width={18} />
                            <span className="text-sm text-light-primary ">Sign in with Facebook</span>
                        </Button>

                    </div>

                    <p className=" text-xs font-semibold text-left">
                        <span className=" text-sm font-semibold text-left text-light-primary">Don't have an account? </span>
                        <span className=" text-sm font-semibold text-left text-purple-normal">Sign Up</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
