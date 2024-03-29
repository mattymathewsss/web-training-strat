
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Search from 'components/utility/search/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const {locale} = useRouter();
  return (
    <section className='flex flex-col items-center gap-y-5 mt-24 sm:mt-36'>
       <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
     <Search/>
     <p>
        Google offered in:{' '}
        <Link className="underline text-blue-600" href="/" locale={locale === 'en' ? 'fr' : 'en'}>
        Français
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};