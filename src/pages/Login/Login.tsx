import { useEffect, useState } from "react";
import "./Login.scss";
import { store } from "../../store/store";
import { login, selectUser } from "../../features/auth/authSlice";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { Admin } from "../../types/Admin";

const Login: React.FC = () => {
  const spansArray = Array.from({ length: 200 }, (_, index) => <span className='signin__span' key={index}></span>);

  const [loginForm, setLoginForm] = useState<Partial<Admin>>({ userName: "", password: "" });
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", loginForm);
    store.dispatch(login(loginForm));

    setLoginForm({ userName: "", password: "" });
  };

  useEffect(() => {
    if (user) {
      navigate("/admin/messages");
    }
  }, [user, navigate]);

  return (
    <section className='login__section'>
      {spansArray}
      <div className='signin'>
        <div className='signin__content'>
          <h2>Sign In</h2>

          <form className='form' onSubmit={handleSubmit}>
            <div className='inputBox'>
              <input
                className='signin__input'
                type='text'
                name='userName'
                value={loginForm.userName}
                onChange={handleChange}
                required
              />
              <i>userName</i>
            </div>

            <div className='inputBox'>
              <input
                className='signin__input'
                type='password'
                name='password'
                value={loginForm.password}
                onChange={handleChange}
                required
              />
              <i>Password</i>
            </div>

            <div className='inputBox'>
              <input className='signin__input' type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
