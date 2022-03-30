import contact from './contact.interface';
import location from './location.interface';

export default interface restaurant {
  name: string;
  backgroundImageURL: string;
  category: string;
  contact: contact;
  location: location;
}
