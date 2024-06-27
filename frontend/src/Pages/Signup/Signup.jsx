import { Head, Link } from "@inertiajs/react";
import { Button, FormControl, InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <section className="container px-3 mx-auto flex justify-center items-center flex-col py-10">
            <Head title="SignUp" />
            <div className="flex flex-col gap-2 max-w-[450px] w-full p-5">
                <TextField
                    variant="outlined"
                    className="bg-white"
                    label="Email"
                    size="small"
                />
                <TextField
                    variant="outlined"
                    className="bg-white"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <GoEyeClosed />
                                    ) : (
                                        <RxEyeOpen />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    style={{
                        color: "white",
                        background: "#1f7e10",
                        borderRadius: "16px",
                    }}
                >
                    Войти
                </Button>
                <Link className="text-right font-medium" href="/registration">
                    Забыли пароль?
                </Link>
                <p className='text-sm text-center pt-4'>
                    Если вы впервые на сайте, заполните, пожалуйста,
                    регистрационную форму.{" "}
                    <Link
                        className="text-right font-medium"
                        href="/registration"
                    >
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SignUp;
