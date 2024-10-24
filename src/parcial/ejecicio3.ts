interface ContactInfo {
    id: number;
    name: string;
    phoneNumber: string;
  }
  
  function validatePhoneNumber(phoneNumber: string): boolean {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }
  
  class Contact implements ContactInfo {
    id: number;
    name: string;
    phoneNumber: string;
  
    constructor(id: number, name: string, phoneNumber: string) {
      if (!validatePhoneNumber(phoneNumber)) {
        throw new Error('Invalid phone number');
      }
      this.id = id;
      this.name = name;
      this.phoneNumber = phoneNumber;
    }
  
    getPhoneNumber(): string {
      return this.phoneNumber;
    }
  }
  