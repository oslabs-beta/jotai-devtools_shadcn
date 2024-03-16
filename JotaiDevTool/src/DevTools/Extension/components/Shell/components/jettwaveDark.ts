import { PrismTheme } from 'prism-react-renderer';

const jettwaveDark: PrismTheme = {
  plain: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#6c8b9f',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#a5e844',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: '#e5c07b',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#c678dd',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#e06c75',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#61afef',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#e06c75',
      },
    },
  ],
};

export default jettwaveDark;