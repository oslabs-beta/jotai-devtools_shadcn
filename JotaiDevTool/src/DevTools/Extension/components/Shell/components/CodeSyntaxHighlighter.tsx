// import * as React from 'react';
// import { Prism, PrismProps } from '@mantine/prism';

// // Omit "getPrismTheme" prop because we'll apply a custom component-wide theme here
// export type CodeSyntaxHighlighterProps = Omit<PrismProps, 'getPrismTheme'>;

// export const CodeSyntaxHighlighter = ({
//   children,
//   ...rest
// }: React.PropsWithChildren<CodeSyntaxHighlighterProps>) => {
//   return <Prism {...rest}>{children}</Prism>;
// };


import * as React from 'react';
import Highlight, { Language, Prism } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import jettwaveDark from './jettwaveDark';
import lightTheme from 'prism-react-renderer/themes/github'
import { useDarkModeValue } from '../../../../atoms/dark-mode'

export type CodeSyntaxHighlighterProps = {
  language: Language;
  children: string;
};


//Light Mode: themes.github, Dark Mode: themes.jettwaveLight
export const CodeSyntaxHighlighter = ({ language, children }: CodeSyntaxHighlighterProps) => {
  const darkMode = useDarkModeValue();
  return (
    <Highlight Prism={Prism} theme={darkMode ? jettwaveDark : lightTheme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 overflow-auto rounded-md`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export const ErrorCodeSyntaxHighlighter = ({ language, children }: CodeSyntaxHighlighterProps) => {
  const darkMode = useDarkModeValue();
  return (
    <Highlight Prism={Prism} theme={darkMode ? darkTheme : lightTheme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 overflow-auto rounded-md`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};