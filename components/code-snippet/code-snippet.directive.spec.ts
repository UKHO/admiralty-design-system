import { SecurityContext } from '@angular/core';
import { CodeSnippetDirective } from './code-snippet.directive';

describe('CodeSnippetDirective', () => {
  let directive: CodeSnippetDirective;

  let elementRefMock = null;
  let domSanitizerMock = null;

  beforeEach(() => {
    elementRefMock = { nativeElement: { innerHTML: null } };
    domSanitizerMock = {
      sanitize: jest.fn(),
      bypassSecurityTrustHtml: jest.fn(),
      bypassSecurityTrustStyle: jest.fn(),
      bypassSecurityTrustScript: jest.fn(),
      bypassSecurityTrustUrl: jest.fn(),
      bypassSecurityTrustResourceUrl: jest.fn(),
    };
    directive = new CodeSnippetDirective(elementRefMock, domSanitizerMock);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('highlightElement() should call highlightAuto() with correct parameters', () => {
    const highlightjs = require('highlight.js');
    const highlightAutoSpy = jest.spyOn(highlightjs, 'highlightAuto');

    expect(highlightAutoSpy).toBeCalledTimes(0);
    const expectedCode = 'a';
    const expectedLanguage = ['b'];
    directive.highlightElement(expectedCode, expectedLanguage);
    expect(highlightAutoSpy).toBeCalledTimes(1);
    expect(highlightAutoSpy).toBeCalledWith(expectedCode, expectedLanguage);
  });

  it('highlightElement() should call sanitize() with highlightResult.value', () => {
    const highlightAutoResult = { value: 'a' } as AutoHighlightResult;
    const highlightjs = require('highlight.js');
    const highlightAutoSpy = jest.spyOn(highlightjs, 'highlightAuto');
    highlightAutoSpy.mockReturnValueOnce(highlightAutoResult);

    const sanitizeSpy = jest.spyOn(domSanitizerMock, 'sanitize');

    expect(sanitizeSpy).toBeCalledTimes(0);
    directive.highlightElement('a', ['b']);
    expect(sanitizeSpy).toBeCalledTimes(1);
    expect(sanitizeSpy).toBeCalledWith(SecurityContext.HTML, highlightAutoResult.value);
  });

  it('highlightElement() assigns return value of sanitize() to nativeElement.innerHTML', () => {
    const highlightAutoResult = { value: 'a' } as AutoHighlightResult;
    const highlightjs = require('highlight.js');
    const highlightAutoSpy = jest.spyOn(highlightjs, 'highlightAuto');
    highlightAutoSpy.mockReturnValueOnce(highlightAutoResult);

    const sanitizeResult = 'b';
    const sanitizeSpy = jest.spyOn(domSanitizerMock, 'sanitize');
    sanitizeSpy.mockReturnValueOnce(sanitizeResult);

    expect(elementRefMock.nativeElement.innerHTML).toBe(null);
    directive.highlightElement('a', ['b']);
    expect(elementRefMock.nativeElement.innerHTML).toBe(sanitizeResult);
  });

  it('ngOnChanges() does not call highlightElement() if no change', () => {
    const simpleChange = {
      code: { currentValue: 'a', previousValue: 'a', firstChange: true, isFirstChange: () => true },
      language: { currentValue: 'a', previousValue: 'a', firstChange: false, isFirstChange: () => false },
    };

    const highlightElementSpy = jest.spyOn(directive, 'highlightElement');

    expect(highlightElementSpy).toBeCalledTimes(0);
    directive.code = 'a';
    directive.language = 'a';
    directive.ngOnChanges(simpleChange);
    expect(highlightElementSpy).toBeCalledTimes(0);
  });

  it.each([
    ['a', 'b', 'a', 'a'],
    ['a', 'a', 'a', 'b'],
    ['a', 'b', 'a', 'b'],
  ])(
    'ngOnChanges() calls highlightElement() with code from "%s" to "%s" and language "%s" to "%s"',
    (previousCodeValue, currentCodeValue, previousLanguageValue, currentLanguageValue) => {
      const simpleChange = {
        code: {
          currentValue: currentCodeValue,
          previousValue: previousCodeValue,
          firstChange: false,
          isFirstChange: () => false,
        },
        language: {
          currentValue: currentLanguageValue,
          previousValue: previousLanguageValue,
          firstChange: false,
          isFirstChange: () => false,
        },
      };

      const highlightElementSpy = jest.spyOn(directive, 'highlightElement');

      expect(highlightElementSpy).toBeCalledTimes(0);
      directive.code = currentCodeValue;
      directive.language = currentLanguageValue;
      directive.ngOnChanges(simpleChange);
      expect(highlightElementSpy).toBeCalledTimes(1);
      expect(highlightElementSpy).toBeCalledWith(directive.code, [directive.language]);
    },
  );
});
