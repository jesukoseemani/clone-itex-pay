import { InputLabel, Typography, Button, TextField } from '@material-ui/core';
import styles from './SignIn.module.scss';
import Logo from '../../assets/images/NavLogo.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { openToastAndSetContent } from '../../redux/actions/toast/toastActions';
import { openModalAndSetContent } from '../../redux/actions/modal/modalActions';
import {
	openLoader,
	closeLoader,
} from '../../redux/actions/loader/loaderActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveAuth } from '../../redux/actions/auth/authActions';
import { saveLoading } from '../../redux/actions/loadingState/loadingStateActions';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	interface ResponseData {
		email: string;
		password: string;
	}

	const validate = Yup.object({
		email: Yup.string()
			.email('Email is invalid')
			.required('Email Address is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 charaters')
			.required('Password is required'),
	});

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);

				dispatch(openLoader());

				axios
					.post(
						'https://staging.itex-pay.com/ipg/api/v1/merchant/account/authenticate',
						{
							user: [{ ...values }],
						}
					)
					.then((res) => {
						dispatch(closeLoader());
						dispatch(saveAuth(res.data));
						dispatch(saveLoading(true));
						console.log(res.data);
						dispatch(
							openToastAndSetContent({
								toastContent: 'Login Successful',
								toastStyles: {
									backgroundColor: 'green',
								},
							})
						);
						history.push('/general_setting/account_settings');
					})
					.catch((err) => {
						console.log(err);
						dispatch(closeLoader());
						dispatch(saveLoading(false));
						dispatch(
							openToastAndSetContent({
								toastContent: 'Login Failed',
								toastStyles: {
									backgroundColor: 'red',
								},
							})
						);
					});
			}}>
			{(props) => (
				<div className={styles.signinContainer}>
					<div className={styles.logo}>
						<img src={Logo} alt='' />
					</div>
					<div className={styles.mt1}>
						<div className={styles.signinDiv}>
							<h5 className={styles.signinHeader}>Sign in to your account</h5>
							<div className={styles.mt2}>
								<Form>
									<InputLabel>
										<span className={styles.formTitle}>Email Address</span>
									</InputLabel>
									<Field
										as={TextField}
										helperText={
											<ErrorMessage name='email'>
												{(msg) => <span style={{ color: 'red' }}>{msg}</span>}
											</ErrorMessage>
										}
										name='email'
										variant='outlined'
										margin='normal'
										type='email'
										size='small'
										fullWidth
									/>
									<InputLabel>
										<span className={styles.formTitle}>Password</span>
									</InputLabel>
									<Field
										as={TextField}
										helperText={
											<ErrorMessage name='password'>
												{(msg) => <span style={{ color: 'red' }}>{msg}</span>}
											</ErrorMessage>
										}
										name='password'
										variant='outlined'
										margin='normal'
										type='password'
										size='small'
										fullWidth
									/>

									<InputLabel className={styles.mt1}></InputLabel>
									<button
										style={{
											backgroundColor: '#27AE60',
											padding: '0.7rem',
											width: '100%',
											color: '#fff',
											border: 'none',
											borderRadius: '4px',
										}}
										type='submit'
										color='primary'>
										Sign In
									</button>
									<InputLabel>
										<div className={styles.sub}>
											<p className={styles.formSub}>
												<span>Forgot Password?</span>
											</p>
										</div>
									</InputLabel>
								</Form>
							</div>
						</div>
					</div>

					<div className={styles.sub}>
						<p className={styles.mt2}>
							<span className={styles.subP}>
								<Link to='/signup' className={styles.signinAnchor}>
									<span className={styles.desc}>Don't have an account? </span>
									Sign up
								</Link>
							</span>
						</p>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default SignIn;
