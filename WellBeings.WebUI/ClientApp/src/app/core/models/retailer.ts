export class Retailer {
  public name: string;
  public website: string;
  public description: string;
  public location: string;

  constructor(name: string,
    website: string,
    description: string,
    location: string) {
    this.name = name;
    this.website = website;
    this.description = description;
    this.location = location;
  }
}
