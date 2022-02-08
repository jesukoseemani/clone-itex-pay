import Mark from '../../assets/images/MarkDefault.svg';
import AccountSetUp from '../../components/accountSetUp/AccountSetUp';

function AccountSettings() {
	const data = [
		{
			icon: Mark,
			title: 'Personal Information',
			button: 'Continue',
			id: 'IPI',
			completed: true,
		},
		{
			icon: Mark,
			title: 'Business Information',
			button: 'Continue',
			id: 'IBI',
			completed: false,
		},
		{
			icon: Mark,
			title: 'Add Bank Account',
			button: 'Continue',
			id: 'IBA',
			completed: false,
		},
	];

	return (
		<div>
			<AccountSetUp data={data} />
		</div>
	);
}

export default AccountSettings;

// const AccountSettings = () => {
//   const accountSetup = [
//     {
//       icon: Mark,
//       title: "Personal Information",
//       button: "Continue",
//       id: "PI",
//     },
//     {
//       icon: Mark,
//       title: "Business Information",
//       button: "Continue",
//       id: "BI",
//     },
//     {
//       icon: Mark,
//       title: "Add Bank Account",
//       button: "Continue",
//       id: "BA",
//     },
//   ];
//   return <AccountSetUp accountSetUp={accountSetup} />;
// };

// export default AccountSettings;
