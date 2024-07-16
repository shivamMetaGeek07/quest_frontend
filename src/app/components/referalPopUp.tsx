import { updateUserProfile } from '@/redux/reducer/authSlice';
import { fetchAllCommunities } from '@/redux/reducer/communitySlice';
import { AppDispatch, RootState } from '@/redux/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface ReferralFormProps {
    memberId: any;
    id: any;
  }
  const ReferralForm: React.FC<ReferralFormProps> = ({ memberId, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const  user = useSelector((state: RootState) => state.login.user);

  const [formData, setFormData] = useState({
    referral:'YkkumuSF6N',
    userId:user?._id,
    memberId,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
        `${ process.env.NEXT_PUBLIC_SERVER_URL }/community/get/joinCommunities/${id}`
        , formData 
      );
      await dispatch(fetchAllCommunities());
      console.log(response)

    };
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (<>
    <Button
      className={ `w-full h-8 bg-white/10 hover:bg-white/25 text-neutral-400 descdata text-center text-medium rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg ` }
        onPress={onOpen}>Join with referral</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      
      <div className="mb-4">
        <label htmlFor="nickname" className="block text-sm  text-gray-700">Referral</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.referral}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        join 
      </button>
           </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
    </>
  );
};

export default ReferralForm;
