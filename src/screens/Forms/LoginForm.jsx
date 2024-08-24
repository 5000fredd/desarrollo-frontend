import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, clearFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import LogoutModal from "../../components/LogoutModal";

import { useState } from "react";

const LoginForm = () => {

    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedValues = {
            ...values,
            password: values.password.trim()
        };
        console.log('Form values:', trimmedValues);
        dispatch(saveFormData(trimmedValues));
        setShowModalInfo(true);
    };

    const handleLogout = (event) => {
        event.preventDefault();
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        dispatch(clearFormData());
        resetForm(); 
        setShowLogoutModal(false);
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <ModalInfo
                visible={showModalInfo}
                message={form.modalMessage}
                onClose={hideModalInfo}
            />
            <LogoutModal
                visible={showLogoutModal}
                onConfirm={confirmLogout}
                onCancel={() => setShowLogoutModal(false)}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="password-input"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                        >
                            {showPassword ? '👁️' : '🙈'}
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="logout-button"
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
