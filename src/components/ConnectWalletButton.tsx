import { useState } from 'react';
import { ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance } from '@coinbase/onchainkit/identity';
import { getUserCountryFromIP } from './locationUtils'; // Import the utility function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WalletSelector from './WalletSelector';

function WalletComponent() {
  const [location, setLocation] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  // Function to check location and show toast
  const checkLocationAndShowToast = async () => {
    try {
      const country = await getUserCountryFromIP();
      setLocation(country);

      if (country === 'Nigeria') {
        // Show toast warning for Nigeria
        toast("Access detected from Nigeria. Please use a VPN. We recommend Proton VPN. Refresh the page and try again.");
      }
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="" onClick={() => { checkLocationAndShowToast(); toggleModal(); }}>
        <ConnectWallet className="border text-white text-sm lg:text-2xl bg-[#040B35] mr-8 lg:mr-0 md:mr-8 p-3">
          <Avatar defaultComponent={false} className="bg-white" />
          <Name className="text-white text-xs lg:text-lg md:text-sm" />
          <div className="block">
            <Address isSliced={true} className="text-white sm-hidden" />
            <EthBalance className="text-white sm-hidden" />
          </div>
        </ConnectWallet>
      </div>

      <WalletDropdown className="right-10">
        <WalletDropdownDisconnect className="mr-10" />
      </WalletDropdown>

      <ToastContainer autoClose={false} pauseOnFocusLoss={true} />

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-4 w-96">
            <button onClick={toggleModal} className="text-right mb-4">X</button>
            <WalletSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletComponent;
