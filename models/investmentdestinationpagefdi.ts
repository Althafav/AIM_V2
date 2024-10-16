
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Thu Oct 10 2024 10:48:54 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Investmentdestinationpagefdi extends ContentItem {
    public pageTitle!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public bannerheading!: Elements.TextElement;
    public bannerimage!: Elements.AssetsElement;
    public aboutHeading!: Elements.TextElement;
    public aboutDescription1!: Elements.RichTextElement;
    public aboutDescription2!: Elements.RichTextElement;
    public presentationGuidelines!: Elements.RichTextElement;
    public connectWithUsCtaHeading!: Elements.TextElement;
    public connectWithUsButton!: Elements.LinkedItemsElement<ContentItem>;
    public investmentPresentationHeading!: Elements.TextElement;
    public investmentPresentationItems!: Elements.LinkedItemsElement<ContentItem>;
    public bookYourSpotCtaHeading!: Elements.TextElement;
    public bookYourSpotButton!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                if (elementName === 'about_heading') {
                    return 'aboutHeading';
                }
                if (elementName === 'about_description_1') {
                    return 'aboutDescription1';
                }
                if (elementName === 'about_description_2') {
                    return 'aboutDescription2';
                }
                if (elementName === 'presentation_guidelines') {
                    return 'presentationGuidelines';
                }
                if (elementName === 'connect_with_us_cta_heading') {
                    return 'connectWithUsCtaHeading';
                }
                if (elementName === 'connect_with_us_button') {
                    return 'connectWithUsButton';
                }
                if (elementName === 'investment_presentation_heading') {
                    return 'investmentPresentationHeading';
                }
                if (elementName === 'investment_presentation_items') {
                    return 'investmentPresentationItems';
                }
                if (elementName === 'book_your_spot_cta_heading') {
                    return 'bookYourSpotCtaHeading';
                }
                if (elementName === 'book_your_spot_button') {
                    return 'bookYourSpotButton';
                }
                return elementName;
            })
        });
    }
}
