import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-us-section.contact-us-section': ContactUsSectionContactUsSection;
      'devider.devider': DeviderDevider;
      'experience.experience': ExperienceExperience;
      'featured-section.featured-section': FeaturedSectionFeaturedSection;
      'list.list': ListList;
      'portfolio.portfolio': PortfolioPortfolio;
      'review.review': ReviewReview;
      'testemoial.testemoial': TestemoialTestemoial;
    }
  }
}
