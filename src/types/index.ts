export interface PropertyListCardProps {
  id: number;
  image: any;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  isFromDetailsPage?: boolean;
  forRent?: boolean;
  addedDate?: string;
  addedBy?: string;
  agentImage?: string;
  areaUnit?: string;
  buttonText?: string;
}

export interface AgentListCardProps {
  agent_id: number;
  id:number;
  profile_pic_path: any;
  companyImage:string;
  fullname: string;
  email: string;
  phone: any;
  salesNumber: number;
  rentLisiting:number;
  companyName: string;
  reviewNumber:number;
  estate_agency:string;
  cea_number: string;
}


export interface HomeProps {
  children: React.ReactNode;
}

export interface NavItem {
  title: string;
  to?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface TopbarProps {
  items?: NavItem[];
}

export interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

export interface WhyChooseCardProps {
  logo: any;
  title: string;
  detail: string;
}

export interface addressCardProps {
  image: any;
  address: string;
  propertynumber: number;
}

export interface DetailedCardProps {
  id: number;
  property_name: string;
  address: string;
  price: number;
  bed_room: number;
  bath_room: number;
  area: number;
  area_unit: string;
  walking_distance?: string;
  addedBy?: string;
  build_year?: string;
  property_type?: any;
}

export interface ItemListsProp {
  items: DetailedCardProps[];
}

export interface AgentListItemProp {
  items: AgentListCardProps[]
}

export interface AddReview {
  message?: string;
  email?: string;
  property_id?: number;
  property_quality?: number;
  location?: number;
  value_of_money?: number;
  support?: number;
  parent_review_id?: number;
  [key: string]: string | number | undefined;
}


export interface InquiryData {
  full_name: string;
  phone_no: string;
  email: string;
  message: string;
  agent_id: number;
  property_id: number;
}

export interface TourScheduleData {
  schedule_date: string;
  schedule_time: string;
  adult_members: number;
  agent_id: number;
  property_id: number;
  children_members?: number;
}


export interface DetailedCardProps {
  id: number;
  property_name: string;
  address: string;
  price: number;
  bed_room: number;
  bath_room: number;
  area: number;
  area_unit: string;
  walking_distance?: string;
  addedBy?: string;
  build_year?: string;
  property_type?: any;
}


export interface AddReivewProps {
  agentId: number;
  propertyId: number;
}


export interface SubAmenityType {
  id: number;
  name: string;
}

export interface AmenityType {
  id: number;
  name: string;
  amenity_type: {
    id: number;
    name: string;
  };
}

export interface AmenitiesProps {
  amenities: AmenityType[] | undefined;
}

export interface FloorPlanProps {
  imgLink: string;
}

export interface StarIconProps {
  rating: number;
}

export interface RatingData {
  average: number;
  property: number;
  valueforMoney: number;
  address: number;
  support: number;
}

export interface RatingProps {
  ratings: RatingData;
}

export interface ProgressBarRatingProps {
  rating: number;
}


export interface PropertyVideoProp {
  url: string;
  backgroundImage?: string;
}


export interface PropertyType {
  id: number;
  name: string;
  created_by_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface AmenitySelection {
  amenityId: number;
  amenityName: string;
  selectedSubAmenities: { id: number; name: string }[];
}

export interface PropertySubType {
  name: string;
  property_type_id: number | null;
  id: number | null;
  created_at: string;
  updated_at: string;
  created_by_id: number | null;
}

export interface Property {
  property: any;
  selectedAmenities: AmenitySelection[];
  property_name: string;
  property_status: string;
  project_status: string;
  walking_distance: string;
  price: string;
  currency: string;
  area: string;
  area_unit: string;
  bed_room: string;
  bath_room: string;
  address: string;
  country: string;
  listed_id: number | null;
  unit_number: string;
  tenure: string;
  listed_on: string;
  total_units: number | null;
  current_tenanted: boolean;
  floor_level: string;
  furnished_status: string;
  build_year: string;
  description: string;
  latitude: number | null;
  longitude: number | null;
  dynamic_amenities: string[];
  city: string;
  state: string;
  contact_name: string;
  username: string;
  email: string;
  contact_no: number | null;
  contact_latitude: number | null;
  contact_longitude: number | null;
  listing_feature: string;
  developer: string;
  tag: string[];
  listed_type: string;
  completion_year: string;
  project_stage: string;
  id: number | null;
  created_at: string;
  updated_at: string;
  created_by_id: number;
  propety_status: string;
  property_type: PropertyType;
  property_subtype: PropertySubType;
  amenities: any[];
  photos: File[];
  videos: File[];
  additionalPhotos: File[];
}

export interface PropertyTypesFormik {
  property: {
    property: any;
    selectedAmenities: AmenitySelection[];
    property_name: string;
    property_status: string;
    project_status: string;
    walking_distance: string;
    price: string;
    currency: string;
    area: string;
    area_unit: string;
    bed_room: string;
    bath_room: string;
    address: string;
    country: string;
    listed_id: number | null;
    unit_number: string;
    tenure: string;
    listed_on: string;
    total_units: number | null;
    current_tenanted: boolean;
    floor_level: string;
    furnished_status: string;
    build_year: string;
    description: string;
    latitude: number | null;
    longitude: number | null;
    dynamic_amenities: string[];
    city: string;
    state: string;
    contact_name: string;
    username: string;
    email: string;
    contact_no: number | null;
    contact_latitude: number | null;
    contact_longitude: number | null;
    listing_feature: string;
    developer: string;
    tag: string[];
    listed_type: string;
    completion_year: string;
    project_stage: string;
    id: number | null;
    created_at: string;
    updated_at: string;
    created_by_id: number;
    propety_status: string;
    property_type: PropertyType;
    property_subtype: PropertySubType;
    amenities: any[];
    photos: File[];
    videos: File[];
    additionalPhotos: File[];
  }
}

export interface Image {
  id: number | null;
  url: string;
}

export interface MainStepperForm {
  property: Property;
}

export interface FormListCardProps {
  id: number;
  image: any;
  name: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  isFromDetailsPage?: boolean;
  forRent?: boolean;
  addedDate?: string;
  addedBy?: string;
  agentImage?: string;
  areaUnit?: string;
  buttonText?: string;
}


export interface PriceFilterComponentProps {
  vertical?: boolean;
  className?: string;
}

export interface AccountLoginDataType {
  email: string;
  password: string;
  cea_number?: string;
}

export interface OtpLoginData {
  email: string;
  otp: string;
}

export interface LogoutData {
  refresh_token: string;
}

export interface AccountRegisterDataType {
  email: string;
  password: string;
  role: string;
  full_name: string;
  phone_number: string;
  cea_number?: string;
}
