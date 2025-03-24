import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsHeaderAboutUsHeader extends Struct.ComponentSchema {
  collectionName: 'components_about_us_header_about_us_headers';
  info: {
    displayName: 'aboutUsHeader';
    icon: 'bulletList';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
  };
}

export interface CategoryCategory extends Struct.ComponentSchema {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface ContactUsSectionContactUsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_section_contact_us_sections';
  info: {
    displayName: 'contactUsSection';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    differentColorWord: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface DeviderDevider extends Struct.ComponentSchema {
  collectionName: 'components_devider_deviders';
  info: {
    displayName: 'devider';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface EquipmentEquipment extends Struct.ComponentSchema {
  collectionName: 'components_equipment_equipment';
  info: {
    description: '';
    displayName: 'Equipment';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.Text;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featuredSection: Schema.Attribute.Component<
      'featured-section.featured-section',
      true
    >;
    title: Schema.Attribute.Text;
    years: Schema.Attribute.Text;
    yearsOfExpereince: Schema.Attribute.Text;
  };
}

export interface FeaturedSectionFeaturedSection extends Struct.ComponentSchema {
  collectionName: 'components_featured_section_featured_sections';
  info: {
    displayName: 'featuredSection';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Enumeration<['morining ', 'noon', 'nught']>;
    percentage: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface MissionMission extends Struct.ComponentSchema {
  collectionName: 'components_mission_missions';
  info: {
    displayName: 'mission';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    suTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ParagraphParagraph extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PortfolioPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_portfolios';
  info: {
    displayName: 'portfolio';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PricesPrices extends Struct.ComponentSchema {
  collectionName: 'components_prices_prices';
  info: {
    displayName: 'prices';
    icon: 'bulletList';
  };
  attributes: {
    price: Schema.Attribute.Text;
    ServicesProvided: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PricingPricing extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'pricing';
    icon: 'bulletList';
  };
  attributes: {
    prices: Schema.Attribute.Component<'prices.prices', true>;
  };
}

export interface QomraCreationQomraCreation extends Struct.ComponentSchema {
  collectionName: 'components_qomra_creation_qomra_creations';
  info: {
    displayName: 'QomraCreation';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ReviewReview extends Struct.ComponentSchema {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'review';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.Text;
    position: Schema.Attribute.Text;
  };
}

export interface ServiceService extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'service';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ServicesHeaderSectionServicesHeaderSection
  extends Struct.ComponentSchema {
  collectionName: 'components_services_header_section_services_header_sections';
  info: {
    displayName: 'servicesHeaderSection';
    icon: 'bulletList';
  };
  attributes: {
    headline: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    service: Schema.Attribute.Component<'service.service', true>;
    title: Schema.Attribute.Text;
  };
}

export interface TestemoialTestemoial extends Struct.ComponentSchema {
  collectionName: 'components_testemoial_testemoials';
  info: {
    displayName: 'testemoial';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    review: Schema.Attribute.Component<'review.review', true>;
    title: Schema.Attribute.Text;
  };
}

export interface UpcomingUpcoming extends Struct.ComponentSchema {
  collectionName: 'components_upcoming_upcomings';
  info: {
    displayName: 'upcoming';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface VisionVision extends Struct.ComponentSchema {
  collectionName: 'components_vision_visions';
  info: {
    displayName: 'vision';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface WhatWeDoWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_what_we_dos';
  info: {
    displayName: 'what we do';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us-header.about-us-header': AboutUsHeaderAboutUsHeader;
      'category.category': CategoryCategory;
      'contact-us-section.contact-us-section': ContactUsSectionContactUsSection;
      'devider.devider': DeviderDevider;
      'equipment.equipment': EquipmentEquipment;
      'experience.experience': ExperienceExperience;
      'featured-section.featured-section': FeaturedSectionFeaturedSection;
      'list.list': ListList;
      'mission.mission': MissionMission;
      'paragraph.paragraph': ParagraphParagraph;
      'portfolio.portfolio': PortfolioPortfolio;
      'prices.prices': PricesPrices;
      'pricing.pricing': PricingPricing;
      'qomra-creation.qomra-creation': QomraCreationQomraCreation;
      'review.review': ReviewReview;
      'service.service': ServiceService;
      'services-header-section.services-header-section': ServicesHeaderSectionServicesHeaderSection;
      'services.services': ServicesServices;
      'testemoial.testemoial': TestemoialTestemoial;
      'upcoming.upcoming': UpcomingUpcoming;
      'vision.vision': VisionVision;
      'what-we-do.what-we-do': WhatWeDoWhatWeDo;
    }
  }
}
