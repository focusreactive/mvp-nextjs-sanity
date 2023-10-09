import './globals.css';

import { DM_Sans } from 'next/font/google';

import { Footer } from '@/focus-reactive/cms-kit';

const dmSans = DM_Sans({ subsets: ['latin'] });

// todo:
// 1. fix image url
// 2. add footer to sanity
// 3. add hero to sanity
// 4. add preview
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
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
          contacts={[
            {
              icon: 'https://i.ibb.co/9Vp3Vmd/image.png',
              title: 'United Kingdom',
            },
          ]}
        />
      </body>
    </html>
  );
}
