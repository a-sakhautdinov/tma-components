import SideScroll from '../components/sidescroll/SideScroll';
import Card from '../components/card/Card';
import Tabs from '../components/tabs/Tabs';
import Button from '../components/button/Button';
import Tag from '../components/tag/Tag';
import Quote from '../components/quote/Quote';
import Island from '../components/island/Island';
import Layout from '../components/layout/Layout';
import { TMAWallet } from '../icons/tma.svgs';

export function ExampleScreen({
  screenSize,
}: {
  screenSize: [number, number];
}) {
  return (
    <div
      style={{ width: screenSize[0], height: screenSize[1] }}
      className="overflow-hidden rounded-3xl border border-gray-950 shadow-gray-500 shadow dark:bg-tma-gray-800"
    >
      <div className="h-10 bg-black"></div>
      <div className="h-10 bg-gray-900 text-white flex flex-row items-center font-semibold px-4">
        Telegram Mini Application
      </div>
      <Layout
        header={
          <Tabs
            className="mt-2"
            options={[
              { key: 'main', label: 'Main Page' },
              { key: 'profile', label: 'Profile', disabled: true },
              {
                key: 'rewards',
                label: 'Rewards',
                tag: { label: '12', type: 'success' },
              },
              {
                key: 'settings',
                label: 'Settings',
                tag: { label: 'new', type: 'important' },
              },
            ]}
          />
        }
      >
        <div
          className="px-1 pb-6 overflow-y-scroll overflow-x-hidden"
          style={{ height: screenSize[1] - 120 }}
        >
          <div className="px-2">
            <h2 className="font-semibold text-tma-blue text-xl mb-2">
              Thanks for using our template!
            </h2>
            <p className="dark:text-white mb-2 text-tma-gray">
              The Lightweight Component Library tailored for Telegram Mini Apps,
              leveraging the power of Tailwind CSS. This library offers a
              collection of sleek and efficient components designed to enhance
              the user experience within Telegram Mini Apps. With its minimal
              footprint and seamless integration with Tailwind CSS, it provides
              developers with the necessary building blocks to create visually
              appealing and responsive interfaces for Telegram Mini Apps
              efficiently.
            </p>

            <h2 className="font-semibold text-tma-blue text-xl mb-2">Quote</h2>
            <Quote description="In each action that you undertake, consider what comes before and what follows after, and only then proceed to the action itself." />
          </div>
          <h2 className="font-semibold text-tma-blue text-xl my-2">
            SideScroll
          </h2>
          <SideScroll maxWidth={screenSize[0]} label="Workout">
            <Card label="Qoutes" />
            <Card label="SideScroll" />
            <Card label="Card" />
            <Card label="Tags" />
            <Card label="Island" />
            <Card label="Tabs" />
            <Card label="Button" />
            <Card label="More..." tag={{ label: 'Waiting', type: 'success' }} />
          </SideScroll>
          <h2 className="font-semibold text-tma-blue text-xl my-2">Tags</h2>
          <div className="flex flex-row items-center justify-center gap-2 my-2">
            <Tag label="Info 🧐" type="important" />
            <Tag label="Just Tag 💅" type="default" />
            <Tag label="Error! 😟" type="error" />
            <Tag label="Nice 💪" type="success" />
          </div>
          <h2 className="font-semibold text-tma-blue text-xl my-2">Card</h2>
          <Card
            label="TWA-Components"
            description="npm install twa-components"
            action={{ label: 'Github', variant: 'primary' }}
            tag={{ label: 'Star!', size: 'small', type: 'important' }}
            className="my-4 mx-auto"
          />
          <h2 className="font-semibold text-tma-blue text-xl my-2">Buttons</h2>
          <div className="flex flex-col gap-2 items-center">
            <Button label="Connect Wallet!" fullFilled icon={TMAWallet} />
            <Button label="Do you see me?" variant="secondary" fullFilled />
            <Button
              label="Use custom className"
              variant="secondary"
              fullFilled
              className="text-red-500 !bg-red-300 dark:!bg-red-950 dark:text-red-50"
            />
            <Button
              label="Connect another wallet"
              variant="plain"
              size="small"
              fullFilled
              icon={TMAWallet}
              iconOnRight
            />
          </div>
          <h2 className="font-semibold text-tma-blue text-xl my-2">Island</h2>
          <Island
            withLabels
            routes={[
              { key: 'route1', label: 'Feed' },
              { key: 'route2', label: 'Profile' },
              {
                key: 'route3',
                label: 'Settings',
              },
            ]}
          />
        </div>
      </Layout>
    </div>
  );
}
