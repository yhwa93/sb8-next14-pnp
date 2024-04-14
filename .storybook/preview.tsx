import type { Preview } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import * as KoMsg from '../messages/ko.json'
import * as EnMsg from '../messages/en.json'
import * as JaMsg from '../messages/ja.json'

const preview: Preview = {
  globalTypes: {
    locale: {
      description: '국제화 locale',
      defaultValue: 'ko',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ko', right: '🇰🇷', title: '한국어' },
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'ja', right: '🇯🇵', title: '日本語' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedLocale = context.globals.locale

      // NextIntlClientProvider에 필요한 messages를
      // 변경되는 globalTypes locale 값에 맞게 언어 json을 바꿔줌
      const convertLocaleMsg = () => {
        switch (selectedLocale) {
          case 'ko':
            return KoMsg
          case 'en':
            return EnMsg
          case 'ja':
            return JaMsg
        }
      }

      return (
        <NextIntlClientProvider locale={selectedLocale} messages={convertLocaleMsg()}>
          <Story />
        </NextIntlClientProvider>
      )
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
