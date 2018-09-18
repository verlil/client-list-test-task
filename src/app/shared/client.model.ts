export class Client {
  public generalFirstName: string;
  public generalLastName: string;
  public generalAvatar: string;
  public jobCompany: string;
  public jobTitle: string;
  public contactEmail: string;
  public contactPhone: string;
  public addressStreet: string;
  public addressCity: string;
  public addressZipCode: string;
  public addressCountry: string;

  constructor(generalFirstName: string, generalLastName: string, generalAvatar: string,
              jobCompany: string, jobTitle: string, contactEmail: string,
              contactPhone: string, addressStreet: string, addressCity: string,
              addressZipCode: string, addressCountry: string) {
    this.generalFirstName = generalFirstName;
    this.generalLastName = generalLastName;
    this.generalAvatar = generalAvatar;
    this.jobCompany = jobCompany;
    this.jobTitle = jobTitle;
    this.contactEmail = contactEmail;
    this.contactPhone = contactPhone;
    this.addressStreet = addressStreet;
    this.addressCity = addressCity;
    this.addressZipCode = addressZipCode;
    this.addressCountry = addressCountry;
  }
}
