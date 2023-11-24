// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setEarnedAmount,
//   updateTotalSecond,
// } from "../../../redux/earnedAmountSlice";
// interface SendToWalletProps {
//   onResetMediaGallery: () => void;
// }

// const SendToWallet: React.FC<SendToWalletProps> = ({ onResetMediaGallery }) => {
//   const [tipAmount, setTipAmount] = useState("");
//   const [sendToWallet, setSendToWallet] = useState(0);
//   const [address, setAddress] = useState("");
//   const dispatch = useDispatch();
//   const earnedAmount = useSelector((state: any) => state.earnedAmount.value);

//   const handleSend = () => {
//     // console.log('handleSend called');
//     const amountToSend = parseFloat(tipAmount);
//     // Validate the amount and address, then proceed with the sending logic
//     if (!isNaN(amountToSend) && amountToSend <= earnedAmount) {
//       // console.log(earnedAmount, amountToSend);
//       // const newAmount = earnedAmount - amountToSend;
//       // Add logic to handle sending the amount to the provided address
//       console.log(`Sending ${amountToSend} to ${address}`);
//       // console.log(newAmount)

//       // console.log("Before dispatch:", earnedAmount);
//       dispatch(setEarnedAmount(0));
//       dispatch(updateTotalSecond(0));
//       onResetMediaGallery();

//       // console.log("After dispatch:", earnedAmount);
//     } else {
//       // Handle validation errors or display a message to the user
//       console.error("Invalid amount or address");
//     }
//     // dispatch(updateTotalSecond(0));
//     // dispatch(updateTotalSecond(0));
//   };
//   const handleChangeAmount = (e: any) => {
//     setTipAmount(e.target.value);
//     if (e.target.value <= earnedAmount) {
//       setSendToWallet(earnedAmount - e.target.value);
//     } else {
//       console.log("Invalid Amount");
//     }
//   };
//   return (
//     <>
      
//     </>
//   );
// };

// export default SendToWallet;
