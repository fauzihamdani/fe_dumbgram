import AuthContext from '../../contexts/auth/authContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

function FormRegister({ handleClose, moveToLogin }) {
   const history = useHistory();
   const authContext = useContext(AuthContext);
   const { isLogin, login } = authContext;

   //=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= onchange Register input controller=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
   const [formLogin, setFormLogin] = useState({
      email: '',
      password: '',
   });
   const { email, password } = formLogin;

   const onChangeLogin = (e) => {
      const updateForm = { ...formLogin };
      updateForm[e.target.name] = e.target.value;
      setFormLogin(updateForm);
   };
   // =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
   const submitRegister = () => {
      login();
      if (isLogin) {
         history.push('/feed');
      }
   };

   return (
      <div className="modal-background login">
         <h1>Register</h1>
         <form>
            <input
               type="text"
               name="email"
               id=""
               //    value=""
               placeholder="Email"
            />
            <input
               type="text"
               name="name"
               id=""
               //    value=""
               placeholder="Name"
            />
            <input
               type="text"
               name="username"
               id=""
               //    value=""
               placeholder="Username"
            />
            <input
               type="password"
               name="password"
               id=""
               //    value=""
               placeholder="Password"
            />
            <div
               className="submit-login button-a clicked"
               onClick={submitRegister}
            >
               <p>Register</p>{' '}
            </div>
         </form>
         <div style={{ display: 'flex', marginTop: '2rem' }}>
            <p style={{ color: 'white', margin: 'auto', fontSize: '1.5rem' }}>
               Already have an account ? Klik{' '}
               <span
                  onClick={moveToLogin}
                  style={{ fontWeight: 'bold', cursor: 'pointer' }}
               >
                  {' '}
                  Here
               </span>
            </p>
         </div>
      </div>
   );
}

export default FormRegister;
