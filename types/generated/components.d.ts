import type { Schema, Attribute } from '@strapi/strapi';

export interface ParagraphTextInputFieldParagraphTextField
  extends Schema.Component {
  collectionName: 'components_paragraph_text_input_field_paragraph_text_fields';
  info: {
    displayName: 'ParagraphTextField';
    icon: 'write';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraph-text-input-field.paragraph-text-field': ParagraphTextInputFieldParagraphTextField;
    }
  }
}
