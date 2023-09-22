import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { Header } from '@/focus-reactive/cms-kit';
import { Footer } from '@/focus-reactive/cms-kit/src/components/footer/Footer';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="layout">
          <Header
            isFixed={false}
            buttonsColor={''}
            linksColor={'white'}
            heroBackgroundColor={'default'}
            menu={[
              {
                group: 'Capabilities',
                documentTitle: 'Capabilities',
                links: [
                  {
                    title: 'Ad Fraud Protection',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'Measurement & Verification',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'PPC Protection',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'Traffic Quality Audit',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                ],
              },
              {
                group: 'Solutions',
                documentTitle: 'Solutions',
                links: [
                  {
                    title: 'Client obsession',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc: 'https://i.ibb.co/fCKR73f/Group-407.png',
                  },
                  {
                    title: 'Innovation',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc: 'https://i.ibb.co/fCKR73f/Group-407.png',
                  },
                  {
                    title: 'Trust & transparency',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc: 'https://i.ibb.co/fCKR73f/Group-407.png',
                  },
                  {
                    title: 'Customer Stories',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc: 'https://i.ibb.co/fCKR73f/Group-407.png',
                  },
                ],
              },
              {
                group: 'Resources',
                documentTitle: 'Resources',
                links: [
                  {
                    title: 'Insights',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'News & Media',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'White papers',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'Glossary',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                ],
              },
              {
                group: 'Why us?',
                documentTitle: 'Why us?',
                links: [
                  {
                    title: 'Mission',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'Awards',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                  {
                    title: 'Privacy & Compliance',
                    description: 'Short description',
                    url: 'https://www.trafficguard.ai/',
                    iconSrc:
                      'https://cdn.sanity.io/images/q7v95rg2/production/078d0404d2c6a1c30908857b90c78c9e2e2effb1-500x371.png',
                  },
                ],
              },
            ]}
            buttons={[
              { link: 'https://www.trafficguard.ai/', text: 'Sign in' },
              { link: 'https://www.trafficguard.ai/', text: 'Get started' },
            ]}
            ctaCard={{
              buttons: [{ link: 'https://www.trafficguard.ai/', text: 'Sign in' }],
              title: 'Global mobile game developer levels up against ad fraud',
              image: {
                src: 'https://cdn.sanity.io/images/vpu9cxnr/production/5eff15897b8e6c093d7c4d60dc3fcdbac87b1acb-488x286.webp',
                alt: '',
              },
            }}
            contacts={''}
          />
          {children}
          <Footer
            menus={[
              {
                title: 'Capabilities',
                list: [
                  { title: 'Ad Fraud Protection', url: 'https://www.trafficguard.ai/' },
                  { title: 'Measurement & Verification', url: 'https://www.trafficguard.ai/' },
                  { title: 'PPC Protection', url: 'https://www.trafficguard.ai/' },
                  { title: 'Traffic Quality Audit', url: 'https://www.trafficguard.ai/' },
                ],
              },
              {
                title: 'Why us',
                list: [
                  { title: 'Client obsession', url: 'https://www.trafficguard.ai/' },
                  { title: 'Innovation', url: 'https://www.trafficguard.ai/' },
                  { title: 'Trust & transparency', url: 'https://www.trafficguard.ai/' },
                  { title: 'Customer Stories', url: 'https://www.trafficguard.ai/' },
                ],
              },
              {
                title: 'Resources',
                list: [
                  { title: 'Insights', url: 'https://www.trafficguard.ai/' },
                  { title: 'News & Media', url: 'https://www.trafficguard.ai/' },
                  { title: 'White papers', url: 'https://www.trafficguard.ai/' },
                  { title: 'Glossary', url: 'https://www.trafficguard.ai/' },
                ],
              },
              {
                title: 'Business Types',
                list: [
                  { title: 'Ad Networks & Agencies', url: 'https://www.trafficguard.ai/' },
                  { title: 'Apps', url: 'https://www.trafficguard.ai/' },
                  { title: 'Brands', url: 'https://www.trafficguard.ai/' },
                  { title: 'SMBS', url: 'https://www.trafficguard.ai/' },
                ],
              },
              {
                title: 'Channels',
                list: [
                  { title: 'Search', url: 'https://www.trafficguard.ai/' },
                  { title: 'Programmatic', url: 'https://www.trafficguard.ai/' },
                  { title: 'Display', url: 'https://www.trafficguard.ai/' },
                  { title: 'Perfomance', url: 'https://www.trafficguard.ai/' },
                ],
              },
              {
                title: 'About company',
                list: [
                  { title: 'Mission', url: 'https://www.trafficguard.ai/' },
                  { title: 'Awards', url: 'https://www.trafficguard.ai/' },
                  { title: 'Privacy & Compliance', url: 'https://www.trafficguard.ai/' },
                  { title: 'Partner Network', url: 'https://www.trafficguard.ai/' },
                  { title: 'Careers', url: 'https://www.trafficguard.ai/' },
                  { title: 'Global Offices', url: 'https://www.trafficguard.ai/' },
                  { title: 'Sales Partner', url: 'https://www.trafficguard.ai/' },
                ],
              },
            ]}
            buttons={[{ link: 'https://www.trafficguard.ai/', text: 'Get in touch' }]}
            nav={[
              { title: 'Privacy Policy', url: '' },
              { title: 'Compliance', url: '' },
              { title: 'Compliance', url: '' },
              { title: 'Terms of Service', url: '' },
            ]}
            socials={[
              { link: '', icon: 'youtube' },
              { link: '', icon: 'twitter' },
              { link: '', icon: 'instagram' },
              { link: '', icon: 'facebook' },
              { link: '', icon: 'linkedin' },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
