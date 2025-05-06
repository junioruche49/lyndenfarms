"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Alert, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function SigninForm() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<undefined | string>(undefined);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    setLoading(true);
    setErrorMsg(undefined);
    // signIn("credentials", {
    //   username: values.username,
    //   password: values.password,
    //   redirect: false,
    //   callbackUrl: "/dashboard",
    // }).then((values) => {
    //   if (values?.ok) {
    //     return router.push("/dashboard");
    //   } else {
    //     setLoading(false);
    //     if (values?.status === 401) {
    //       setErrorMsg("Invalid password or username");
    //     } else {
    //       setErrorMsg("Kindly try again!");
    //     }
    //   }
    // });
    if (
      values.username == "admin@example.com" &&
      values.password === "qwerty"
    ) {
      return router.push("/dashboard");
    } else {
      setLoading(false);
      setErrorMsg("Invalid password or username");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
    setLoading(false);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="username" rules={[{ required: true, min: 5 }]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, min: 5 }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" href="/forgot-password">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <button
          color="success"
          className="bg-green-500 w-full text-white p-2 rounded-md flex gap-4 justify-center disabled:bg-slate-600"
          type="submit"
          disabled={loading}
        >
          Sign In
          {loading && <Spin indicator={<LoadingOutlined spin />} />}
        </button>
      </Form.Item>
      {errorMsg && (
        <Alert
          message={errorMsg}
          type="error"
          showIcon
          closable
          afterClose={() => {
            setErrorMsg(undefined);
          }}
        />
      )}
    </Form>
  );
}

export default SigninForm;
