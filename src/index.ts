const isValidWeb3Address = (address: string): boolean => {
    return address.length === 42 && address.startsWith('0x');
  };
  
  export default isValidWeb3Address;