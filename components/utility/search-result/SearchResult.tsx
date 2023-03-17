import { ISearchData } from 'lib/search/types';
import Link from 'next/link';

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className || 'default'} `}
    >
      <Link className="cursor:pointer hover:underline"
        target="_blank"
        rel="noopener noreferrer" href={url}>
        <p>{url}</p>
        <p className="text-blue-600 text-xl ">{title}</p>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;