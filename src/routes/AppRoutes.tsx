import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParentContainer from '../components/ParentContainer/ParentContainer';
import Drawer from '../components/drawer/Drawer';
import MerchantOverview from '../views/MerchantOverview/MerchantOverview';
import Transactions from '../views/Transactions/Transactions';
import Refund from '../views/Transactions/Refund';
import Balance from '../views/Balance/Balance';
import BalanceHistory from '../views/Balance/BalanceHistory';
import RollingReserve from '../views/Balance/RollingReserve';
import Customers from '../views/Customers/Customers';
import Transfers from '../views/Payout/Transfers';
import FundingHistory from '../views/Payout/FundingHistory';
import TransferBalance from '../views/Payout/TransferBalance';
import ChargeBacks from '../views/ChargeBack/ChargeBacks';
import Pending from '../views/ChargeBack/Pending';
import AwaitingResponse from '../views/ChargeBack/AwaitingResponse';
import Won from '../views/ChargeBack/Won';
import Lost from '../views/ChargeBack/Lost';
import Subaccounts from '../views/Subaccounts/Subaccounts';
import PaymentLinks from '../views/PaymentLinks/PaymentLinks';
import ItexStore from '../views/ItexStore/ItexStore';
import PointOfSale from '../views/PointOfSale/PointOfSale';
import TerminalRequests from '../views/PointOfSale/TerminalRequest';
import Bills from '../views/Bills/Bills';
import GeneralSettings from '../views/Settings/GeneralSettings';
import AccountSettings from '../views/Settings/AccountSettings';
import Api from '../views/Settings/Api';
import Users from '../views/Settings/Users';
import WebHooks from '../views/Settings/WebHooks';
import BankAccounts from '../views/Settings/BankAccounts';
import SignUp from '../views/SignUp/SignUpPage';
import IndividualSignUp from '../views/SignUp/IndividualSignUp';
import BusinessSignUp from '../views/SignUp/BusinessSignUp';
import { Web } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoutes';
import SignIn from '../views/SignIn/SignIn';
import AccountType from '../components/accountSetUp/AccountType';
import LoginPasswordReset from '../components/accountSetUp/LoginPasswordReset';
import EmailVerification from '../components/accountSetUp/EmailVerification';
import NewPassword from '../components/accountSetUp/NewPassword';

export default function AppRoutes() {
	const { loadingState } = useSelector((state) => state?.loadingStateReducer);
	return (
		<Router>
			<ParentContainer>
				<Drawer />
				<Switch>
					<Route exact path='/signin'>
						<SignIn />
					</Route>
					<Route exact path='/account_type'>
						<AccountType />
					</Route>
					<Route exact path='/business/signup'>
						<BusinessSignUp />
					</Route>
					<Route exact path='/ngo/signup'>
						<BusinessSignUp />
					</Route>
					<Route exact path='/individual_signup'>
						<IndividualSignUp />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<Route exact path='/forgotpassword'>
						<LoginPasswordReset />
					</Route>
					<Route exact path='/newpassword'>
						<NewPassword />
					</Route>
					<Route exact path='/email_verification'>
						<EmailVerification />
					</Route>
					<>
						<ProtectedRoute
							exact
							path='/'
							component={MerchantOverview}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/merchant_overview'
							component={MerchantOverview}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transactions'
							component={Transactions}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transactions/refund'
							component={Refund}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance'
							component={Balance}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance/balance_history'
							component={BalanceHistory}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance/rolling_reserve'
							component={RollingReserve}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/customers'
							component={Customers}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transfers'
							component={Transfers}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/payout/funding_history'
							component={FundingHistory}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							path='/payout/transfer_balance'
							component={TransferBalance}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks'
							component={ChargeBacks}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/pending'
							component={Pending}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							path='/chargeBacks/awaiting_response'
							component={AwaitingResponse}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/won'
							component={Won}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/lost'
							component={Lost}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/subaccounts'
							component={Subaccounts}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/payment_links'
							component={Subaccounts}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/store'
							component={ItexStore}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/point_of_sale'
							component={PointOfSale}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/point_of_sale/terminal_requests'
							component={TerminalRequests}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/bills'
							component={Bills}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/'
							component={MerchantOverview}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/individual_'
							component={MerchantOverview}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/merchant_overview'
							component={MerchantOverview}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transactions'
							component={Transactions}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transactions/refund'
							component={Refund}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance'
							component={Balance}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance/balance_history'
							component={BalanceHistory}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/balance/rolling_reserve'
							component={RollingReserve}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/customers'
							component={Customers}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/transfers'
							component={Transfers}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/payout/funding_history'
							component={FundingHistory}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							path='/payout/transfer_balance'
							component={TransferBalance}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks'
							component={ChargeBacks}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/pending'
							component={Pending}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							path='/chargeBacks/awaiting_response'
							component={AwaitingResponse}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/won'
							component={Won}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/chargeBacks/lost'
							component={Lost}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/subaccounts'
							component={Subaccounts}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/payment_links'
							component={Subaccounts}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/store'
							component={ItexStore}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/point_of_sale'
							component={PointOfSale}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/point_of_sale/terminal_requests'
							component={TerminalRequests}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/bills'
							component={Bills}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting'
							component={GeneralSettings}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting/bank_accounts'
							component={BankAccounts}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting/users'
							component={Users}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting/api'
							component={Api}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting/web_hooks'
							component={WebHooks}
							AuthUser={loadingState}
						/>

						<ProtectedRoute
							exact
							path='/general_setting/account_settings'
							component={AccountSettings}
							AuthUser={loadingState}
						/>
					</>
				</Switch>
			</ParentContainer>
		</Router>
	);
}
